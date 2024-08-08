import css from './Button.module.css';

export const Button = ({ children, onClick }) => {
  return (
    <button className={css.primary_btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export const SubmitButton = ({ children, onSubmit }) => {
  return (
    <button className={css.search_btn} type="submit" onSubmit={onSubmit}>
      {children}
    </button>
  );
};

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.loadMore_btn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export const ResetBtn = ({ onClick }) => {
  return (
    <button className={css.loadMore_btn} type="button" onClick={onClick}>
      Reset
    </button>
  );
};
