# BeatHub Backend

BeatHub Backend is a MongoDB/Mongoose schema design for a music streaming application.  
It models relationships between artists, albums, songs, users, and playlists using references to support scalability and data consistency.

## Features

- Modular Express.js API structure
- RESTful endpoints for posts management
- Controller-based architecture
- Clean separation of concerns

## How to Run

### Prerequisites
- Node.js installed
- MongoDB connection (local or cloud, e.g. MongoDB Atlas)

### Setup Steps

1. Install dependencies:
   ```bash
   npm i
   ```

2. Create a .env file in the project root and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Run the seed script (optional):
   ```bash
   node scripts/seed.js
   ```

## API Endpoints

- `GET /api/v1/posts` - Get all posts
- `GET /api/v1/posts/:id` - Get post by ID

## What the Seed Script Does

The seed script clears existing data and populates the database with sample:

- Artists
- Albums  
- Songs
- Users
- Playlists

This allows you to quickly test relationships and queries during development.
