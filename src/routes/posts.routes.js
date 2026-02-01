// src/routes/posts.routes.js

const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

// Get all posts
router.get('/', postsController.getAllPosts);

// Get a single post by ID
router.get('/:id', postsController.getPostById);

module.exports = router;
