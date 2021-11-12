import React, {useState, useEffect} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
		onSearchSubmit('react js');
	}, []);

  const onSearchSubmit = async (term) => {
    const response = await unsplash
      .get('/search/photos', {
        params: { query: term }
      })
      console.log(images)
      setImages(response.data.results);
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );

}

export default App;