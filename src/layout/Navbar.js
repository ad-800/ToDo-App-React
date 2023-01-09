import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-success py-3">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="/"><strong>Pear Timer</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Insights</a>
              </li>
            </ul>
          </div>
          <Link className="btn btn-outline-light" to="/add">Add Task</Link>
        </div>
      </nav>
    </div>
  )
}
