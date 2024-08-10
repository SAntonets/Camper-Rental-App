import { useState, useEffect } from 'react';

import css from './CampersList.module.css';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import AdvertItem from '../Camper/Camper';

import ModalAdvert from '../Modal/ModalAdvert';
import { LoadMoreBtn } from '../Buttons/Buttons';

const CampersList = ({ allAdverts, isFavorites = false }) => {
  const [advertsLimited, setAdvertsLimited] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState(false);

  const favorites = useSelector(selectFavorites);

  const advertsPerPage = 4;

  useEffect(() => {
    setAdvertsLimited(allAdverts.slice(0, advertsPerPage));
    setShowLoadMore(allAdverts.length > advertsPerPage);
  }, [allAdverts]);

  function handleClickLoadMore() {
    const loadMoreAcc = advertsLimited.length + advertsPerPage;
    setAdvertsLimited(allAdverts.slice(0, loadMoreAcc));
    setShowLoadMore(!(loadMoreAcc >= allAdverts.length));
  }

  function toggleShowModal(currentAdvert) {
    setShowModal(!showModal);
    setCurrentAdvert(currentAdvert);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  return (
    <>
      <div className={css.advertsList_wrapper}>
        <ul className={css.advertsList}>
          {advertsLimited.length ? (
            advertsLimited.map(advert => {
              return (
                <AdvertItem
                  key={advert._id}
                  advert={advert}
                  toggleShowModal={toggleShowModal}
                  isFavorite={favorites.favorites.includes(advert._id)}
                />
              );
            })
          ) : (
            <li className={`${css.not_found} subtitle_h4`}>
              {isFavorites ? (
                <p>There are no campers in your favorites</p>
              ) : (
                <p>There are no campers for your request</p>
              )}
            </li>
          )}
        </ul>
        {showLoadMore && <LoadMoreBtn onClick={handleClickLoadMore} />}
      </div>
      {showModal && (
        <ModalAdvert advert={currentAdvert} onModalClose={handleModalClose} />
      )}
    </>
  );
};

export default CampersList;
