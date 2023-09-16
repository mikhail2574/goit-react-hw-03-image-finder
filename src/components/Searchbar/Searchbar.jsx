import { useState } from 'react';
import axios from 'axios';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';

const API_KEY = '38966446-c32fc19d0a971996be7b08c24';
const BASE_URL = `https://pixabay.com/api/`;
const params = new URLSearchParams({
  page: 1,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
  key: API_KEY,
});

const SearchBar = () => {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState('');
  const [src, setSrc] = useState(false);
  const handleSubmit = async evt => {
    evt.preventDefault();
    params.set('q', evt.target.elements[1].value.trim());
    if (!params.get('q')) {
      // Notiflix.Notify.failure("Don't do it!");
      return;
    } else {
      // params.set('page', 1);
      setItems(
        await axios.get(`${BASE_URL}?${params}`).then(resp => resp.data)
      );
      console.log(items);
    }
  };

  return (
    <>
      <header className="searchbar">
        <form className="searchForm" onSubmit={handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="SearchFormButtonLabel">Search</span>
          </button>
          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      <ImageGallery items={items.hits} setSrc={setSrc} setModal={setModal} />
      <Modal src={src} modal={modal} setModal={setModal} />
    </>
  );
};

export default SearchBar;
