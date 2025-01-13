import React from "react";
import UserStore from "../UserStore";
import Home from "../components/Home";
import About from "../components/About";

const HomePage = () => {
  
  const store = new UserStore();
  return (
    <>
      <Home store={store} />
      <About store={store} />
    </>
  );
};

export default HomePage;
