import React from 'react';
import { PropTypes } from 'prop-types';
import Navbar from './Navbar';
import NavIcon from './NavIcon';
import './Header.css';

const Header = (props) => {
  const path = '/';
  const { title } = props;
  return (
    <div className="top-header">
      <Navbar path={path} />
      <header>
        <h1 className="title">{title}</h1>
      </header>
      <NavIcon />
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
