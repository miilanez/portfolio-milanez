import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const RedesSociais = () => {
  return (
    <div className="redes-sociais">
      <h2>Redes Sociais</h2>
      <ul className="flex flex-row justify-evenly">
        <li>
          <Link to="sobre" className="">
            <BsTwitter />
          </Link>
        </li>
        <li>
          <Link to="sobre" className="item-menu">
            <BsInstagram />
          </Link>
        </li>
        <li>
          <Link to="sobre" className="item-menu">
            <BsGithub />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RedesSociais;
