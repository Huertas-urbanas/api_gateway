const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class CommentAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = serverConfig.comment_api_url;
    }
  
    async createComment(comment) {
      comment = new Object(JSON.parse(JSON.stringify(comment)));
      return await this.post("/comment/", comment);
    }
    async updateComment(user,id, comment) {
      comment = new Object(JSON.parse(JSON.stringify(comment)));
      return await this.put(`comment/update/${user}${id}`, comment);
    }
    async commentByIdPost(postId) {
      return await this.get(`/comment/${postId}`);
    }
    async deleteComment(user, id) {
      return await this.delete(`/comment/delete/${user}${id}`);
    }
  }
  module.exports = CommentAPI;