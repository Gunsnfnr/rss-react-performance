import React, { useEffect, useState } from 'react';
import { getCountries } from '../../api/api-request';
import _ from './Main.module.css';
import { CountryData } from '../../types';
import { getRegions } from '../../utils/get-regions';
import SelectRegions from '../SelectRegions/SelectRegions';
import Search from '../Search/Search';
import Headings from '../Headings/Headings';

export default function Main() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const updateCountries = async () => {
      const response: CountryData[] = await getCountries();
      setCountries(response);
      setRegions(getRegions(response));
    };
    updateCountries();
  }, []);

  const filterCountries = (country: CountryData) => {
    if (selectedRegion !== 'all' && country.region !== selectedRegion) return false;
    if (searchTerm !== '' && !country.name.common.toLowerCase().includes(searchTerm)) return false;
    return true;
  };

  return (
    <div className={_.countries}>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SelectRegions regions={regions} setSelectedRegion={setSelectedRegion} />
      <Headings />
      {countries.filter(filterCountries).map((country: CountryData) => {
        return (
          <React.Fragment key={country.name.common}>
            <div className={`${_.cell} ${_.countries__name}`}>{country.name.common}</div>
            <div className={`${_.cell} ${_.countries__flag}`}>
              <img src={country.flags.png} />
            </div>
            <div className={`${_.cell} ${_.countries__region}`}>{country.region}</div>
            <div className={`${_.cell} ${_.countries__population}`}>{country.population}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
