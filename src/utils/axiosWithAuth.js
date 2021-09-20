import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "", //eventual endpoint baseURL goes here
    headers: {
      token: token
    }
  });
};

export default axiosWithAuth;
