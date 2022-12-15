import axios from "axios";

class PutServices {
  static async editUsers(userName, email, status, id) {
    try {
      const result = await axios.put(`http://localhost:3001/posts/${id}`, {
        userName,
        email,
        status,
      });
      return result.data;
    } catch (error) {
      return error;
    }
  }
}

export default PutServices;
