import { CountryData } from '../types';

export const getRegions = (countries: CountryData[]) => {
  const regions: string[] = [];
  countries.forEach((country: CountryData) => {
    if (!regions.includes(country.region)) regions.push(country.region);
  });
  return regions;
};
