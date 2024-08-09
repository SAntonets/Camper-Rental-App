import FilterLocation from '../FilterLocation/FilterLocation';
import Filters from '../Filters/Filters';
import css from './SearchForm.module.css';




const SearchForm = () => {
  return (
    <>
      <div className={css.searchForm_wrapper}>
        <FilterLocation />
        <Filters />
      </div>
    </>
  );
};

export default SearchForm;
