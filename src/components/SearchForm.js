import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <section className="section search">
      <form action="" className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
