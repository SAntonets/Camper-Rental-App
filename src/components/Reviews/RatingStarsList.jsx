import css from './Reviews.module.css';
import svgSprite from '../../img/icons.svg';

const RatingStarsList = ({ review }) => {
  const ratingValues = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <ul className={css.rating_stars}>
      {ratingValues.map((item, key) => {
        return (
          <li
            className={
              Number(review.reviewer_rating) >= item
                ? css.active_star
                : css.inactive_star
            }
            key={key}
          >
            <svg width={16} height={16}>
              <use href={`${svgSprite}#star`}></use>
            </svg>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingStarsList;
