const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const CommentAPI = require('./dataSources/comment_api');
const PostAPI = require('./dataSources/post_api');
const RecommendationAPI = require('./dataSources/recommendations_api');
const AuthAPI = require('./dataSources/auth_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        commentAPI: new CommentAPI(),
        postAPI: new PostAPI(),
        recommendationAPI: new RecommendationAPI(),
        authAPI: new AuthAPI(),
 }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
