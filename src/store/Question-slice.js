import { createSlice } from "@reduxjs/toolkit";

const businessSlice = createSlice({
  name: "business",
  initialState: {
    sector: "dargi",
    field: "qvedargi",
    subField: {
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
    addSector(state, action) {
      state.sector = action.payload;
    },
    addField(state, action) {
      state.field = action.payload;
    },

    addSubField(state, action) {
      state.subField = action.payload;
    },
    getQuestionValues(state, action) {
      const index = state.subField.questions.findIndex(
        (question) => question.id === action.payload.id
      );
      state.subField.questions[index].value = action.payload.value;
    },
  },
});

export const { addSector, addField, addSubField, getQuestionValues } =
  businessSlice.actions;

export default businessSlice.reducer;
