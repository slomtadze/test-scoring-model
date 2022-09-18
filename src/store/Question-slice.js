import { createSlice } from "@reduxjs/toolkit";

const businessSlice = createSlice({
  name: "business",
  initialState: {
    subField: "Kultura",
    details: { minProfit: "5" },
  },
  reducers: {
    addSubField(state, action) {
      state.subField = action.payload;
    },
    addDetails(state, action) {
      state.details = action.payload;
    },
  },
});

export const { addSubField, addDetails } = businessSlice.actions;

export default businessSlice.reducer;
