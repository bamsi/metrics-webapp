import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getData } from '../../redux/fish/species';

import './species.css';

const Species = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const species = useSelector((state) => state.species);
  useEffect(() => {
    if (!species.length) {
      dispatch(getData());
    }
  }, []);

  const displayDetails = (item) => {
    navigate('/species', { state: item });
  };

  return (
    <section className="content-section">
      <header>
        <h2 className="list-title">Fish Species</h2>
      </header>
      <div className="list-container">
        {species.map((item) => (
          <div
            key={item.id}
            className="list-item"
            role="button"
            tabIndex="0"
            onClick={() => displayDetails(item)}
            onKeyDown={() => displayDetails(item)}
          >
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="title arrow"
            />
            <div className="background">
              <img src={item.image.src} alt={item.image.alt} />
            </div>
            <div className="description">
              <span className="title">{item.species}</span>
              <span className="sub-title">
                Cholesterol &nbsp;
                {item.Cholesterol}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Species;
