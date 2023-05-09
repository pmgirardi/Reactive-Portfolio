import React from 'react';
import logo from '../components/logo-transparent-png.png';

 
// Taking variables from props object and assigning variables their own names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/*remove 'Navbar' and put in brand logo */}
    <a className="navbar-brand" href="logo"><img src={logo} alt="logo..."/></a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          // Check to see if the current page is `AboutMe`. If it is, the current page is set to 'nav-link-active', otherwise set it to 'nav-link'
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the current page is `Portfolio`. If it is, the current page is set to 'nav-link-active', otherwise set it to 'nav-link' 
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        // Check to see if the current page is `Resume`. If it is, the current page is set to 'nav-link-active', otherwise set it to 'nav-link' 
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contactme"
          onClick={() => handlePageChange('ContactMe')}
        // Check to see if the current page is `Contact Me`. If it is, the current page is set to 'nav-link-active', otherwise set it to 'nav-link' 
          className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default Navigation;