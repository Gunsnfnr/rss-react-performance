import React, { memo, useState } from 'react';
import _ from './Search.module.css';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchComponent({ searchTerm, setSearchTerm }: SearchProps) {
  const [search, setSearch] = useState(searchTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(search.toLowerCase());
  };

  return (
    <form onSubmit={handleFormSubmit} className={_.search}>
      <input type="text" className={_.search__input} value={search} onChange={handleSearchChange} />
      <button className={_.search__button} type="submit">
        Search by name
      </button>
    </form>
  );
}

const Search = memo(SearchComponent);

export default Search;
