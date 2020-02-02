import React from "react";
import "./input.css";

const Input = ({ onChange, value }) => (
  <div className="input_container_all">
    <input
      placeholder="Search all courses"
      type="text"
      name="courses"
      id="courses"
      onChange={onChange}
      value={value}
    />
  </div>
);
export default Input;
