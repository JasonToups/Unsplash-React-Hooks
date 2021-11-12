import React, {useState} from 'react';
// import reactLogo from "../style/icons/reactLogo.svg";

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onFormSubmit(term);
  }

  return (
    <div className='ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label>Image Search</label>
          <input
            type='text'
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
