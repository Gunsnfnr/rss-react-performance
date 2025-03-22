import _ from './Headings.module.css';

export default function Headings() {
  return (
    <>
      <div className={`${_.cell} ${_.head}`}>Country Name</div>
      <div className={`${_.cell} ${_.head}`}>Flag</div>
      <div className={`${_.cell} ${_.head}`}>Region</div>
      <div className={`${_.cell} ${_.head}`}>Population</div>
    </>
  );
}
