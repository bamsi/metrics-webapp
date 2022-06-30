import React from 'react';
import { useLocation } from 'react-router-dom';

const SpeciesDetail = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>Species details</div>;
};

export default SpeciesDetail;
