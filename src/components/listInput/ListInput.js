import React from "react";
import "./listInput.css";

const ListInput = ({ children }) => (
  <>
    <select className="selectContainer">{children}</select>
  </>
);
export default ListInput;
