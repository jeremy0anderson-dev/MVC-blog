const router = require('express').Router();

const dashboard = require('./dashboard'),
      home = require('./home');

router.use('/dashboard', dashboard);
router.use('/', home);

module.exports = router;