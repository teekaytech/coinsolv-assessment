import React, { useState, useEffect } from 'react';
import { countries as allCountries } from 'countries-list';
import { CountryInterface } from '../interfaces';

const CountryList = () => {
  const [countries, setCountries] = useState<CountryInterface | {}>({
    null: {},
  });

  useEffect(() => {
    setCountries(allCountries);
  }, []);

  if (countries === null) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {countries && (
        <div className='row'>
          {countries &&
            Object.entries(countries).map(([key, country]) => (
              <div className='col-12 col-md-6 col-lg-4' key={key}>
                <div className='card mb-3'>
                  <div className='card-body'>
                    <h5 className='card-title'>{country.name}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      {country.capital}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CountryList;
