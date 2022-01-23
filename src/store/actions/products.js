
import axiosInstance from './../../components/axiosConfig/axiosConfig';

export default function changeProducts(x){


    return (dispatch)=>{

        axiosInstance
        .get("/products",{
            // params:{
            //     page:x
            // }
        })
        .then((res) =>dispatch({type:"SET_PRODUCTS",payload:res.data}))
        .catch((err) => console.log(err));



    }
}