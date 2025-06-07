import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5 py-4 d-flex justify-content-center border-top">
      <p className="mb-2">© {new Date().getFullYear()} Nayana. All rights reserved.</p>
      <div className="d-flex justify-content-center gap-3">
        <a
          href="https://github.com/nayana-nk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark ps-2"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/nayana-k-b861301b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
