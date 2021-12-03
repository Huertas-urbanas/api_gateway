const { gql } = require("apollo-server")

const commentTypeDefs =  gql `
    type Comment {
        id: Int!
        username: Int!
        content: String!
        post: Id!
        date: String!
        image: String!
    }

    input CommentInput {
        username : Int!
        content: String!
        image: String!
    }

    input UpdateCommentInput{
        content: String!
        image: String!
    }
    type DeleteCommentInput {
        id: Int!
        username: Int!
    }

    extend type Query {
        commentByUsername(username: Int!): [Comment]
    }

    extend type Mutation {
        createComment(comment: CommentInput!): Comment
    }
    
    extend type Mutation {
        updateComment(comment: UpdateCommentInput!): Comment
    }
    
    extend type Mutation {
        deleteComment(comment: DeleteCommentInput!): Comment
    }
`

module.exports = commentTypeDefs;