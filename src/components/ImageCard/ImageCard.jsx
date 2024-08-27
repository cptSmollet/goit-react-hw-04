import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  return (
    <li className={styles.card} onClick={() => onClick(image.urls.regular, image.alt_description)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </li>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired, 
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired, 
};

export default ImageCard;