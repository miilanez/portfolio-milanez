import React from "react";
import { Link } from "react-router-dom";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import "./Navbar.css";

const Navbar = () => {
  // Estilo do Menu Hamburguer

  let menuBtn = document.querySelectorAll(".menu-btn");
  for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (event) => {
      console.log(event.target);
      event.target.classList.toggle("active");
    });
  }

  // Responsividade da NavBar

  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }

  const mobileNavbar = new MobileNavbar(
    ".menu-btn",
    ".nav-links",
    ".nav-links li"
  );
  mobileNavbar.init();

  return (
    <div>
      <nav className="">
        <div className="logo">Gabriel Milanez</div>

        <ul className="nav-links">
          <li>
            <Link to="home" className="item-menu">
              Página Principal
            </Link>
          </li>
          <li>
            <Link to="sobre" className="item-menu">
              Sobre Nós
            </Link>
          </li>
        </ul>

        <div className="menu-btn">
          <div className="icon">
            <i className="bx bx-menu open">
              <VscMenu />
            </i>
            <i className="bx bx-x close">
              <VscChromeClose />
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
