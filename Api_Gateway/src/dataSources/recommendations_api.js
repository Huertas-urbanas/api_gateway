const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class RecommendationAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = serverConfig.recommendations_api_url;
    }
  
    async createRecommendation(recommendation) {
        recommendation = new Object(JSON.parse(JSON.stringify(recommendation)));
        return await this.post("/recommendations", recommendation);
    }
    async updateRecommendation(id, recommendation) {
        recommendation = new Object(JSON.parse(JSON.stringify(recommendation)));
        return await this.put(`/recommendations/${id}`, recommendation);
      }
      async recommendations() {
        return await this.get(`/recommendations`);
      }
      async recommendationByTitle(title) {
        return await this.get(`/recommendations/findByTitle/${title}`);
      }
     async recommendationById(id) {
        return await this.get(`/recommendations/findById/${id}`);
      }
    
      async deleteRecommendation(id) {
        return await this.delete(`/recommendations/${id}`);
      }
  }
module.exports = RecommendationAPI;