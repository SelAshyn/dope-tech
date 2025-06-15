import "bootstrap-icons/font/bootstrap-icons.css";
import './top.css';
import React from 'react';

const Top = () => {
  return (
    <div className="top">
      <div className="info">
        <div className="infon">
          <i className="bi bi-headset"></i> +977 984-1234567
        </div>
        <br /> <br />
       <div className="infoi">
         <i className="bi bi-envelope"></i> example@example.com
       </div>
      </div>
      <br />
      <div className="login">
        <div className="loginn">
          <a href="#"><i className="bi bi-person"></i> Login</a>
        </div>
        <br /><br />
        <div className="sign">
            <a href="#"><i className="bi bi-person-plus"></i> Register</a>
        </div>
      </div>
    </div>
  );
}

export default Top;