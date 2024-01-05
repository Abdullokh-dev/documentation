import axios from 'axios';
import User from '../models/user';
const baseUrl = 'https://jsonplaceholder.typicode.com';

class UserService {
  async getUsers() {
    const response = await axios.get<User[]>(baseUrl + '/users/')

    return response.data;
  }

  async addUser(name: string) {
    const response = await axios.post<User>(baseUrl + '/users', {name: name});

    return response.data;
  }

  async removeUser(id: number) {
    const response = await axios.delete(baseUrl + '/users/' + id);

    return response.data;
  }
}

export default new UserService
