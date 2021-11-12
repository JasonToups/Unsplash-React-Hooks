import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import useImages from '../hooks/useImages.js';

const App = () => {
  const [images, search] = useImages('react js');

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onFormSubmit={search} />
      <ImageList images={images} />
    </div>
  );

}

export default App;