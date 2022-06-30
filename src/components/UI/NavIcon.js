import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const NavIcon = () => (
  <div>
    <FontAwesomeIcon icon={faGear} className="font" />
    <span className="desktop">Settings</span>
  </div>
);

export default NavIcon;
