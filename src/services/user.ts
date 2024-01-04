import axios from "axios";
import User from "../models/user";

class UserService {
  http = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});

  async getUsers() {
    const response = await this.http.get<User[]>('/users');

    return response.data;
  }

  async addUser(name: string) {
    const response = await this.http.post<User>('/users', {name: name});

    return response.data;
  }

  async removeUser(id: number) {
    const response = await this.http.delete('/users/' + id);

    return response.data;
  }
}

export default new UserService;
