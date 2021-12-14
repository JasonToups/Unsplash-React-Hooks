import React from 'react';
import '../style/app.scss';
import Contact from './Contact';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import useImages from '../hooks/useImages.js';

const App = () => {
  const [images, search] = useImages('react js');

  return (
    <div className="unsplash-search-page">
      <div className='background'></div>
      <SearchBar onFormSubmit={search} />
      <ImageList images={images} />
      <Contact />
    </div>
  );

}

export default App;