import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>待办事项</h1>
      <Link style={linkStyle} to='/'>
        主页
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to='/about'>
        关于
      </Link>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default Header;
