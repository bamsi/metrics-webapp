import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../redux/fish/speciesDetail';
import './species-detail.css';

const SpeciesDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const species = location.state.species
    .trim()
    .split(' ')
    .join('-')
    .toLowerCase();
  const speciesDetail = useSelector((state) => state.speciesDetails);
  useEffect(() => {
    dispatch(getDetails(species));
  }, []);

  if (!speciesDetail.length) {
    return <div className="loading"> Loading....</div>;
  }

  return (
    <section className="detail-section">
      {speciesDetail.map((item) => (
        <div key={item.id}>
          <header className="detail-header">
            <img src={item.image} alt={item.alt} />
            <div className="detail-desc">
              <span className="title">{item.species}</span>
              <span className="sub-title">
                Cholesterol &nbsp;
                {item.Cholesterol}
              </span>
            </div>
          </header>
          <ul className="list-detail">
            <li className="detail-item">
              <span>Scientific Name</span>
              <div>
                <span>{item.properties.scientificName}</span>
                <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
              </div>
            </li>
            <li className="detail-item">
              <span>Cholesterol</span>
              <div>
                <span>{item.properties.Cholesterol}</span>
                <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
              </div>
            </li>
            <li className="detail-item">
              <span>Carbohydrate</span>
              <div>
                <span>{item.properties.Carbohydrate}</span>
                <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
              </div>
            </li>
            <li className="detail-item">
              <span>Calories</span>
              <div>
                <span>{item.properties.Calories}</span>
                <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
              </div>
            </li>
            <li className="detail-item">
              <span>Protein</span>
              <div>
                <span>{item.properties.Protein}</span>
                <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
              </div>
            </li>
            <li className="detail-item">
              <span>Selenium</span>
              <div>
                <span>{item.properties.Selenium}</span>
                <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
              </div>
            </li>
            <li className="detail-item">
              <span>Sodium</span>
              <div>
                <span>{item.properties.Sodium}</span>
                <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
              </div>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default SpeciesDetail;
