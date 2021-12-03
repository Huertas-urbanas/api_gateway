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
        username : Int!
        title: String!
        content: String!
        category: String!
    }

    input UpdateRecommendationInput{
        id: Int!
        title: String!
        content: String!
        category: String!
    }
    input DeleteRecommendationInput {
        id: String!
    }

    extend type Query {
        recommendationById(Id: Int!): Recommendation
        recommendationByTitle(title: String!): [Recommendation]
        recommendationAll() :[Recommendation]
    }

    extend type Mutation {
        createRecommendation(Recommendation: recommendationInput!): Recommendation
        updateRecommendation(recommendation: UpdateRecommendationInput!): Recommendation
        deleteRecommendation(recommendation: DeleteRecommendationInput!): Recommendation

    }

`

module.exports = recommendationTypeDefs;