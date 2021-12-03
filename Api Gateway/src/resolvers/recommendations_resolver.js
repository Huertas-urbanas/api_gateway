const recommendationResolver = {
    Query: {
        recommendationById: async(_, {username, Id}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username = usernameToken)
                return dataSources.recommendationAPI.recommendationById(Id)
            else
                return null
        },
        recommendationByTitle: async(_, {username, title}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username = usernameToken)
                return dataSources.recommendationAPI.recommendationByTitle(title)
            else
                return null
        },
        recommendationAll: async(_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.recommendationAPI.recommendations()
            else
                return null
        },

    },

    Mutation: {
        createRecommendation: async(_, {recommendation}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.recommendationAPI.createRecommendation(recommendation)
            else
                return null
        },
        
        updateRecommendation: async(_, {recommendation}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.recommendationAPI.updateRecommendation(recommendation)
            else
                return null
        },
        
        deleteRecommendation: async(_, { recommendation}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.recommendationAPI.deleteRecommendation(recommendation)
            else
                return null
        },


    }
}

module.exports = recommendationResolver;