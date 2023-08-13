import axios from "axios";

export const axiosMovies = axios.create({

    baseURL:'https://api.themoviedb.org/3',
    params:{
        api_key:'3f72f7829f88b84747dfa3dc1e637f1d'
    }
    
})

axiosMovies.interceptors.request.use((res)=>{
    // console.log(res.data);
    return res
},(err)=>{
    // console.log(err.message);
    return Promise.reject(err);
})

axiosMovies.interceptors.response.use((res)=>{  
    // console.log(res.data);
    return res
},(err)=>{
    // console.log(err.message);
    return Promise.reject(err);
})