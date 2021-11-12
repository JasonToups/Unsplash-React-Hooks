import {useState, useEffect} from 'react';
import unsplash from '../api/unsplash';

const useImages = (defaultSearchTerm) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);
  
  const search = async term => {
		const response = await unsplash
      .get('/search/photos', {
        params: { query: term }
      })
		setImages(response.data.results);
	};

  return [images, search];
};

export default useImages;
