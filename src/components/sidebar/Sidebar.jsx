import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://i.pinimg.com/736x/ed/22/ed/ed22edcd454a2e3ec55713cd0d1e4ca2.jpg" alt="about me pic" />
        <p>Lorem ipsum dolor sit amet consectetur, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarCats">
          <li className="catItem">Life</li>
          <li className="catItem">Style</li>
          <li className="catItem">Tech</li>
          <li className="catItem">Music</li>
          <li className="catItem">Sport</li>
          <li className="catItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        </div>
      </div>
    </div>
  )
}
