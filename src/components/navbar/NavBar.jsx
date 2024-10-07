import React, { useEffect, useInsertionEffect, useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg";
import { SlLocationPin } from "react-icons/sl";
import { LuUser2 } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSection } from "../../context/sectioncontext";

const NavBar = () => {
  const [navColor, setNavColor] = useState("transparent");
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          setNavColor("rgba(0,0,0,.5)");
        } else {
          setNavColor("transparent");
        }
      });
    } else {
      setNavColor("black");
    }
  }, []);
  return (
    // <nav style={{backgroundColor:'black', color:'white'}}>
    <nav style={{ backgroundColor: navColor }}>
      <div className="nav-logo">
        <a href="/">
          <img src={Logo} alt="peleton logo" />
        </a>
      </div>
      <div className="nav-links mobile-hide">
        <select>
          <option value="Home">Classes</option>
        </select>
        <select>
          <option value="Home">Bikes</option>
        </select>
        <select>
          <option value="Home">Treads</option>
        </select>
        <select>
          <option value="Home">Row</option>
        </select>
        <select>
          <option value="Home">App</option>
        </select>
        <select>
          <option value="Home">Accessories</option>
        </select>
        <a href="#"> Apparel</a>
      </div>
      <div className="nav-info mobile-hide">
        <SlLocationPin
          size={25}
          onClick={() => {
            window.location.href = "/showrooms";
          }}
        />{" "}
        <LuUser2 size={25} /> <RiShoppingCartLine size={25} />
      </div>
    </nav>
  );
};

export default NavBar;
