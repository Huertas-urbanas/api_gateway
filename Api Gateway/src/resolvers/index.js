const authResolver = require('./auth_resolver');
const commentResolver = require('./comment_resolver');
const postResolver = require('./post_resolver');
const recommendationResolver = require('./recommendations_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(commentResolver, postResolver, recommendationResolver, authResolver);

module.exports = resolvers;