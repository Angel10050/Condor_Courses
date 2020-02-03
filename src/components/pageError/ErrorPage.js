import React from "react";
import "./errorPage.css";

const ErrorPage = ({ errorMessage }) => {
  return (
    <div className="errorContainer">
      <h4 className="errorMessage">{errorMessage}</h4>
    </div>
  );
};

export default ErrorPage;
