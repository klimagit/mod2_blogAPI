module.exports = {
    getComments(req, res) {
      //console.log(req.params.postId)
      res.status(200).send(store.posts[req.params.postId].comments)
    }, 
    addComment(req, res) {
      let newComm = req.body
      console.log(newComm)
      store.posts[req.params.postId].comments.push(newComm)
      res.status(201).send(store.posts[req.params.postId].comments)
    },
    updateComment(req, res) {
      store.posts[req.params.postId].comments[req.params.commentId] = req.body
      res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
    },
    removeComment(req, res) {
      store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
      res.status(200).send(store.posts[req.params.postId].comments)
    }  
  }