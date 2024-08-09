import css from './FilterLocation.module.css';
import styles from '../SearchForm/SearchForm.module.css';
import svgSprite from '../../../public/images/icons.svg';

import { useDispatch } from 'react-redux';
import { setFilterLocation } from '../../redux/filterSlice';

const FilterLocation = () => {
  const dispatch = useDispatch();

  const onLocationChange = event => {
    dispatch(setFilterLocation(event.target.value));
  };

  return (
    <div className={css.location_wrapper}>
      <label className={styles.label} htmlFor="location">
        Location
      </label>
      <div className={css.locationInput_wrapper}>
        <input
          className={css.location_input}
          id="location"
          name="location"
          type="text"
          autoComplete="off"
          placeholder="City"
          onChange={onLocationChange}
        />
        <svg className={css.location_svg} width={18} height={20}>
          <use href={`${svgSprite}#map-pin`}></use>
        </svg>
      </div>
    </div>
  );
};

export default FilterLocation;
