var express = require("express");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/blog_demo");

// POST = title, content
var postSchema = new Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);


// USER - email, name
var userSchema = new Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

User.findOne({name: "Yorme Dammy"}, function(err, user){
    if(err){
        // console.log(err);
    } else {
        user.posts.push({
            title: "3 Things i really hate",
            content: "you. you. you"
        });
        user.save(function(err, user){
                if(err){
                    console.log(err)
                }else{
                    console.log(user)
                }
        })
    }
}); 

// var newUser = new User({
//     email: "murphy@yahoo.com",
//     name: "Yorme Dammy"
// });

// newUser.posts.push({
//     title: "How to code in node",
//     content: "just kidding. go and learn"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err)
//     } else{
//         console.log(user)
//     }
// });

// Post.create({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// }, function(err, post){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(post)
//     }
// });
