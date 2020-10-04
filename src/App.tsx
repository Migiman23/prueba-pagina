import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./clases.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-multi-carousel/lib/styles.css";
import "semantic-ui-css/semantic.min.css";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand
} from "react-bootstrap";
import UserBar from "./components/userBar";
import SearchBar from "./components/searchBar";
import NavigateBar from "./components/navigateBar";
import ImgPrin from "./components/imgPrincipal";
import Gallery1 from "./components/galeria1";
import Gifts from "./components/gifts";
import Footer from "./components/footer";
import Ofertas from "./components/ofertas";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-12">
          <UserBar />
        </div>
        <div className="col-lg-12">
          <SearchBar />
        </div>
        <div className="col-lg-12">
          <NavigateBar />
        </div>
        <div className="col-lg-12 mb-4">
          <ImgPrin />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Gallery1 />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Gifts />
        </div>
      </div>
      <br/>
      <br/>
      <div className="row">
        <div className="col-lg-12">
          <Ofertas />
        </div>
      </div>
      <br />
      <br />
      <br />
      
      <div className="row">
        <div className="col-lg-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
