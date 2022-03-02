import axios from "axios";
import "regenerator-runtime/runtime";
import "core-js/stable";

const API_END_POINT = "https://jsonplaceholder.typicode.com";

const request = async (url, options = {}) => {
  try {
    const fullUrl = `${API_END_POINT}${url}`;
    const response = await axios.get(API_END_POINT + url, options);

    if (response.data) {
      return response.data;
    }

    throw new Error("API 통신 실패");
  } catch (e) {
    console.log(e);
    // alert(e.message);
  }
};

export default request;
