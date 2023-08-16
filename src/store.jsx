import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'Kim',
});

export default configureStore({
  reducer: {
    작명: user.reducer,
  },
});
