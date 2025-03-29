import { memo } from 'react';
import _ from './Headings.module.css';

function HeadingsComponent() {
  return (
    <>
      <div className={`${_.cell} ${_.head}`}>Country Name</div>
      <div className={`${_.cell} ${_.head}`}>Flag</div>
      <div className={`${_.cell} ${_.head}`}>Region</div>
      <div className={`${_.cell} ${_.head}`}>Population</div>
    </>
  );
}

const Headings = memo(HeadingsComponent);

export default Headings;
