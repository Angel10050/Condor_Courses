import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/card/Cards";

const Main = ({ state }) => {
  return (
    <>
      <NavBar />
      <Cards data={state.info} />
    </>
  );
};

export default Main;
