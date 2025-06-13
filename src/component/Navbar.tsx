'use client'; 
import { useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import React from 'react';
import './Navbar.css';
import Image from 'next/image';


const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    const searchBox = document.querySelector(".search-box .bx-search") as HTMLElement;
    const navLinks = document.querySelector(".nav-links") as HTMLElement;
    const menuOpenBtn = document.querySelector(".navbar .bx-menu") as HTMLElement;
    const menuCloseBtn = document.querySelector(".nav-links .bx-x") as HTMLElement;
    const htmlcssArrow = document.querySelector(".htmlcss-arrow") as HTMLElement;
    const moreArrow = document.querySelector(".more-arrow") as HTMLElement;
    const jsArrow = document.querySelector(".js-arrow") as HTMLElement;

    if (searchBox) {
      searchBox.addEventListener("click", () => {
        navbar.classList.toggle("showInput");
        if (navbar.classList.contains("showInput")) {
          searchBox.classList.replace("bx-search", "bx-x");
        } else {
          searchBox.classList.replace("bx-x", "bx-search");
        }
      });
    }

    if (menuOpenBtn && navLinks) {
      menuOpenBtn.onclick = () => {
        navLinks.style.left = "0";
      };
    }

    if (menuCloseBtn && navLinks) {
      menuCloseBtn.onclick = () => {
        navLinks.style.left = "-100%";
      };
    }

    if (htmlcssArrow) {
      htmlcssArrow.onclick = () => {
        navLinks.classList.toggle("show1");
      };
    }

    if (moreArrow) {
      moreArrow.onclick = () => {
        navLinks.classList.toggle("show2");
      };
    }

    if (jsArrow) {
      jsArrow.onclick = () => {
        navLinks.classList.toggle("show3");
      };
    }

    // Optional cleanup to remove listeners on unmount
    return () => {
      // Add removeEventListener here if needed
    };
  }, []);
  return (
    <>
      <nav>
    <div className="navbar">
      <i className='bx bx-menu'></i>
      <div className="logo"><a href="#"><img src="#" alt="" width={100} height={100} /></a></div>
      <div className="nav-links">
        <div className="sidebar-logo">
          <span className="logo-name">CodingLab</span>
          <i className='bx bx-x' ></i>
        </div>
        <ul className="links">
          <li><a href="#">HOME</a></li>
          <li>
            <a href="#">HTML & CSS</a>
            <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            
            <ul className="htmlCss-sub-menu sub-menu">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Login Forms</a></li>
              <li><a href="#">Card Design</a></li>
              <li className="more">
                <span><a href="#">More</a>
                <i className='bx bxs-chevron-right arrow more-arrow'></i>
              </span>
                <ul className="more-sub-menu sub-menu">
                  <li><a href="#">Neumorphism</a></li>
                  <li><a href="#">Pre-loader</a></li>
                  <li><a href="#">Glassmorphism</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">JAVASCRIPT</a>
            <i className='bx bxs-chevron-down js-arrow arrow'></i>
            <ul className="js-sub-menu sub-menu">
              <li><a href="#">Dynamic Clock</a></li>
              <li><a href="#">Form Validation</a></li>
              <li><a href="#">Card Slider</a></li>
              <li><a href="#">Complete Website</a></li>
            </ul>
          </li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </div>
      <div className="search-box">
        <i className='bx bx-search'></i>
        <div className="input-box">
          <input type="text" placeholder="Search..." />
        </div>
    </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar