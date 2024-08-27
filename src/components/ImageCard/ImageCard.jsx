import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  const { webformatURL, tags, largeImageURL } = image;

  return (
    <li className={css.ImageCard}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.Image}
        onClick={() => onImageClick(largeImageURL)}
      />
    </li>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageCard;