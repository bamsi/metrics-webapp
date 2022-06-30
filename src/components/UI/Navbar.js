import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = (props) => {
  const { path } = props;
  return (
    <nav className="nav-bar">
      <NavLink to={path}>
        <FontAwesomeIcon icon={faAngleLeft} className="font" />
        <span className="desktop">Back</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  path: PropTypes.string.isRequired,
};
