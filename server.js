const routes = require("./routes")  //lokking for index.js
const express = require('express')
const bodyPareser = require('body-parser')


global.store = {}     //global var !!!????
store.posts = []


let app = express()
app.use(bodyPareser.json())


app.get('/posts', (req,res)=>{
    routes.posts.getPosts(req,res)
})

app.post('/posts', (req,res)=>{
    routes.posts.addPost(req,res)
})

app.put('/posts/:postId', (req,res)=>{
    routes.posts.updatePost(req,res)
})

app.delete('/posts/:postId', (req,res)=>{
    routes.posts.removePost(req,res)
})

app.get('/posts/:postId/comments', (req,res)=>{
    routes.comments.getComments(req,res)
})

app.post('/posts/:postId/comments', (req,res)=>{
    routes.comments.addComment(req,res)
})

app.put('/posts/:postId/comments/:commentId', (req,res)=>{
    routes.comments.updateComment(req,res)
})

app.delete('/posts/:postId/comments/:commentId', (req,res)=>{
    routes.comments.removeComment(req,res)
})


app.listen(3000)