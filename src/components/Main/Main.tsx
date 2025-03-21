import React, { useEffect, useState } from 'react';
import { getCountries } from '../../api/api-request';
import _ from './Main.module.css';
import { CountryData } from '../../types';
import { getRegions } from '../../utils/get-regions';
import SelectRegions from '../SelectRegions/SelectRegions';

export default function Main() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  useEffect(() => {
    const updateCountries = async () => {
      const response: CountryData[] = await getCountries();
      setCountries(response);
      setRegions(getRegions(response));
    };
    updateCountries();
  }, []);

  const filterCountries = (selectedRegion: string) => {
    if (selectedRegion === 'all') {
      return countries;
    } else {
      return countries.filter((country) => country.region === selectedRegion);
    }
  };

  return (
    <>
      <div className={_.countries}>
        <div className={`${_.cell} ${_.head}`}>Country Name</div>
        <div className={`${_.cell} ${_.head}`}>Flag</div>
        <div className={`${_.cell} ${_.head}`}>
          <div>Region</div>
          <div>
            <SelectRegions regions={regions} setSelectedRegion={setSelectedRegion} />
          </div>
        </div>
        <div className={`${_.cell} ${_.head}`}>Population</div>
        {filterCountries(selectedRegion).map((country: CountryData) => {
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
    </>
  );
}
