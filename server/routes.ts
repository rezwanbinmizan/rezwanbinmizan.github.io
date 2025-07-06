import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Google Search Console verification file
  app.get('/google2Ov-o32R6zjoKrad8d57G-gHkUJwWOKCx00uQGO_FaA.html', (req, res) => {
    res.type('text/html').send('google-site-verification: google2Ov-o32R6zjoKrad8d57G-gHkUJwWOKCx00uQGO_FaA.html');
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
