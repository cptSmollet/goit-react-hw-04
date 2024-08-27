import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const API_KEY = '3PIRjONUDiAJq5bwFwklGrJZ3QjXHxwdq--MHhXmans';
  const BASE_URL = `https://api.unsplash.com/search/photos?client_id=${API_KEY}`;

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`${BASE_URL}&query=${query}&page=${page}&per_page=12`);
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError('Failed to fetch images.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const toggleModal = (largeImageURL = '', alt = '') => {
    setLargeImageURL(largeImageURL);
    setModalAlt(alt);
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={toggleModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {showModal && <ImageModal largeImageURL={largeImageURL} alt={modalAlt} onClose={toggleModal} />}
    </div>
  );
}

export default App;