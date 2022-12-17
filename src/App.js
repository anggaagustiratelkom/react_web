import React, { Component } from "react";
import "./App.css";
import Hellocomp from "./components/HelloComponent";
import Product from "./components/Product";
import NavBar from "./components/NavigationBar";

const App = () => {
  console.log("dangga");
  return (
    <>
      <NavBar />
      <Product />
      <Hellocomp />
      <p>Dangga Agustira</p>;
    </>
  );
};

export default App;
