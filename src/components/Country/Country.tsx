import React, { useLayoutEffect, useState } from 'react';
import { CountryData } from '../../types';
import _ from './Country.module.css';
import { LOCALSTORAGE_KEYS } from '../../constants/localStorageKeys';

interface CountryProps {
  country: CountryData;
  visitedCountries: string[];
  setVisitedCountries: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Country({ country, visitedCountries, setVisitedCountries }: CountryProps) {
  const [isVisited, setIsvisited] = useState<boolean>(false);

  useLayoutEffect(() => {
    const storedData = localStorage.getItem(LOCALSTORAGE_KEYS.VisitedCountries);
    if (storedData) {
      setVisitedCountries(JSON.parse(storedData));
      if (visitedCountries.includes(country.name.common)) setIsvisited(true);
    }
  }, []);

  const handleClickCountry = () => {
    if (!visitedCountries.includes(country.name.common)) {
      setIsvisited(true);
      setVisitedCountries([...visitedCountries, country.name.common]);
      localStorage.setItem(
        LOCALSTORAGE_KEYS.VisitedCountries,
        JSON.stringify([...visitedCountries, country.name.common])
      );
    }
  };

  return (
    <React.Fragment>
      <div
        className={`${_.cell} ${_.countries__name} ${isVisited ? _.visited : ''}`}
        onClick={handleClickCountry}
        title={`${!isVisited ? 'Click to mark the country as visited' : ''}`}
      >
        {country.name.common}
      </div>
      <div
        className={`${_.cell} ${_.countries__flag} ${isVisited ? _.visited : ''}`}
        onClick={handleClickCountry}
        title={`${!isVisited ? 'Click to mark the country as visited' : ''}`}
      >
        <img src={country.flags.png} />
      </div>
      <div
        className={`${_.cell} ${_.countries__region} ${isVisited ? _.visited : ''}`}
        onClick={handleClickCountry}
        title={`${!isVisited ? 'Click to mark the country as visited' : ''}`}
      >
        {country.region}
      </div>
      <div
        className={`${_.cell} ${_.countries__population} ${isVisited ? _.visited : ''}`}
        onClick={handleClickCountry}
        title={`${!isVisited ? 'Click to mark the country as visited' : ''}`}
      >
        {country.population}
      </div>
    </React.Fragment>
  );
}
