# Academic Portfolio Application - Architecture Overview

## Overview

This is a modern academic portfolio web application built for Md Rezwan Bin Mizan, a PhD candidate in Mathematics at the University of Houston. The application showcases research interests, publications, education, experience, and provides contact functionality. It's built using a full-stack TypeScript architecture with React frontend and Express backend, designed for deployment on Replit.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/UI component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom academic color scheme
- **State Management**: React Query (TanStack Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: In-memory storage with extensible interface
- **API Structure**: RESTful APIs with `/api` prefix

## Key Components

### Frontend Structure
- **Pages**: Single-page application with home page and 404 handling
- **Components**: Modular components for each portfolio section
  - Navigation with smooth scrolling
  - Hero section with download CV functionality and profile photo
  - Research interests showcase
  - Publications listing
  - Education timeline
  - Experience and presentations
  - Skills with progress indicators
  - Photo gallery with organized categories (conferences, posters, research, profile)
  - Contact form with toast notifications
- **Styling**: Academic-themed design with professional color palette

### Backend Structure
- **Storage Interface**: Extensible IStorage interface for CRUD operations
- **Routes**: Centralized route registration system
- **Error Handling**: Global error middleware
- **Development Tools**: Hot module replacement and logging

### Database Schema
- **Users Table**: Basic user management with username/password
- **Extensible Design**: Schema can be extended for additional entities
- **Type Safety**: Drizzle-Zod integration for runtime validation

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **Server Processing**: Express routes handle requests and interact with storage
3. **Data Storage**: Drizzle ORM manages database operations
4. **Response Handling**: JSON responses with proper error handling
5. **UI Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Component Library**: Comprehensive Shadcn/UI + Radix UI components
- **Icons**: Lucide React icon library
- **Forms**: React Hook Form with Zod validation
- **Utilities**: Date-fns, clsx, class-variance-authority

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: PostgreSQL session store ready
- **Development**: tsx for TypeScript execution

### Build and Development
- **Bundling**: Vite for frontend, esbuild for backend
- **Development**: Concurrent frontend/backend development
- **Type Checking**: Shared TypeScript configuration

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite dev server with HMR
- **API Proxy**: Development server proxies API requests
- **Error Handling**: Runtime error overlays for debugging

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild creates production server bundle
- **Static Serving**: Express serves built frontend assets
- **Environment**: Production mode with proper error handling

### Replit Integration
- **Development Banner**: Replit development environment detection
- **File Structure**: Optimized for Replit's file system
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

## Changelog

```
Changelog:
- June 30, 2025. Initial setup
- January 1, 2025. Added photo gallery feature with organized categories for conferences, posters, research, and profile photos. Removed database integration per user preference for simple file-based updates.
- January 4, 2025. Updated photo gallery tabs to use general terms (Academic Events, Presentations, Research Work, Professional) instead of specific names. Removed CV download section and phone number from contact page as all information is already displayed on the portfolio.
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```