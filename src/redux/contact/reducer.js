import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as action from "./action";

// const contactsReducers = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const contactReducer = createReducer([], {
  [action.addContact]: (state, { payload }) => [payload, ...state],
  [action.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [action.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contactReducer,
  filterReducer,
});
