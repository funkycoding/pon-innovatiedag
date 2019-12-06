import axios from 'axios';

class BaseAxiosService {
  constructor(baseUrl) {
    let service = axios.create({
        baseURL: baseUrl
    });

    this.request = service;
  }
}

export default BaseAxiosService;