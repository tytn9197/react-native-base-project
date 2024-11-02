import {createSlice} from '@reduxjs/toolkit';

export interface ILoginState {
  isSignedIn: boolean;
}

const initialState: ILoginState = {
  isSignedIn: false,
};

export const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: state => {
      state.isSignedIn = true;
    },
  },
});

export const {login} = loginSlice.actions;

export default loginSlice;
