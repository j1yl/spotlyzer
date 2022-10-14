import React from "react";
import "../css/Header.scss";

const Header = () => {
  return (
    <div className="box-1">
      <h1 className="logo">
        Spot<span>lyzer</span>
      </h1>
      <div className="navlinks">
        <a href="/">Home</a>
        <a href="/">About</a>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
