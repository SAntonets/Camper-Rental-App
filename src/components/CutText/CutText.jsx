import css from '../AdvertItem/AdvertItem.module.css';

export const CutText = ({ children, maxLength = 62 }) => {
  if (children.length <= maxLength) {
    return <p className={`${css.descr_text} text `}>{children}</p>;
  }
  let text = children.substring(0, maxLength) + ' ...';

  return <p className={`${css.descr_text} text `}>{text}</p>;
};

export const CutTitle = ({ children, maxLength = 28 }) => {
  if (children.length <= maxLength) {
    return <h2>{children}</h2>;
  }

  let title = children.substring(0, maxLength) + ' ...';

  return <h2>{title}</h2>;
};
