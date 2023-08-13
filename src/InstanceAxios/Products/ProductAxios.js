import axios from "axios";

const axiosForProduct = axios.create({
    baseURL:'https://fakestoreapi.com',
  
})

export default axiosForProduct ; 