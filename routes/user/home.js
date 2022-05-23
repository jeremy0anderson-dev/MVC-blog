const router = require('express').Router();
const {postEvents, userEvents} = require('../../controllers');
router.route('/')
    .get(postEvents.getAllPosts);


module.exports = router;