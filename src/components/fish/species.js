import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/fish/species';

const Species = () => {
  const dispatch = useDispatch();
  const species = useSelector((state) => state.species);
  useEffect(() => {
    if (!species.length) {
      dispatch(getData());
    }
  }, []);

  return (
    <section className="list-container">
      {species.map((item) => (
        <div key={item.id}>{item.species}</div>
      ))}
    </section>
  );
};

export default Species;
