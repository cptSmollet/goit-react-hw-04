import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

ReactModal.setAppElement('#root'); // Это необходимо для того, чтобы избежать проблем с доступностью

const ImageModal = ({ largeImageURL, tags, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <img src={largeImageURL} alt={tags} className={css.Image} />
      <button onClick={onClose} className={css.CloseButton}>Close</button>
    </ReactModal>
  );
};

ImageModal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;