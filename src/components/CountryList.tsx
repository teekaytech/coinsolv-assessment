import React, { useState, useEffect } from 'react';
import { countries as allCountries } from 'countries-list';
import { CountryInterface } from '../interfaces';
import Country from './Country';

const CountryList = (): JSX.Element => {
  const [countries, setCountries] = useState<CountryInterface | {}>({
    null: {},
  });

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

  if (countries === null) {
    return <p>loading...</p>;
  }

  return <div>{countries && renderCountries()}</div>;
};

export default CountryList;
