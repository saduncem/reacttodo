import { createSlice, createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
// import { getLocalstorage } from "../../shared/utils/localStore/localStorage";
const hydrate = createAction(HYDRATE);

const userSlice = createSlice({
  name: "userInformation",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload as any,
      };
    });
  },
});

export  const UserData = (state : any) => {
  return  state.countryInformation;
}

export const { setUser } = userSlice.actions; // functions dışarıya aktarılması

export default userSlice.reducer;

export function setLoginUser(params: any) {
  return async (dispatch:any) => {
    try {
     
      await dispatch(setUser(params) as any);
    } catch (error) {
      await dispatch(setUser(null));
    }
  };
}
