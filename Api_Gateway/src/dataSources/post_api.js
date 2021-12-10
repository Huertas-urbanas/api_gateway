const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PostAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = serverConfig.post_api_url;
    }
  
    async createPost(post) {
      post = new Object(JSON.parse(JSON.stringify(post)));
      return await this.post(`/posts/`, post);
    }
    async updatePost(post) {
      post = new Object(JSON.parse(JSON.stringify(post)));
      return await this.put(`post/update/${post.user}/${post.id}`, post);
    }
    async postByUser(user) {
      return await this.get(`/post/${user}`);
    }
    async deletePost(id, user) {
      return await this.delete(`/post/delete/${user}/${id}`);
    }
  }
module.exports = PostAPI;