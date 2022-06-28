import React from 'react';
import { PropTypes } from 'prop-types';
import Navbar from './Navbar';
import NavIcon from './NavIcon';

const Header = (props) => {
  const path = '/';
  const { title } = props;
  return (
    <div>
      <Navbar path={path} />
      <header>
        <h1>{title}</h1>
      </header>
      <NavIcon />
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
