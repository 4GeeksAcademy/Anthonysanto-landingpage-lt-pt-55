import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Service</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
