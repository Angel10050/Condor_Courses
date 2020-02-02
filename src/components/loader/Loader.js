import React from "react";
import "./loader.css";
const Loader = ({ className }) => (
  <section className={className}>
    <p className="loader-text">Waiting for CoCourses</p>
    <div className="lds-1">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
);
export default Loader;
