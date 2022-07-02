import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getData, searchSpecies } from '../../redux/fish/species';

import './species.css';

const Species = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const species = useSelector((state) => state.species);
  useEffect(() => {
    if (!species.length) {
      dispatch(getData());
    }
  }, []);

  const displayDetails = (item) => {
    navigate('/species', { state: item });
  };

  const filterSpecies = (event) => {
    event.preventDefault();
    if (keyword !== '') dispatch(searchSpecies(keyword));
    else dispatch(getData());
  };

  const header = (
    <header className="header">
      <h2 className="list-title">Fish Species</h2>
      <form onSubmit={filterSpecies}>
        <input
          type="text"
          placeholder="Search by species"
          className="search-box"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </header>
  );
  if (!species.length) {
    return (
      <div className="content-section">
        {header}
        <div className="not-found"> No data found!</div>
      </div>
    );
  }

  return (
    <section className="content-section">
      {header}
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
