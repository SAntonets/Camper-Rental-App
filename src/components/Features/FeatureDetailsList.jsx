import css from './Features.module.css';
import svgSprite from '../../../public/images/icons.svg';

const FeatureDetailsList = ({ features }) => {
  return (
    <ul className={css.features_list}>
      {Object.keys(features.details).map(key => {
        let keyText = key;
        let value = features.details[key];
        let valueText = value;
        if (key === 'airConditioner') {
          keyText = 'air conditioner';
        }
        if ((key !== 'beds') & (key !== 'hob')) {
          valueText = '';
        }
        if (value) {
          return (
            <li className={css.features_item} key={`${features._id}_${key}`}>
              <svg width={20} height={20}>
                <use href={`${svgSprite}#${key}`}></use>
              </svg>
              <p className={css.features_name}>
                {valueText} {keyText}
              </p>
            </li>
          );
        } else return <></>;
      })}
    </ul>
  );
};

export default FeatureDetailsList;
