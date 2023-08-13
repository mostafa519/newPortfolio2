import axiosInstance from "../../InstanceAxios/AxiosArticles/ArticlesAxios";


export default function changeArticles(){

    return (dispatch)=>{
        axiosInstance.get("/everything", {
            params: {
                q: "react"
            }
        }).then((res) => {
            dispatch({type:'SET_ARTICLES',payload:res.data.articles})
        }).catch((err) => {

            console.log(err);
        })

    }
}