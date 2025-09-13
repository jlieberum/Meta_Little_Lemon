import React from 'react';
import './CSS/Footer.css';
import Logo from '../assets/logo-white.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="logo-footer"></img>
        <div className="footer-site-map">
          <p className="footer-title"> SITEMAP</p>
          <Link className="footer-item" to="/">
            Home
          </Link>
          <Link className="footer-item" to="/about">
            About
          </Link>
          <Link className="footer-item" to="/menu">
            Menu
          </Link>
          <Link className="footer-item" to="/reservations">
            Reservations
          </Link>
          <Link className="footer-item" to="/order-online">
            Order Online
          </Link>
          <Link className="footer-item" to="/login">
            Login
          </Link>
        </div>
        <div className="footer-contact">
          <p className="footer-title"> CONTACT</p>
          <p className="footer-item"> 1234 Lemon Lane, Chicago IL 60601 </p>
          <p className="footer-item"> (312)123-4567</p>
          <p className="footer-item"> contact@littlelemon.com</p>
        </div>
        <div className="footer-social">
          <p className="footer-title"> SOCIAL MEDIA LINKS</p>
          <a className="footer-item" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a className="footer-item" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="footer-item" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
