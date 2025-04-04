import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add a simple API endpoint to handle contact form submissions
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }
    
    // In a real application, we would store this in a database
    // or send an email to the site owner
    
    return res.status(200).json({ 
      success: true,
      message: 'Your message has been received' 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
