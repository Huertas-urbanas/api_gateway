const { gql } = require("apollo-server")

const postTypeDefs =  gql `
    type Post {
        id: Int!
        user: Int!
        text: String!
        date: String!
        image: String!
    }

    input postInput {
        user: Int!
        text: String!
        image: String!
    }

    input UpdatePostInput{
        content: String!
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
        createPost(post: postInput!): Post
        updatePost(post: UpdatePostInput!): Post
        deletePost(post: DeletePostInput!): Post
    }
    
`

module.exports = postTypeDefs;