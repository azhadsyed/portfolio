import React from "react";
import { GitHub, Linkedin, Instagram } from "../icons";
const Footer = () => {
  return (
    <>
      <GitHub /> <Linkedin /> <Instagram />
      <br />
      Copyright &copy; 2021 Azhad Syed
      <br />
      Made with React
      <br />
      <a href="foo">report a bug</a>
    </>
  );
};

export default Footer;
