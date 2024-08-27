import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <div>
      {images.length === 0 ? (
        <p className={styles.noImages}>No images found</p>
      ) : (
        <ul className={styles.gallery}>
          {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={onImageClick} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired, 
};

export default ImageGallery;