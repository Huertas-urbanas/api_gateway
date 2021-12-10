const authTypeDefs = require('./auth_type_defs');
const commentTypeDefs = require('./comment_type_defs');
const postTypeDefs = require('./post_type_defs')
const recommendationTypeDefs = require('./recommendation_type_defs');

const schemasArrays = [authTypeDefs, commentTypeDefs, postTypeDefs, recommendationTypeDefs];

module.exports = schemasArrays;