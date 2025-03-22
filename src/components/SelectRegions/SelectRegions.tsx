import React from 'react';
import _ from './SelectRegions.module.css';

interface RegionProps {
  regions: string[];
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectRegions({ regions, setSelectedRegion }: RegionProps) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };
  return (
    <div className={_.select_wrapper}>
      <span className={_.title}>Select</span>
      <select className={_.select} onChange={(e) => handleSelectChange(e)}>
        <option value="all">All regions</option>
        {regions.map((region) => {
          return (
            <option value={region} key={region}>
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
}
