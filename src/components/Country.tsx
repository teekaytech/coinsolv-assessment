import React from 'react';
import { CountryInterface } from '../interfaces';

interface Props {
  country: CountryInterface;
  index: number;
}

const Country: React.FC<CountryInterface> = ({ country, index }) => {
  const setWikiLink = (name: string): string => {
    const replaceSpace = name?.replace(/ /g, '_');
    return `https://en.wikipedia.org/wiki/${replaceSpace}`;
  };

  return (
    <>
      <td scope='row'>{country.name}</td>
      <td>{country.capital}</td>
      <td>{country.emoji}</td>
      <td>
        <a
          href={setWikiLink(country.name)}
          target='_blank'
          rel='noopener noreferrer'
        >
          {setWikiLink(country.name)}
        </a>
      </td>
    </>
  );
};

export default Country;
