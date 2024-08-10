import { useEffect } from 'react';

import css from '../CatalogPage/CatalogPage.module.css';


import { useDispatch, useSelector } from 'react-redux';
import {
  filteredFavoritesAdvertsSelector,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { getAdverts } from '../../redux/operations';

import Loader from '../../components/Loader/Loader';
import AdvertsList from '../../components/CampersList/CampersList';
import SearchForm from '../../components/SearchForm/SearchForm';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favAdverts = useSelector(filteredFavoritesAdvertsSelector);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
 
        <section className={css.catalogPage_wrapper}>
          <SearchForm />
          {isLoading && !error ? (
            <Loader />
          ) : (
            <AdvertsList allAdverts={favAdverts} isFavorites={true} />
          )}
      </section>
  );
};

export default FavoritesPage;
