import React from "react";
import "./navbar.css";
import ListInput from "../listInput/ListInput";

const NavBar = () => (
  <section className="navBar">
    <div className="navBar__container">
      Show me courses form
      <ListInput>
        <option>All professions</option>
      </ListInput>
      in
      <ListInput>
        <option>All states</option>
      </ListInput>
      classified as
      <ListInput id="plusSelec">
        <option>All states</option>
      </ListInput>
      sorted by
      <ListInput>
        <option>Popularity</option>
      </ListInput>
    </div>
    <span className="InSectionCointainer">
      <p className="sectionDescription">COURSES</p>
      <p className="sectionDescription">EDUCATORS</p>
    </span>
  </section>
);
export default NavBar;
