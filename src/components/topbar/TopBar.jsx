import React from 'react'
import './topbar.css'

export default function TopBar() {
  return (
    <div className="topbar">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-facebook"></i>
        </div>
        <div className="topCenter">
            <ul className="list">
                <li className="listItem">HOME</li>
                <li className="listItem">ABOUT</li>
                <li className="listItem">CONTACT</li>
                <li className="listItem">WRITE</li>
                <li className="listItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://tinyurl.com/mr27fvaf" alt="Avatar" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
