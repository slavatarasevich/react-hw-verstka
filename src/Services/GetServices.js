import axios from "axios";

class GetServices {
  static async getUsers() {
    const result = await axios.get("http://localhost:3001/posts");
    return result.data;
  }

  static async getAdmin() {
    const result = await axios.get("http://localhost:3001/adminProfile");
    return result.data;
  }
}

export default GetServices;
