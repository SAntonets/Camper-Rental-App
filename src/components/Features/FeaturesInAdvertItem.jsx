import css from './Features.module.css';
import svgSprite from '../../img/icons.svg';
import { toCapitalize } from 'helpers/helperFunctions';

const FeaturesInAdvertItem = ({ advert }) => {
  return (
    <>
      <li className={css.features_item}>
        <svg width={20} height={20}>
          <use href={`${svgSprite}#users`}></use>
        </svg>
        <p className={css.features_name}>{advert.adults} adults</p>
      </li>
      <li className={css.features_item}>
        <svg width={20} height={20}>
          <use href={`${svgSprite}#automatic`}></use>
        </svg>
        <p className={css.features_name}>{toCapitalize(advert.transmission)}</p>
      </li>
      <li className={css.features_item}>
        <svg width={20} height={20}>
          <use href={`${svgSprite}#petrol`}></use>
        </svg>
        <p className={css.features_name}>{toCapitalize(advert.engine)}</p>
      </li>

      {advert.details.kitchen ? (
        <li className={css.features_item}>
          <svg width={20} height={20}>
            <use href={`${svgSprite}#kitchen`}></use>
          </svg>
          <p className={css.features_name}>Kitchen</p>
        </li>
      ) : (
        <></>
      )}

      <li className={css.features_item}>
        <svg width={20} height={20}>
          <use href={`${svgSprite}#beds`}></use>
        </svg>
        <p className={css.features_name}>{advert.details.beds} beds</p>
      </li>

      {advert.details.airConditioner ? (
        <li className={css.features_item}>
          <svg width={20} height={20}>
            <use href={`${svgSprite}#ac`}></use>
          </svg>
          <p className={css.features_name}> AC</p>
        </li>
      ) : (
        <></>
      )}
    </>
  );
};

export default FeaturesInAdvertItem;
