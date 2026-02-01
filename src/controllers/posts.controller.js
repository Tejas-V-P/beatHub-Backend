// src/controllers/posts.controller.js

const getAllPosts = (req, res) => {
  res.status(200).json({
    message: 'All blog posts retrieved',
  });
};

const getPostById = (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    message: `You requested data for Post ID: ${postId}`,
  });
};

module.exports = {
  getAllPosts,
  getPostById,
};
