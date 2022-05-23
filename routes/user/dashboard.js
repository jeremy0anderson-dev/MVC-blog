const router = require('express').Router();
const {auth} = require('../../utils/auth');

router.get('/', auth, (req, res)=>{
    res.render('dashboard', {
        layout: "default",
        logout: "Log Out"
    })
})

module.exports = router;