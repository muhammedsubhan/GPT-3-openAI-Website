import React, { useState } from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

function App() {
  const [data, setData] = useState(false);

  const datastate = () => {
    setData(true);
  };

  return (
    <>
      <div className={`App ${data ? "active" : null}`}>
        <div className="gradient__bg">
          <Navbar set={datastate} />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
