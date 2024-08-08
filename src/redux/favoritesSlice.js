import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] },
  reducers: {
    setFavorite(state, action) {
      const favorites = state.favorites.includes(action.payload)
        ? state.favorites.filter(favorite => favorite !== action.payload)
        : [...state.favorites, action.payload];
      return { favorites: favorites };
    },
  },
});

export const { setFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
