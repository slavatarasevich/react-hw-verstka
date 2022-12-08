import axios from "axios";

class PostServices {
  static async regUsers(nameUser, emailUser) {
    try {
      const result = await axios.post(" http://localhost:3001/posts", {
        userName,
        email,
      });
      return result.status;
    } catch (error) {
      return error;
    }
  }
}

export default PostServices;
