import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/card/Cards";
import Input from "../../components/input/Input";

const Main = ({ state, isLoading }) => {
  return (
    <>
      <NavBar />
      <Input />
      <Cards info={state.info.items} isLoading={isLoading} />
    </>
  );
};

export default Main;
