# BeatHub Backend

BeatHub Backend is a MongoDB/Mongoose schema design for a music streaming application.  
It models relationships between artists, albums, songs, users, and playlists using references to support scalability and data consistency.

## How to Run

### Prerequisites
- Node.js installed
- MongoDB connection (local or cloud, e.g. MongoDB Atlas)

### Setup Steps

1. Install dependencies:
   ```bash
   npm i
Create a .env file in the project root and add your MongoDB connection string:

MONGODB_URI=your_mongodb_connection_string


Run the seed script:

node scripts/seed.js

What the Seed Script Does

The seed script clears existing data and populates the database with sample:

Artists

Albums

Songs

Users

Playlists

This allows you to quickly test relationships and queries during development.
