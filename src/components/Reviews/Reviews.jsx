import css from './Reviews.module.css';
import RatingStarsList from './RatingStarsList';

const Reviews = ({ reviews }) => {
  return (
    <ul className={css.reviews_list}>
      {reviews ? (
        reviews.map((review, key) => {
          return (
            <li className={css.reviews_item} key={key}>
              <div className={css.review_title}>
                <span className={css.avatar}>
                  {review.reviewer_name.slice(0, 1).toUpperCase()}
                </span>
                <div>
                  <h4 className="subtitle_h4">{review.reviewer_name}</h4>
                  <RatingStarsList review={review} />
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          );
        })
      ) : (
        <p>There are no comments for this camper</p>
      )}
    </ul>
  );
};

export default Reviews;
