const router = require('express').Router();
const {auth} = require('../../utils/auth');

router.get('/', auth, (req, res)=>{

})

module.exports = router;