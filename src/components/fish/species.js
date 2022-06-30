import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/fish/species';
import './Species.css';

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
        <div key={item.id} className="list-item">
          <span className="background">
            <img src={item.image.src} alt={item.image.alt} />
          </span>
          <div className="description">
            <span>{item.species}</span>
            <span>{item.Cholesterol}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Species;
