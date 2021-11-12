import {useState, useEffect} from 'react';
import unsplash from '../apis/unsplash';

// TODO integrate this hook last, after functional refactor of components
const useImages = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);
  // TODO update the params here to get the images
  const search = async term => {
		const response = await unsplash
      .get('/search/photos', {
        params: { query: term }
      })
		setImages(response.data.results);
	};

  return [videos, search];
};

export default useImages;
