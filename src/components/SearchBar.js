import React, {useState} from 'react';
import reactLogo from "../style/icons/reactLogo.svg";

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onFormSubmit(term);
  }

  return (
    <div className='search-bar'>
      <div className='logo-container'>
				<img src={reactLogo} className='logo' alt="react logo"/>
				<h1>Unsplash</h1>
			</div>
      <form onSubmit={onSubmit} className='form'>
        <div className='field'>
          <input
            type='text'
            value={term}
            placeholder={'Search free high-resolution photos'}
            onChange={(event) => setTerm(event.target.value)
            
            }
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
