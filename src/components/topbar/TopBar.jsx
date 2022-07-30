import React from 'react'
import './topbar.css'
import {BrowserRouter, Link} from "react-router-dom";

export default function TopBar() {
    const user = false;
  return (
          <div className="topbar">
              <BrowserRouter>
                  <div className="topLeft">
                      <i className="topIcon fa-brands fa-square-instagram"/>
                      <i className="topIcon fa-brands fa-square-pinterest"/>
                      <i className="topIcon fa-brands fa-square-twitter"/>
                      <i className="topIcon fa-brands fa-square-facebook"/>
                  </div>
                  <div className="topCenter">
                      <ul className="list">
                          <li className="listItem">
                              <Link className="link" to="/">HOME</Link>
                          </li>
                          <li className="listItem">
                              <Link className="link" to='/'>ABOUT</Link>
                          </li>
                          <li className="listItem">
                              <Link className="link" to='/'>CONTACT</Link>
                          </li>
                          <li className="listItem">
                              {user ? <Link className="link" to="/write">WRITE</Link> : "WRITE"}
                          </li>
                          <li className="listItem">
                              {user && <Link className="link" to="/auth">LOGOUT</Link>}
                          </li>
                      </ul>
                  </div>
                  <div className="topRight">
                      {user && <img className="topImg" src="https://tinyurl.com/mr27fvaf" alt="Avatar"/>}
                      {!user &&
                          <ul className="list">
                          <li className="listItem">
                              <Link className="link" to='/auth'>LOGIN</Link>
                          </li>
                      </ul>}
                      <i className="topSearchIcon fa-solid fa-magnifying-glass"/>
                  </div>
              </BrowserRouter>



          </div>

  );
}
