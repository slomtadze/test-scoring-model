import { createSlice } from "@reduxjs/toolkit";

const businessSlice = createSlice({
  name: "business",
  initialState: {
    field: "dargi",
    subField: "qvedargi",
    details: {
      minProfit: "",
      maxProfit: "",
      exp: "",
      questions: [
        { q: "", value: "", id: 1 },
        { q: "", value: "", id: 2 },
        { q: "", value: "", id: 3 },
        { q: "", value: "", id: 4 },
        { q: "", value: "", id: 5 },
      ],
    },
  },
  reducers: {
    addSubField(state, action) {
      state.subField = action.payload;
    },
    addField(state, action) {
      state.field = action.payload;
    },
    addDetails(state, action) {
      state.details = action.payload;
    },
    getQuestionValues(state, action) {
      const index = state.details.questions.findIndex(
        (question) => question.id === action.payload.id
      );
      state.details.questions[index].value = action.payload.value;
    },
  },
});

export const { addSubField, addDetails, addField, getQuestionValues } =
  businessSlice.actions;

export default businessSlice.reducer;
