const commentResolver = {
    Query: {
        commentByIdPost: async(_, {post}, {dataSources, userIdToken}) => {
            //usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            //if (username == usernameToken)
                return dataSources.commentAPI.commentByIdPost(post)
            //else
                return null
        }
    },

    Mutation: {
        createComment: async(_, {comment}, {dataSources}) => {
            /*    const commentInput  ={
                    user:commentInput.user,
                    content : commentInput.content,
                    image: commentInput.image,
                    lastChange: (new Date()).toISOString()
                } */ 
            return await dataSources.commentAPI.createComment(comment)
   
        },
        
        updateComment: async(_, {comment}, {dataSources, userIdToken}) => {
            //usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            //usernameComment = comment.username;
            if (comment.user == userIdToken)
                return await dataSources.commentAPI.updateComment(comment)
            else
                return null
        },
        
        deleteComment: async(_, {comment}, {dataSources, userIdToken}) => {
            //usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            //usernameComment = (await datasources.commentApi.commentById(commentId)).username
            if (comment.user == userIdToken)
                return await dataSources.commentAPI.deleteComment(comment)
            else
                return null
        },


    }
}

module.exports = commentResolver;