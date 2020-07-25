import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProduct from "./views/UploadProduct/UploadProduct";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Cart from "./views/Cart/Cart";
import HistoryPage from "./views/HistoryPage/HistoryPage";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "65px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/menu" component={Auth(LandingPage, null)} />
          <Route exact path="/" component={Auth(Home, null)} />
          <Route exact path="/aboutus" component={Auth(AboutUs, null)} />

          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/product/upload"
            component={Auth(UploadProduct, true)}
          />
          <Route
            exact
            path="/product/:productId"
            component={Auth(ProductDetail, null)}
          />
          <Route exact path="/user/cart" component={Auth(Cart, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
