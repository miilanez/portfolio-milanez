import React from "react";
import { Link } from "react-router-dom";
import RedesSociais from "../RedesSociais";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="about">
          <h1>Gabriel Milanez</h1>
          <h3>Front-End Developer</h3>
          <Link to="sobre" className="item-menu">
            Sobre Mim
          </Link>
        </div>
        <div className="info">
          <h2 className="title"> Menu </h2>
          <Link to="sobre" className="item-menu">
            Projetos
          </Link>
          <Link to="sobre" className="item-menu">
            Contato
          </Link>
        </div>
        <div className="follow">
          <RedesSociais />
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright &copy; 2022 by Gabriel Milanez. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
