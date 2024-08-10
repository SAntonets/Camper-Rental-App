import { useEffect } from 'react';

import css from './CatalogPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../redux/operations';
import {
  filteredAdvertsSelector,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import Loader from '../../components/Loader/Loader';
import AdvertsList from '../../components/CampersList/CampersList';
import SearchForm from '../../components/SearchForm/SearchForm';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const allAdverts = useSelector(filteredAdvertsSelector);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
        <section className={css.catalogPage_wrapper}>
          <SearchForm />
          {isLoading && !error ? (
            <Loader />
          ) : (
            <AdvertsList allAdverts={allAdverts} />
          )}
        </section>
  );
};

export default CatalogPage;
