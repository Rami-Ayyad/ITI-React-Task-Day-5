
import axiosInstance from './../../components/axiosConfig/axiosConfig';

export default function changeProductDetails(_id) {

  return (dispatch) => {
    axiosInstance
      .get(`/products/${_id}`)
      .then((res) => dispatch({ type: "SET_DETAILS", payload: res.data }))
      .catch((err) => console.log(err));
  };
  
}
