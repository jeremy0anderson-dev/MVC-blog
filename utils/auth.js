module.exports = {
    auth: (req, res, next)=>{
        if (!req.session.signedIn){
            res.redirect('/login');
        }
        next();
    }
}