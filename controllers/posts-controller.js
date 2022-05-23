const {Post} = require('../models');
const postEvents = {
    getAllPostsByUserId(req, res){
        Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        }).then(userPostData=>{
            if (!userPostData){res.status(404).json({message: "No posts by this user yet"})}
            res.status(200).render('dashboard', {
                layout: "default",
                logout: "Log Out",
                posts: userPostData
            })
        })
    },
    getAllPosts(req, res){
        Post.findAll({})
            .then(postData => {
            let posts = postData.map(({post_id, post_url, title, created_at, user_id})=>{
               return  {
                    id: post_id,
                    title: title,
                    url: post_url,
                    user_id: user_id,
                    created_at: created_at
            }});
            res.render('home',{
                layout: "default",
                posts: posts
            })
        })
    },
    getPostById({params}, res){
        Post.findOne({
            where: {
                id: params.id
            }
        })
    },
    createPost(){}

}

module.exports = postEvents;