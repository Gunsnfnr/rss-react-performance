import React, { memo } from 'react';
import { CountryData } from '../../types';
import _ from './Country.module.css';

interface CountryProps {
  country: CountryData;
  isCountryVisited: boolean;
  setCountryAsVisited: () => void;
}

function CountryComponent({ country, isCountryVisited, setCountryAsVisited }: CountryProps) {
  const handleClickCountry = () => {
    setCountryAsVisited();
  };
  return (
    <React.Fragment>
      <div
        className={`${_.cell} ${_.countries__name} ${isCountryVisited ? _.visited : ''}`}
        onClick={handleClickCountry}
        title={`${!isCountryVisited ? 'Click to mark the country as visited' : ''}`}
      >
        {country.name.common}
      </div>
      <div
        className={`${_.cell} ${_.countries__flag} ${isCountryVisited ? _.visited : ''}`}
        onClick={handleClickCountry}
        title={`${!isCountryVisited ? 'Click to mark the country as visited' : ''}`}
      >
        <img src={country.flags.png} />
      </div>
      <div
        className={`${_.cell} ${_.countries__region} ${isCountryVisited ? _.visited : ''}`}
        onClick={handleClickCountry}
        title={`${!isCountryVisited ? 'Click to mark the country as visited' : ''}`}
      >
        {country.region}
      </div>
      <div
        className={`${_.cell} ${_.countries__population} ${isCountryVisited ? _.visited : ''}`}
        onClick={handleClickCountry}
        title={`${!isCountryVisited ? 'Click to mark the country as visited' : ''}`}
      >
        {country.population}
      </div>
    </React.Fragment>
  );
}
function areEqual(prevProps: CountryProps, nextProps: CountryProps) {
  return (
    prevProps.country.name.common === nextProps.country.name.common &&
    prevProps.isCountryVisited === nextProps.isCountryVisited
  );
}

const Country = memo(CountryComponent, areEqual);

export default Country;
