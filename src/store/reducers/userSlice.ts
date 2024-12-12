import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../shared/types";
import { User as FirebaseUser } from "firebase/auth";

const initialState: UserState = {
  isAuth: false,
  isLoading: true,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FirebaseUser>) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuth = false;
      state.isLoading = false;
    }
  },
});

export default userSlice.reducer;
