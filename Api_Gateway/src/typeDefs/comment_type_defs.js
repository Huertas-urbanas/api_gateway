const { gql } = require("apollo-server")

const commentTypeDefs =  gql `
    type Comment {
        id: Int!
        user: Int!
        content: String!
        post: Int!
        datepublished: String!
        image: String
    }

    input CommentInput {
        user : Int!
        post: Int!
        content: String!
        image: String
    }

    input UpdateCommentInput {
        id: Int!
        user: Int!
        content: String!
        datepublished: String!
        image: String
    }
    input DeleteCommentInput {
        id: Int!
        user: Int!
    }

    extend type Query {
        commentByIdPost(post: Int!): [Comment]
    }

    extend type Mutation {
        createComment(comment: CommentInput!): String
        updateComment(comment: UpdateCommentInput!): Comment
        deleteComment(comment: DeleteCommentInput!): String
    }
    
`

module.exports = commentTypeDefs;