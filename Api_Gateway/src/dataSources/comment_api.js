const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class CommentAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = serverConfig.comment_api_url;
    }
  
    async createComment(comment) {
      comment = new Object(JSON.parse(JSON.stringify(comment)));
      return await this.post(`/comment/`, comment);
    }
    async updateComment(comment) {
      comment = new Object(JSON.parse(JSON.stringify(comment)));
      return await this.put(`/comment/update/${comment.user}/${comment.id}/`, comment);
    }
    async commentByIdPost(post) {
      return await this.get(`/comment/${post}`);
    }
    async deleteComment(comment) {
      return await this.delete(`/comment/delete/${comment.user}/${comment.id}/`);
    }
  }
  module.exports = CommentAPI;