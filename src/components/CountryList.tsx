import React, { useState, useEffect } from 'react';
import { countries as allCountries } from 'countries-list';
import { ICountry } from '../interfaces';
import Country from './Country';
import Search from './Search';

const CountryList = (): JSX.Element => {
  const [countries, setCountries] = useState<ICountry | {}>({});

  useEffect(() => {
    setCountries(allCountries);
  }, []);

  const renderCountries = (): JSX.Element => (
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th scope='col'>Country Name</th>
          <th scope='col'>Capital</th>
          <th scope='col'>Flag</th>
          <th scope='col'>Wiki Page</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(countries).map(([key, country]) => (
          <tr key={key}>
            <Country country={country} />
          </tr>
        ))}
      </tbody>
    </table>
  );

  const handleSearch = (value: string): void => {
    const filteredCountries: any = {};
    Object.entries({ ...allCountries }).forEach(([key, country]) => {
      if (country.name.toLowerCase().includes(value.toLowerCase())) {
        filteredCountries[key] = country;
      }
    });
    setCountries(filteredCountries);
  };

  if (countries === null) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      {countries && renderCountries()}
    </div>
  );
};

export default CountryList;
