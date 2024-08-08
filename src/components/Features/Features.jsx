import FeatureDetailsList from './FeatureDetailsList';
import css from './Features.module.css';

import { toCapitalize } from '../../helpers/helperFunctions';

const Features = ({ advert }) => {
  return (
    <>
      <FeatureDetailsList features={advert} />
      <h3 className={`${css.vehicle_title} subtitle_h3 `}>Vehicle details</h3>
      <ul className={css.vehicle_list}>
        <li className={css.vehicle_item}>
          <p>Form</p>
          <p>{toCapitalize(advert.form)}</p>
        </li>
        <li className={css.vehicle_item}>
          <p>Length</p>
          <p>{advert.length}</p>
        </li>
        <li className={css.vehicle_item}>
          <p>Width</p>
          <p>{advert.width}</p>
        </li>
        <li className={css.vehicle_item}>
          <p>Height</p>
          <p>{advert.height}</p>
        </li>
        <li className={css.vehicle_item}>
          <p>Tank</p>
          <p>{advert.tank}</p>
        </li>
        <li className={css.vehicle_item}>
          <p>Consumption</p>
          <p>{advert.consumption}</p>
        </li>
      </ul>
    </>
  );
};

export default Features;
