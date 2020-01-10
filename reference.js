var express = require("express");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/blog_demo_ref");

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
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);

User.create({
    email: "tee@gmail.com",
    name: "Teetee Tee"
});

