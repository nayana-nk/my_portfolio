import React from 'react';
import my_pic from "../components/public/my_pic.jpg";

const Header = () => (
  <div className="header-section py-1 ps-3 text-white">
    <img
      src={my_pic}
      width="200px"
      height="200px"
      className="rounded-circle border border-white"
      alt="Profile"
    />
    <h1 className="mt-3">Nayana K</h1>
    <h3>Welcome to my portfolio</h3>
    <button
      className="btn btn-outline-light mt-2"
      onClick={() => window.open("https://www.linkedin.com/in/nayana-k-b861301b1/")}
    >
      COFFEE WITH ME?
    </button>
  </div>
);

export default Header;
