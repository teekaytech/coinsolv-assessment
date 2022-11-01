import React from 'react';
import { ICountry } from '../interfaces';

interface IProps {
  country: ICountry;
}

const Country: React.FC<IProps> = ({ country }) => {
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
