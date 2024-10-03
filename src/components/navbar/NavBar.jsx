import React from "react";
import "./navbar.css";
import Logo from '../../assets/logo.svg'; 
import { SlLocationPin } from "react-icons/sl";
import { LuUser2 } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";


const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#">
            <img src={Logo} alt="peleton logo"/>
        </a>
      </div>
      <div className="nav-links">
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
      <div className="nav-info">
        <SlLocationPin size={25}/> <LuUser2  size={25}/> <RiShoppingCartLine size={25}/>
      </div>
    </nav>
  );
};

export default NavBar;
