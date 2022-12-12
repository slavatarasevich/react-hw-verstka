import axios from "axios";

class DelServices {
  static async delUsers(id) {
    try {
      const result = await axios.delete(`http://localhost:3001/posts/${id}`);
      return result.status;
    } catch (error) {
      return error;
    }
  }
}

export default DelServices;
