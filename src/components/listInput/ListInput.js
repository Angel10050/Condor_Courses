import React from "react";
import "./listInput.css";

const ListInput = ({ children, id }) => (
  <>
    <select className="selectContainer" id={id}>
      {children}
    </select>
  </>
);
export default ListInput;
