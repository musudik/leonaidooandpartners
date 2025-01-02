import { Hono } from "hono";
import { google } from 'googleapis';

const calendar = new Hono();

// Initialize OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Verify token and get calendar client
const getCalendarClient = async (token) => {
  try {
    oauth2Client.setCredentials({ access_token: token });
    return google.calendar({ 
      version: 'v3', 
      auth: oauth2Client 
    });
  } catch (error) {
    console.error('Error creating calendar client:', error);
    throw new Error('Invalid credentials');
  }
};

calendar.post("/schedule", async (c) => {
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

    const calendarClient = await getCalendarClient(token);

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

    const response = await calendarClient.events.insert({
      calendarId: 'primary',
      requestBody: event,
    });

    return c.json({ success: true, event: response.data });
  } catch (error) {
    console.error('Calendar API Error:', error);
    return c.json({ 
      success: false, 
      error: error.message || 'Failed to schedule appointment' 
    }, 500);
  }
});

calendar.get("/appointments/week", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return c.json({ success: false, error: 'No authorization token provided' }, 401);
    }

    const token = authHeader.split(' ')[1];
    const calendarClient = await getCalendarClient(token);

    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(now.getDate() - now.getDay());

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);

    const response = await calendarClient.events.list({
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
    return c.json({ 
      success: false, 
      error: error.message || 'Failed to fetch appointments' 
    }, 500);
  }
});

calendar.get("/verify-token", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return c.json({ success: false, error: 'No authorization token provided' }, 401);
    }

    const token = authHeader.split(' ')[1];
    await getCalendarClient(token);

    return c.json({ 
      success: true, 
      message: 'Token is valid' 
    });
  } catch (error) {
    console.error('Token verification error:', error);
    return c.json({ 
      success: false, 
      error: 'Invalid token' 
    }, 401);
  }
});

export default calendar; 