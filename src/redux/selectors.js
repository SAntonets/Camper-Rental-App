import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectFilterLocation = state => state.filterLocation;
export const selectFilterFeatures = state => state.features;
export const selectFavorites = state => state.favorites;

export const filteredAdvertsSelector = createSelector(
  [selectAdverts, selectFilterLocation, selectFilterFeatures],
  (adverts, filter) => {
    let result = filter.filterLocation
      ? adverts.filter(advert =>
          advert.location
            .toLowerCase()
            .includes(filter.filterLocation.toLowerCase())
        )
      : adverts;

    if (filter.features.equipment.length > 0) {
      result = result.filter(advert => {
        let mathedEquipment = filter.features.equipment.every(
          feature =>
            advert.details[feature] > 0 || advert[feature] === 'automatic'
        );
        return mathedEquipment;
      });
    }

    if (filter.features.type.length > 0) {
      result = result.filter(advert =>
        filter.features.type.includes(advert.form)
      );
    }
    return result;
  }
);

export const filteredFavoritesAdvertsSelector = createSelector(
  [selectAdverts, selectFilterLocation, selectFavorites, selectFilterFeatures],
  (adverts, filter, favorites) => {
    adverts = adverts.filter(advert =>
      favorites.favorites.includes(advert._id)
    );

    let result = filter.filterLocation
      ? adverts.filter(advert =>
          advert.location
            .toLowerCase()
            .includes(filter.filterLocation.toLowerCase())
        )
      : adverts;

    if (filter.features.equipment.length > 0) {
      result = result.filter(advert => {
        let mathedEquipment = filter.features.equipment.every(
          feature =>
            advert.details[feature] > 0 || advert[feature] === 'automatic'
        );
        return mathedEquipment;
      });
    }

    if (filter.features.type.length > 0) {
      result = result.filter(advert =>
        filter.features.type.includes(advert.form)
      );
    }
    return result;
  }
);
