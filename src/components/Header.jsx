import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../routes';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="header-container">
      <Link to="/" className="home-button">
        <picture>
          <source srcSet="/ladbh-logo.png" media="(max-width: 768px)" />
          <img src="/ladbh.png" alt="LADBH" style={{ height: '40px' }} />
        </picture>
      </Link>
      <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
        <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
          Pages
        </button>
        <div className="dropdown-menu">
          <div className="dropdown-top-line"></div>
          {routes.map((route, index) => (
            <React.Fragment key={index}>
              <Link to={route.path} onClick={() => setIsOpen(false)}>
                {route.name}
              </Link>
              {index < routes.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
