import { combineReducers } from "redux";
import languageReducer from './reducers/reducer';
import loaderReducer from './reducers/loader';
import ProductsReducer from './reducers/products';
import detailsReducer from './reducers/productDetails';




export default  combineReducers({
     
    language:languageReducer,
    loader:loaderReducer,
    products:ProductsReducer,
    productDetails:detailsReducer


  })


  // {

  //   language:{
  //     lang:"en"
  //   },
     
  //   loader:{
  //     loader:true
  //   },

    //  products:[db],
   // productDetails:{}

  // }