import supabase from "../config/supabase-client";

class UserService {
  async getUsers() {
    try {
      const {data, error} = await supabase.from('User').select()

      if (error) {console.warn(error.message)}

      if (data) {return data}

    } catch (error) {
      alert(error.message);
    }
  }

  // async addUser(name: string) {
  //   const response = await axios.post<User>(baseUrl + '/users', {name: name});
  //
  //   return response.data;
  // }
  //
  // async removeUser(id: number) {
  //   const response = await axios.delete(baseUrl + '/users/' + id);
  //
  //   return response.data;
  // }
}

export default new UserService
