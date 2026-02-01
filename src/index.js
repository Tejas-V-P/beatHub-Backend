// src/index.js
const express = require('express');
const app = express();
const PORT = 3000;

// 1. Import the router
const postRouter = require('./routes/posts.routes.js');

app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});