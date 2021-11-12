import axios from 'axios';

// TODO remove the client id and place it in an .env file
// TODO rewrite the git history to remove the client ID
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID {REACT_APP_KEY}'
  }
})