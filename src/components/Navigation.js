import React from 'react';

// Taking variables from props object and assigning variables their own names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
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
  );
}

export default Navigation;