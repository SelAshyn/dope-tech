'use client'; 
import 'boxicons/css/boxicons.min.css';
import React from 'react';
import './Navbar.css';
import { Arima } from 'next/font/google';

const poppins = Arima({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],});

const Navbar = () => {
  
  return (
    <>
      <center>
        <nav>
    <div style={{ fontFamily: poppins.className }} className="navbar">
      <div className="logo"><a href="#"><img src="https://raw.githubusercontent.com/SelAshyn/dope-tech/refs/heads/main/src/component/Navbar/delete.png" alt="" width={80} height={80} /> Dope Tech </a></div>
      <div className="inp">
        <input type="text" placeholder='Type here' name="" id="" /><button><i className='bx bx-search'></i></button>
      </div>
      <div className="cart">
        <a href="#"><i className='bx bx-cart'></i></a>
        <span className="cart-count">0</span>
        <a href="#"><i className='bx bx-heart'></i></a>
        <span className="wishlist-count">0</span>
      </div>
    </div>
  </nav>
      </center>
  </>
  )
}

export default Navbar