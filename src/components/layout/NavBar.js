import React, { Component } from "react";
import { Link } from "react-router-dom";

//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class NavBar extends Component {
  navSlide = () => {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav-links");
    let navLinks = document.getElementsByClassName("nav-link");
    console.log(navLinks);
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      Array.prototype.forEach.call(navLinks, function (link, index) {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
    });
  };
  componentDidMount = () => {
    this.navSlide();
  };
  render() {
    window.addEventListener("scroll", function () {
      var nav = document.getElementById("nav");
      nav.classList.toggle("sticky", window.scrollY > 0);
    });

    return (
      <div className="nav-container" id="nav">
        <Link to="/kane-uhcc">
          <div className="logo">
            <a href="index.html">
              <h1>The Kāne Initiative</h1>
            </a>
          </div>
        </Link>
        <ul className="nav-links" id="nav-links">
          <li className="nav-link">
            <Link to="/kane-uhcc/aipono">‘Ai Pono</Link>
          </li>
          <li className="nav-link">
            <Link to="/kane-uhcc/kaula">Kaula</Link>
          </li>
          <li className="nav-link">
            <Link to="/kane-uhcc/lokoia">Loko I‘a</Link>
          </li>
        </ul>
        <div class="burger" id="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
