const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('home', {
        layout: "default",
        logout: "Log Out"
    })

})


module.exports = router;