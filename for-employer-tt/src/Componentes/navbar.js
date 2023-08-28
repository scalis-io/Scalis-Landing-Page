import '../css/navbar.css';
import React, { useState } from 'react';
import Menu from '../assets/navbar/menu-icon.svg'
import Logo from '../assets/navbar/logo.png'
import Searchicon from '../assets/navbar/searchicon.svg'

function Navbar( { setMenuIsVisible }) {
  return (
    <div class="navbar">
      <div class="nav-left--">
      <img class="logo" src={Logo}/>
      <div class="button-search">
        <img class="search-icon" src={Searchicon}/>
        Search
      </div>
      </div>
      <div class="nav-right--">
      <div class="options">
        <p class="negative-button">Home</p>
        <p class="negative-button">Jobs</p>
        <p class="acept-button">For Employers</p>
        <p class="negative-button">For Job Seekers</p>
        <p class="negative-button">Contact Us</p>
      </div>
      <div class="buttons">
        <div class="bt-login">Log In</div>
        <div class="bt-Singn">Sign Up</div>
      </div>
      <div class="menu--" onClick={() => setMenuIsVisible (true)} >
      <img class="menu-on" src={Menu} />
      </div>
      </div>
    </div>
  ); 
}

export default Navbar;
