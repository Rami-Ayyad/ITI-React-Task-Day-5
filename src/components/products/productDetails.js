import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./../axiosConfig/axiosConfig";
import { useSelector, useDispatch } from "react-redux";
import changeProductDetails from "./../../store/actions/productDetails";

const Productdetails = () => {
  const params = useParams();
  // const [product, setProduct] = useState({});
  const loader = useSelector((state) => state.loader.loader);
  const product = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeProductDetails(params.id));
  }, []);

  return (
    <>
      {loader && (
        <div className="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <img src={product.image} />
      <h2>{product.id}</h2>
      <h4>{product.title}</h4>
      <h4>{product.price}</h4>
    </>
  );
};

export default Productdetails;
