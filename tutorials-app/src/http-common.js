import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
//Axios is a popular, promise-based HTTP client that sports an easy-to-use API and can be used
// in both the browser and Node. js. Making HTTP requests to fetch or save data is one 
//of the most common tasks a client-side JavaScript application will need to do.