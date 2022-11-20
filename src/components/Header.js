import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img width = "140" height = "33" src="https://static.grammarly.com/assets/files/cb6ce17d281d15f2c819035bcd430b0e/ukraine_grammarly_logo.svg" alt="Grammarly Premium" />
      </div>
      <a href="#" className="login">
        Log in
      </a>
    </div>
  );
};

export default Header;
