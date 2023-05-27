import { createSlice } from "@reduxjs/toolkit";

interface IState {
  token: string | null;
}

const initialState: IState = {
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.token = token;
    },
    logOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = userSlice.actions;

export default userSlice.reducer;
