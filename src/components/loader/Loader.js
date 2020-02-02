import React from "react";
import "./loader.css";
const Loader = () => (
  <section className="loaderSection">
    <p className="loader-text">Waiting for CoCourses</p>
    <div className="lds-1">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
);
export default Loader;
