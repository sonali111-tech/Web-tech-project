import http from "../http-common";
//API calls , endpoint to a URL and send a request to a server, this is what counts as making an API call. 
//For example, when you log on to any app or ask a question via a browser, you are actually making an API call.
//communicating with server ,endpoints ,makes these API calls 
class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
