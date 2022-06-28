import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { path } = props;
  return (
    <nav>
      <NavLink to={path}>Back</NavLink>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  path: PropTypes.string.isRequired,
};
