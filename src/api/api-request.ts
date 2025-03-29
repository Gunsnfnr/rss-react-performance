import { CountryData } from '../types';

const BASE_API_URL = 'https://restcountries.com/v3.1';

const getCountries = (): Promise<CountryData[]> => {
  const response = fetch(`${BASE_API_URL}/all`)
    .then((response: Response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Response('Fetching species failed with status: ', { status: response.status });
      }
    })
    .catch((error) => {
      throw new Error(`Something went wrong. Error text:\n${error}`);
    });
  return response;
};

export { getCountries };
