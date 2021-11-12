import React, {useState, useEffect} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  // TODO refactor this with a custom hook
  // useEffect(() => {
	// 	onTermSubmit('react js');
	// }, []);

  const onTermSubmit = async (term) => {
    const response = await unsplash
      .get('/search/photos', {
        params: { query: term }
      })
      setImages(response.data.results);
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onFormSubmit={onTermSubmit} />
      <ImageList images={images} />
    </div>
  );

}

export default App;