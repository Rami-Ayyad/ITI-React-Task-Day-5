import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import Products from "./components/products/products";
import Productdetails from "./components/products/productDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeClass from "./components/home/HomeClass";
import { LanguageProvider, languageContext } from "./contexts/languageContext";
import {useState} from 'react'
import { LoaderProvider } from "./contexts/loaderContext";
function App() {

  const [lang, setLang] = useState("en");

  const [loader,setLoader]= useState(true)

  return (
    <>
      <Router>
        <LanguageProvider value={{lang,setLang}}>
          <LoaderProvider value={{loader,setLoader}}>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/products" exact component={Products} />
            <Route
              path="/product-details/:id"
              exact
              component={Productdetails}
            />
          </Switch>
          </LoaderProvider>
        </LanguageProvider>
      </Router>
    </>
  );
}

export default App;
