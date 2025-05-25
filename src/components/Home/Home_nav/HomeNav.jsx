import "./HomeNav.css";
import React, { useState, useEffect } from 'react';
import { GiChickenOven } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home_Nav({ Cart = [] }) {
  const [Navcolor, setNavcolor] = useState(false);

  useEffect(() => {
    const changecolor = () => {
      setNavcolor(window.scrollY >= 60);
    };

    window.addEventListener("scroll", changecolor);
    return () => window.removeEventListener("scroll", changecolor);
  }, []);

  return (
    <nav className={Navcolor ? "home-nav nav-bg" : "home-nav"}>
      <Link to="/"><h1 className="home-nav-header"><GiChickenOven /> Food Spot</h1></Link>
      <div className="home-nav-link-box">
        <Link to="/my_order">My Orders</Link>
        <Link to="/add-to-cart"><FaShoppingCart /></Link>
        {Cart?.length >= 1 && <p className="add-to-cart"></p>}
      </div>
    </nav>
  );
}
