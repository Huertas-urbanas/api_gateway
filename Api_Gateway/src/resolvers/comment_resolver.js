const commentResolver = {
    Query: {
        commentByIdPost: async(_, {username,postId}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.commentAPI.commentByIdPost(username,postId)
            else
                return null
        }
    },

    Mutation: {
        createComment: async(_, {CommentInput}, {dataSources}) => {
                const commentInput  ={
                    username:userInput.username,
                    content : CommentInput.content,
                    image:CommentInput.image,
                    lastChange: (new Date()).toISOString()
                }  
            return dataSources.commentAPI.createComment(commentInput)
   
        },
        
        updateComment: async(_, {comment}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameComment = comment.username;
            if (usernameComment == usernameToken)
                return dataSources.commentAPI.updateComment(comment)
            else
                return null
        },
        
        deleteComment: async(_, {comment}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameComment = (await datasources.commentApi.commentById(commentId)).username
            if (usernameComment == usernameToken)
                return dataSources.commentAPI.deleteComment(comment)
            else
                return null
        },


    }
}

module.exports = commentResolver;