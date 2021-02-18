import React from "react";
import { GitHub, LinkedIn, Instagram } from "../icons";

const Footer = () => {
  return (
    <>
      <a href="https://github.com/azhadsyed">
        <GitHub />
      </a>{" "}
      <a href="https://linkedin.com/in/azhadsyed">
        <LinkedIn />
      </a>{" "}
      <a href="https://www.instagram.com/azhadsyed">
        <Instagram />
      </a>
      <br />
      Copyright &copy; 2021 Azhad Syed
      <br />
      Made with React
      <br />
      <br />
    </>
  );
};

export default Footer;
