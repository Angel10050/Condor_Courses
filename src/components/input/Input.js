import React from "react";
import "./input.css";

const Input = ({ handlerOnchange, courseName }) => (
  <div className="input_container_all">
    <input
      placeholder="Search all courses"
      type="text"
      name="courseName"
      id="courseName"
      onChange={handlerOnchange}
      value={courseName}
    />
  </div>
);
export default Input;
