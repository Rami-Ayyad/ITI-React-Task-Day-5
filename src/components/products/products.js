import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axiosInstance from "./../axiosConfig/axiosConfig";
import { useSelector, useDispatch } from "react-redux";
import changeProducts from "./../../store/actions/products";
const Products = () => {
  const loader = useSelector((state) => state.loader.loader);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

             

  useEffect(() => {
    dispatch(changeProducts());
  }, []);

  //   axios.post("url",{id:1,title:"test"},{}).then().catch()

  return (
    <div>
      <h4>Products</h4>

      {loader && (
        <div className="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* <img src={`https://image.tmdb.org/t/p/w500/${}`}/> */}
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/product-details/${product.id}`}>{product.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
