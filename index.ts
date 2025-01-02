import dotenv from 'dotenv';
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import ollama from "ollama";
import { cors } from "hono/cors";
import { google } from 'googleapis';
import path from 'path';

// Determine which environment file to load
const environment = process.env.NODE_ENV || 'development';
const envPath = path.resolve(process.cwd(), `.env.${environment}`);

// Load environment-specific variables
dotenv.config({ path: envPath });

// Log loaded configuration
console.log('Environment:', environment);
console.log('Loading configuration from:', envPath);
console.log('GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL);
console.log('GOOGLE_CALENDAR_ID:', process.env.GOOGLE_CALENDAR_ID);
console.log('GOOGLE_PRIVATE_KEY exists:', !!process.env.GOOGLE_PRIVATE_KEY);

const app = new Hono();

// Update CORS based on environment
const corsOrigin = environment === 'production' 
  ? "http://207.180.235.87" 
  : "http://localhost:5173";

app.use("/*", cors({
  origin: corsOrigin,
}));


if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CALENDAR_ID) {
  console.error('Missing required Google Calendar credentials in environment variables');
  process.exit(1);
}

// Initialize Google Calendar with error handling
let calendar;
try {
  calendar = google.calendar({ 
    version: 'v3', 
    auth: new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/calendar']
    })
  });
} catch (error) {
  console.error('Failed to initialize Google Calendar:', error);
  process.exit(1);
}

// Calendar endpoint with validation
app.post("/schedule", async (c) => {
  try {
    const body = await c.req.json();
    console.log('Received request body:', body);

    // Validate required fields with detailed logging
    if (!body.selectedDate || !body.duration || !body.meetingType) {
      console.log('Validation failed:', {
        selectedDate: body.selectedDate,
        duration: body.duration,
        meetingType: body.meetingType
      });
      return c.json({ 
        success: false, 
        error: 'Missing required fields' 
      }, 400);
    }

    // Parse and validate the date
    const selectedDate = new Date(body.selectedDate);
    if (isNaN(selectedDate.getTime())) {
      console.log('Invalid date received:', body.selectedDate);
      return c.json({ 
        success: false, 
        error: 'Invalid date format' 
      }, 400);
    }

    // Calculate end time
    const endTime = new Date(selectedDate);
    endTime.setMinutes(endTime.getMinutes() + parseInt(body.duration));

    const event = {
      summary: 'Consultation with Leo Naidoo & Partners',
      description: `Meeting Type: ${body.meetingType}\n${body.meetingType === 'in-person' ? `Venue: ${body.venue}` : 'Online Meeting'}`,
      start: {
        dateTime: selectedDate.toISOString(),
        timeZone: 'Europe/Berlin',
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'Europe/Berlin',
      },
      location: body.meetingType === 'in-person' ? body.venue : 'Online Meeting',
    };

    console.log('Creating calendar event:', event);

    try {
      const response = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        requestBody: event,
      });

      console.log('Calendar API response:', response.data);
      return c.json({ 
        success: true, 
        event: response.data 
      });
    } catch (calendarError) {
      console.error('Calendar API Error:', {
        message: calendarError.message,
        code: calendarError.code,
        errors: calendarError.errors
      });
      return c.json({ 
        success: false, 
        error: `Calendar API Error: ${calendarError.message}` 
      }, 500);
    }
  } catch (error) {
    console.error('Server Error:', error);
    return c.json({ 
      success: false, 
      error: `Server Error: ${error.message}` 
    }, 500);
  }
});

// AI endpoint
app.post("/generate", async (c) => {
  const { prompt } = await c.req.json();
  const response = await ollama.chat({
    model: "qwen2.5:3b",
    messages: [{ role: "user", content: prompt }],
  });
  return c.json({ message: response.message.content });
});

// Add this test endpoint
app.get("/test-calendar", async (c) => {
  try {
    console.log('Testing calendar connection...');
    console.log('Credentials:', {
      clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      calendarId: process.env.GOOGLE_CALENDAR_ID
    });

    const response = await calendar.calendarList.list();
    console.log('Calendar list:', response.data);

    return c.json({ 
      success: true, 
      message: 'Calendar connection successful',
      calendars: response.data 
    });
  } catch (error) {
    console.error('Calendar test error:', error);
    return c.json({ 
      success: false, 
      error: error.message,
      details: error 
    }, 500);
  }
});

// Update port based on environment
const port = process.env.PORT || 3002;
serve({ 
  fetch: app.fetch, 
  port: parseInt(port.toString()) 
});

console.log(`Server running in ${environment} mode on port ${port}`);