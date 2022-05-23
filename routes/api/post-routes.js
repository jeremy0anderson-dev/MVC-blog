const router = require('express').Router();
const {postEvents} = require('../../controllers');
router.route('/')
    .get(postEvents.getAllPosts)
    .post(postEvents.createPost);
router.route('/:postId')
    .get(postEvents.getPostById)

module.exports = router;