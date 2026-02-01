# BeatHub Design Document

## Overview
BeatHub is a backend data layer designed for a music streaming application.  
The goal of this design is to model real-world music relationships while maintaining data integrity, scalability, and query efficiency using MongoDB and Mongoose.

---

## 1. Data Relationships

### Artist
- Represents a musical artist or group.
- Acts as a **parent entity** in the system.
- One Artist can have many Albums and Songs.

### Album
- Represents a music album released by an Artist.
- References a single Artist using an ObjectId.
- Allows albums to be queried independently or in relation to their artist.

### Song
- Represents an individual track.
- References both:
  - An Album (to preserve album context)
  - An Artist (to enable direct artist-based queries)
- This intentional redundancy improves query performance.

### User
- Represents an application user.
- Exists independently of music data.
- Can create multiple Playlists.

### Playlist
- Represents a curated list of songs created by a User.
- References:
  - One User (owner of the playlist)
  - An array of Song ObjectIds

---

## 2. Design Decisions & Rationale

### Why are Songs referenced in Playlists instead of embedded?

Songs are referenced rather than embedded to avoid data duplication and ensure consistency across the application.  
If a song’s metadata (such as title or duration) is updated, all playlists automatically reflect the change.

Embedding songs would require updating every playlist document containing that song, which is inefficient and error-prone at scale.

This design aligns with MongoDB best practices when dealing with shared, frequently reused data.

---

### Why does the Song model reference both Album and Artist?

Referencing the Artist directly in the Song model allows for efficient queries such as:
- “Find all songs by a specific artist”
- “Generate an artist’s top tracks”

Without this reference, the system would need to:
1. Find all albums by the artist
2. Then find songs belonging to those albums

The additional reference improves read performance and simplifies common query patterns, which is critical in a music streaming application.

---

### Why use ObjectId references instead of embedding large documents?

ObjectId references keep documents small, prevent unnecessary duplication, and allow MongoDB to scale efficiently.  
This design also enables the use of `.populate()` in Mongoose to dynamically resolve relationships when needed.

---

## 3. Scalability Considerations

- The schema supports growth to millions of songs and playlists.
- Additional features such as likes, follows, or listening history can be added without restructuring existing models.
- Indexes can be added later to frequently queried fields (e.g., artist, user).

---


## 4. References vs. Embedding

### Why Songs Are Referenced in Playlists

Songs are stored as references in the Playlist model rather than being embedded directly to avoid data duplication and ensure consistency across the application. A single Song can belong to many Playlists, and its metadata (such as title, artist name, or duration) may change over time.

By using references:
- Updates to a Song are reflected everywhere it appears
- Storage is more efficient
- Playlists remain lightweight and scalable

Embedding Songs would require updating every Playlist document whenever a Song changes, which becomes inefficient and error-prone as the system grows.

---

### Why Artists Are Referenced in Songs

Each Song references its Artist directly to support efficient querying and flexible access patterns. This allows queries such as “find all songs by a specific artist” without first resolving Albums.

This design choice:
- Reduces query complexity
- Improves performance for common queries
- Supports features like search, recommendations, and Playlists where Songs are accessed independently of Albums

While this introduces some redundancy (Artist referenced in both Album and Song), it is a deliberate trade-off to optimize read performance in a music streaming context.

---

### When Embedding Would Make Sense

Embedding would be appropriate for data that:
- Rarely changes
- Is tightly coupled to the parent document
- Is not reused elsewhere (e.g., comments on a playlist)

In BeatHub, Songs and Artists are shared across many entities, making references the more scalable choice.


## Conclusion

This schema design prioritizes clarity, performance, and maintainability.  
It reflects real-world data relationships while remaining flexible enough to support future feature expansion.
