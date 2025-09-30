import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSpinner: false,
  spinnerDelay: 3000,
  openNavbar: false,
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
      openSpinner: (state) => {
        state.showSpinner = true;
      },
      closeSpinner: (state) => {
        state.showSpinner = false;
      },
      toggleNavbar: (state) => {
        state.openNavbar =!state.openNavbar;
      }
    }
  })
  
export const { openSpinner, closeSpinner, toggleNavbar } = pageSlice.actions
export const showSpinner = state => state.page.showSpinner
export const spinnerDelay = state => state.page.spinnerDelay
export const openNavbarSelector = state => state.page.openNavbar;

export default pageSlice.reducer;
