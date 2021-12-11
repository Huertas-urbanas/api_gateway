const { gql } = require("apollo-server")

const postTypeDefs =  gql `
    type Post {
        id: Int!
        user: Int!
        text: String!
        datepublished: String!
        image: String!
    }

    input postInput {
        user: Int!
        text: String!
        image: String!
    }

    input UpdatePostInput{
        id: Int!
        user: Int!
        text: String!
        datepublished: String!
        image: String!
    }
    input DeletePostInput {
        id: Int!
        user: Int!
    }

    extend type Query {
        postByUser(user: Int!): [Post]
    }

    extend type Mutation {
        createPost(post: postInput!): String
        updatePost(post: UpdatePostInput!): Post
        deletePost(post: DeletePostInput!): String
    }
    
`

module.exports = postTypeDefs;