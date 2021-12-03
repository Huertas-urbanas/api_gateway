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
        id:Int!
        username!
        content: String!
        image: String!
    }
    input DeleteCommentInput {
        id: Int!
        username: Int!
    }

    extend type Query {
        commentByIdPost(post: Int!): [Comment]
    }

    extend type Mutation {
        createComment(comment: CommentInput!): Comment
        updateComment(comment: UpdateCommentInput!): Comment
        deleteComment(comment: DeleteCommentInput!): Comment
    }
    
`

module.exports = commentTypeDefs;