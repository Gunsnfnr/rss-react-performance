import { useEffect, useState } from 'react';
import { getCountries } from '../../api/api-request';
import _ from './Main.module.css';
import { CountryData } from '../../types';

export default function Main() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  useEffect(() => {
    const updateCountries = async () => {
      const response: CountryData[] = await getCountries();
      console.log('response: ', response);
      setCountries(response);
    };
    updateCountries();
  }, []);

  return (
    <>
      <div className={_.countries}>
        <div className={`${_.cell} ${_.head}`}>Country Name</div>
        <div className={`${_.cell} ${_.head}`}>Flag</div>
        <div className={`${_.cell} ${_.head}`}>Region</div>
        <div className={`${_.cell} ${_.head}`}>Population</div>
        {countries.map((country: CountryData) => {
          return (
            <>
              <div className={`${_.cell} ${_.countries__name}`} key={country.name.common}>
                {country.name.common}
              </div>
              <div className={`${_.cell} ${_.countries__flag}`}>
                <img src={country.flags.png} />
              </div>
              <div className={`${_.cell} ${_.countries__region}`}>{country.region}</div>
              <div className={`${_.cell} ${_.countries__population}`}>{country.population}</div>
            </>
          );
        })}
      </div>
    </>
  );
}
