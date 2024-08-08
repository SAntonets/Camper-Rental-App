import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterLocation: '',
  features: {
    equipment: [],
    type: [],
  },
};

export const filterSlice = createSlice({
  name: 'filterLocation',
  initialState: filterInitialState,
  reducers: {
    setFilterLocation(state, action) {
      state.filterLocation = action.payload;
    },
    setFeatures: (state, action) => {
      state.features = action.payload;
    },
  },
});

export const { setFilterLocation, setFeatures } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
