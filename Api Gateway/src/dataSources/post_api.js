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
  async updatePost(user,id, post) {
      post = new Object(JSON.parse(JSON.stringify(post)));
      return await this.put(`post/update/${user}/${id}`, post);
    }
    async postByUsername(username) {
      return await this.get(`/post/${username}`);
    }
    async deletePost(user, id) {
      return await this.delete(`/post/delete/${user}/${id}`);
    }
  }
module.exports = PostAPI;