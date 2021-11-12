import React from 'react';
import '../style/app.scss';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import useImages from '../hooks/useImages.js';

const App = () => {
  const [images, search] = useImages('react js');

  return (
    <div className="unsplash-search-page" style={{ marginTop: '10px' }}>
      <div className='background'></div>
      <SearchBar onFormSubmit={search} />
      <ImageList images={images} />
    </div>
  );

}

export default App;