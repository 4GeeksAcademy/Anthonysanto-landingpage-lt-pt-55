import react from 'react';
const Navbar= () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <div className="d-flex ms-auto">
            <a className="navbar-brand" href="#">home</a>
            <a className="navbar-brand" href="#">About</a>
            <a className="navbar-brand" href="#">Service</a>
            <a className="navbar-brand" href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
