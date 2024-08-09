import css from './Filters.module.css';
import styles from '../SearchForm/SearchForm.module.css';
import cssTitle from '../Features/Features.module.css';
import svgSprite from '../../../public/images/icons.svg';



import { useDispatch } from 'react-redux';
import { setFeatures } from '../../redux/filterSlice';
import { ResetBtn, SubmitButton } from '../Button/Button';

const Filters = () => {
  const dispatch = useDispatch();

  function onHandleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const equipment = Array.from(formData.entries())
      .filter(([key]) => key === 'equipment')
      .map(equipment => equipment[1]);

    const type = Array.from(formData.entries())
      .filter(([key]) => key === 'type')
      .map(type => type[1]);

    event.target.reset();

    dispatch(setFeatures({ equipment, type }));
  }


  return (
    <form onSubmit={onHandleSubmit}>
      <div className={css.filters_wrapper}>
        <p className={`${styles.label} ${css.filters_title}`}>Filters</p>
        <h3
          className={`${cssTitle.vehicle_title} subtitle_h3 ${css.group_title}`}
        >
          Vehicle equipment
        </h3>
        <fieldset className={css.group_wrapper}>
          <label className={css.equipment_label} htmlFor="airConditioner">
            <input
              id="airConditioner"
              type="checkbox"
              name="equipment"
              value="airConditioner"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#ac`}></use>
            </svg>
            AC
          </label>
          <label className={css.equipment_label} htmlFor="transmission">
            <input
              id="transmission"
              type="checkbox"
              name="equipment"
              value="transmission"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#automatic`}></use>
            </svg>
            Automatic
          </label>
          <label className={css.equipment_label} htmlFor="kitchen">
            <input
              id="kitchen"
              type="checkbox"
              name="equipment"
              value="kitchen"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#kitchen`}></use>
            </svg>
            Kitchen
          </label>
          <label className={css.equipment_label} htmlFor="tv">
            <input
              id="tv"
              type="checkbox"
              name="equipment"
              value="TV"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#tv1`}></use>
            </svg>
            TV
          </label>
          <label className={css.equipment_label} htmlFor="shower">
            <input
              id="shower"
              type="checkbox"
              name="equipment"
              value="shower"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#shower`}></use>
            </svg>
            Shower/WC
          </label>
        </fieldset>

        <h3
          className={`${cssTitle.vehicle_title} subtitle_h3 ${css.group_title}`}
        >
          Vehicle type
        </h3>
        <fieldset className={css.group_wrapper_type}>
          <label className={css.type_label} htmlFor="panelTruck">
            <input
              id="panelTruck"
              type="radio"
              name="type"
              value="panelTruck"
              className={css.type_input}
            />
            <svg width={40} height={28}>
              <use href={`${svgSprite}#van`}></use>
            </svg>
            Van
          </label>
          <label className={css.type_label} htmlFor="fullyIntegrated">
            <input
              id="fullyIntegrated"
              type="radio"
              name="type"
              value="fullyIntegrated"
              className={css.type_input}
            />
            <svg width={40} height={28}>
              <use href={`${svgSprite}#fully-integrated`}></use>
            </svg>
            Fully Integrated
          </label>
          <label className={css.type_label} htmlFor="alcove">
            <input
              id="alcove"
              type="radio"
              name="type"
              value="alcove"
              className={css.type_input}
            />
            <svg width={40} height={28}>
              <use href={`${svgSprite}#alcove`}></use>
            </svg>
            Alcove
          </label>
        </fieldset>
      </div>
      <div className={css.btns_set}>
        <SubmitButton>Search</SubmitButton>
      </div>
    </form>
  );
};

export default Filters;
