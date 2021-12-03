const postResolver = {
    Query: {
        postByUsername: async(_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.postAPI.postByUsername(username)
            else
                return null
        }
    },

    Mutation: {
        createPost: async(_, {post}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.postAPI.createPost(post)
            else
                return null
        },
        
        updatePost: async(_, {post}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.postAPI.updatePost(post)
            else
                return null
        },
        
        deletePost: async(_, { post}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.postAPI.deletePost(post)
            else
                return null
        },


    }
}

module.exports = postResolver;