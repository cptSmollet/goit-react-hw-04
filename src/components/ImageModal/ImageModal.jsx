import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';

function ImageModal({ largeImageURL, alt, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt={alt} />
        <button type="button" className={styles.closeBtn} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

ImageModal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;