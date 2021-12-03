const commentResolver = {
    Query: {
        commentByUsername: async(_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.commentAPI.commentByUsername(username)
            else
                return null
        }
    },

    Mutation: {
        createComment: async(_, {comment}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameComment = comment.username;
            if (usernameComment == usernameToken)
                return dataSources.commentAPI.createComment(comment)
            else
                return null
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