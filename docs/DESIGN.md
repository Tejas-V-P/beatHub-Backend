# BeatHub Design Document

## 1. Data Relationships

* **Artist:** Parent entity.
* **Album:** References Artist.
* **Song:** References Album and Artist.
* **User:** Independent entity.
* **Playlist:** References User and contains an array of Song references.

## 2. Design Decisions (Defend Your Code)

**Q: Why did you reference Songs in the Playlist instead of embedding them?**

**A:** Songs are referenced rather than embedded to avoid data duplication and ensure consistency. If a Song’s metadata changes (for example, a title correction or artist update), all Playlists that include that Song will automatically reflect the change. Embedding Songs would require updating every Playlist document that contains the Song, which is inefficient, error-prone, and does not scale well as the number of Playlists grows.

**Q: Why did you reference the Artist in the Song model?**

**A:** Referencing the Artist directly in the Song model enables more efficient and flexible queries. For example, it allows queries like “find all songs by Daft Punk” without first resolving Albums and then Songs. This reduces query complexity, improves performance, and supports use cases where Songs are accessed independently of their Albums (such as search results, recommendations, or Playlists).
