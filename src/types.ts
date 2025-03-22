export interface CountryData {
  name: {
    common: string;
  };
  population: number;
  region: string;
  flags: {
    png: string;
  };
}

export enum Sorting {
  None = 'None',
  Ascending = 'Ascending',
  Descending = 'Descending',
}
