import React from 'react';
import _ from './SelectSorting.module.css';
import { Sorting } from '../../types';

interface SortingProps {
  setSorting: React.Dispatch<React.SetStateAction<Sorting>>;
}

export default function SelectSorting({ setSorting }: SortingProps) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting(e.target.value as Sorting);
  };
  return (
    <div className={_.select_wrapper}>
      <span className={_.title}>Sorting</span>
      <select className={_.select} onChange={(e) => handleSelectChange(e)} defaultValue={Sorting.None}>
        {Object.values(Sorting).map((sortingType) => {
          return (
            <option value={sortingType} key={sortingType} disabled={sortingType === Sorting.None}>
              {sortingType}
            </option>
          );
        })}
      </select>
    </div>
  );
}
