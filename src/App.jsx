import React from "react";
import "./App.css";
import styles from "./style";
import { Navbar, Heroa, Added, Footer, Cocktails, Premium } from "./Components";
import Friends from "./Components/Friends";
import Bartender from "./Components/Bartender";

const App = () => (
  <div className="">
    <Heroa />

    <Premium />

    <Cocktails />

    <Added />

    <Friends />

    <Bartender />

    <Footer />
  </div>
);

export default App;
