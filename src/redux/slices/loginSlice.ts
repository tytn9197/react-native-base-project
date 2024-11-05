import {createSlice} from '@reduxjs/toolkit';

export interface ILoginState {
  isSignedIn: boolean;
}

const initialState: ILoginState = {
  isSignedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: state => {
      state.isSignedIn = true;
    },
    logout: state => {
      state.isSignedIn = false;
    },
    switchValue: state => {
      state.isSignedIn = !state.isSignedIn
    }
  },
});

export const {login, logout, switchValue } = loginSlice.actions;

export default loginSlice;
