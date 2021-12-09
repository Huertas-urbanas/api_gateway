const { gql } = require("apollo-server")

const recommendationTypeDefs =  gql `
    type Recommendation {
        id: String!
        username: String!
        title: String!
        content: String!
        category: String!
        releaseDate: String!
    }

    input RecommendationInput {
        username : String!
        title: String!
        content: String!
        category: String
    }

    input UpdateRecommendationInput{
        id: String!
        username: String!
        title: String!
        content: String!
        category: String!
        releaseDate: String!
    }

    extend type Query {
        recommendationById(id: String!): Recommendation
        recommendationByTitle(title: String!): [Recommendation]
        recommendationAll: [Recommendation]
    }

    extend type Mutation {
        createRecommendation(recommendation: RecommendationInput!): Recommendation!
        updateRecommendation(recommendation: UpdateRecommendationInput!): Recommendation!
        deleteRecommendation(id: String!): Recommendation

    }

`

module.exports = recommendationTypeDefs;