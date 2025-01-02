import dotenv from 'dotenv';
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { google } from 'googleapis';
import path from 'path';

// Environment setup
const environment = process.env.NODE_ENV || 'development';
const envPath = path.resolve(process.cwd(), `.env.${environment}`);
dotenv.config({ path: envPath });

const app = new Hono();

// CORS setup
app.use("/*", cors({
  origin: environment === 'production' ? "http://207.180.235.87" : "http://localhost:5173",
}));

// Google Calendar OAuth2 setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Schedule appointment endpoint
app.post("/schedule", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return c.json({ success: false, error: 'No authorization token provided' }, 401);
    }

    const token = authHeader.split(' ')[1];
    const {
      selectedDate,
      duration,
      meetingType,
      venue,
      name,
      email,
      services,
      notes
    } = await c.req.json();

    // Set credentials
    oAuth2Client.setCredentials({ access_token: token });
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

    // Calculate end time
    const startTime = new Date(selectedDate);
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + parseInt(duration));

    const event = {
      summary: `Consultation with ${name}`,
      description: `
      Services Requested: ${services.join(', ')}

      Meeting Type: ${meetingType}
      ${meetingType === 'in-person' ? `Venue: ${venue}` : 'Online Meeting'}

      Client Details:
      Name: ${name}
      Email: ${email}

      ${notes ? `Additional Notes:\n${notes}` : ''}
            `.trim(),
            start: {
              dateTime: startTime.toISOString(),
              timeZone: 'Europe/Berlin',
            },
            end: {
              dateTime: endTime.toISOString(),
              timeZone: 'Europe/Berlin',
            },
            location: meetingType === 'in-person' ? venue : 'Online Meeting',
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
    });

    return c.json({ success: true, event: response.data });
  } catch (error) {
    console.error('Calendar API Error:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Get weekly appointments endpoint
app.get("/appointments/week", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return c.json({ success: false, error: 'No authorization token provided' }, 401);
    }

    const token = authHeader.split(' ')[1];

    // Set credentials
    oAuth2Client.setCredentials({ access_token: token });
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

    // Calculate week range
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(now.getDate() - now.getDay()); // Start from Sunday

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7); // End on Saturday

    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: startOfWeek.toISOString(),
      timeMax: endOfWeek.toISOString(),
      maxResults: 100,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return c.json({ 
      success: true, 
      events: response.data.items 
    });
  } catch (error) {
    console.error('Calendar API Error:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Start server
const port = process.env.PORT || 3002;
serve({ 
  fetch: app.fetch, 
  port: parseInt(port.toString()) 
});

console.log(`Server running in ${environment} mode on port ${port}`);