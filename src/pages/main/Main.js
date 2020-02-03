import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/card/Cards";
import Input from "../../components/input/Input";

const Main = ({
  handlerOnchange,
  state: {
    loading,
    courseName,
    filterInfo: { filtredCourses, thereIsNextPage },
    info: { items }
  }
}) => {
  return (
    <>
      <NavBar />
      <Input handlerOnchange={handlerOnchange} courseName={courseName} />
      {!filtredCourses || thereIsNextPage ? (
        <Cards data={items} loading={loading} />
      ) : (
        <Cards data={filtredCourses} />
      )}
    </>
  );
};

export default Main;
