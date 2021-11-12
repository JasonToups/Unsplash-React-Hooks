import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
  state = {
    images: []
  };
  // TODO create a default search term to render images on page load. useEffect would help here.
  onSearchSubmit = async (term) => {
    const response = await unsplash
      .get('/search/photos', {
        params: { query: term }
      })
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;