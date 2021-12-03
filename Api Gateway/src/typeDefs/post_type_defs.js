const { gql } = require("apollo-server")

const postTypeDefs =  gql `
    type Post {
        id: Int!
        username: Int!
        text: String!
        date: String!
        image: String!
    }

    input postInput {
        username : Int!
        text: String!
        image: String!
    }

    input UpdatePostInput{
        content: String!
        image: String!
    }
    input DeletePostInput {
        id: Int!
        username: Int!
    }

    extend type Query {
        postByUsername(username: Int!): [Post]
    }

    extend type Mutation {
        createPost(post: postInput!): Post
        updatePost(post: UpdatePostInput!): Post
        deletePost(post: DeletePostInput!): Post
    }
    
`

module.exports = postTypeDefs;