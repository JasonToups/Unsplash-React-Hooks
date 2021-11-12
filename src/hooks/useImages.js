import {useState, useEffect} from 'react';
import unsplash from '../apis/unsplash';

const useImages = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);
  // TODO update the params here to get the images
  const search = async term => {
		const response = await unsplash.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5,
				type: 'video',
				key: process.env.REACT_APP_KEY,
			},
		});

		setImages(response.data.items);
	};

  return [videos, search];
};

export default useImages;
