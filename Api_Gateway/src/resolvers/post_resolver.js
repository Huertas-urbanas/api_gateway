const postResolver = {
    Query: {
        postByUser: async(_, {user}, { dataSources, userIdToken }) => {
            if (user == userIdToken)
                return await dataSources.postAPI.postByUser(user)
            else
                return null;
        }
    },

    Mutation: {
        createPost: async(_, {post}, { dataSources, userIdToken }) => {
            if (post.user == userIdToken)
                return await dataSources.postAPI.createPost(post)
            else
                return null;
        },
        
        updatePost: async(_, {post}, { dataSources, userIdToken }) => {
            //userPost = (await dataSources.postAPI.postByUser(post.user)).user
            if (post.user == userIdToken)
                return await dataSources.postAPI.updatePost(post)
            else
                return null;
        },
        
        deletePost: async(_, {post}, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).user
            if (username == usernameToken)
                return await dataSources.postAPI.deletePost(post.id, post.user)
            else
                return null;
        },


    }
}

module.exports = postResolver;