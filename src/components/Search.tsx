import React from 'react';

interface Props {
  handleSearch(value: string | null): void;
}

const Search: React.FC<Props> = ({ handleSearch }): JSX.Element => {
  return (
    <section className='d-inline-block d-flex justify-content-end'>
      <input
        placeholder='Search for a country'
        onChange={(e) => handleSearch(e.target.value)}
      />
    </section>
  );
};

export default Search;
