import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom"

export function NavBar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <Link class="navbar-brand" to="/SignUp">SignUp</Link>
        <Link class="navbar-brand" to="/LogIn">LogIn</Link> */}
        <ul class="navbar-nav">
      <li class="nav-item active">
      <Link class="navbar-brand" to="/SignUp">SignUp</Link>

      </li>
      <li class="nav-item">
      <Link class="navbar-brand" to="/LogIn">LogIn</Link>
      </li>
      </ul>
    </nav>
  );
}
