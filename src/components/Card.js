import React from 'react';
import PropTypes from 'prop-types';
import { mapping } from '../config/cryptoNameMapping';

const Card = function({ name, price, volume, change }) {
  const fluctuationColor =
    parseFloat(change) < 0
      ? 'card__section--negative'
      : 'card__section--positive';

  const fullName = mapping[name];

  return (
    <div className="card">
      <h2>{fullName}</h2>
      <h3>{price}</h3>
      <div className="card__section">
        <h4>Volume:</h4>
        <span>{volume}</span>
      </div>
      <div className="card__section">
        <h4>Change:</h4>
        <span className={fluctuationColor}>{change}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired
};

export default Card;
