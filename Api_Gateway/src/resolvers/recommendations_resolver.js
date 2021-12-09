const recommendationResolver = {
    Query: {
        recommendationById: async(_, {id}, {dataSources, userIdToken}) => {
            //usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            //const recommendation = await dataSources.recommendationAPI.recommendationById(id)
            //usernameRecommendation = recommendation.username
            if(usernameToken == usernameRecommendation)
                return recommendation;
            else
                return null
        },
        recommendationByTitle: async(_, {username, title}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(usernameToken == usernameTransaction)
                return transaction;
            if (username = usernameToken)
                return dataSources.recommendationAPI.recommendationByTitle(title)
            else
                return null
        },
        recommendationAll: async(_, {}, {dataSources, userIdToken}) => {
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
            if (recommendation.username == usernameToken)
                return dataSources.recommendationAPI.createRecommendation(recommendation)
            else
                return null
        },
        
        updateRecommendation: async(_, {recommendation}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameRecommendation = (await dataSources.recommendationAPI.recommendationById(recommendation.id)).username
            if (usernameRecommendation == usernameToken)
                return dataSources.recommendationAPI.updateRecommendation(recommendation)
            else
                return null
        },
        
        deleteRecommendation: async(_, {id}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameRecommendation = (await dataSources.recommendationAPI.recommendationById(id)).username
            if (usernameRecommendation == usernameToken)
                return dataSources.recommendationAPI.deleteRecommendation(id)
            else
                return null
        },


    }
}

module.exports = recommendationResolver;