import React from "react";
import NavBarComponent from "../Component/NavBar/NavBar";
import FooterComponent from "../Component/Footer/Footer";
import Articles from "../Pages/Articles/Article";
import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import Product from "../Pages/Products/Product";
import Movies from "../Pages/Movies/Movies";
import Favorites from "../Pages/Favorite/Favorite";
import { Provider } from "react-redux";
import store from "../Store/Store/StoreAll";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills"; 

export default function Main() {
  return (
    <>
    <Provider store={store}>
      <NavBarComponent></NavBarComponent>
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/Product2" element={<Skills/>}></Route>
        <Route path="/contact" element={<FooterComponent/>}></Route>
        <Route path="/favorite" element={<Favorites/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
       </Provider>
    </>
  );
}
