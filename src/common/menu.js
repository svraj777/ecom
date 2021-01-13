import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function menu() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Navbar
          </Link>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                {/* <a className='' href='#'>
                  Home <span className='sr-only'>(current)</span>
                </a> */}
                <Link className='nav-link' to='/'>
                  <span className='sr-only'> Home</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signin'>
                  SignIn
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
