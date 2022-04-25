import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

const add = ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const addContact = createAction("contact/add", add);
const deleteContact = createAction("contact/delete");
// console.log("deleteContact", deleteContact);

const changeFilter = createAction("contact/changeFilter");

export { addContact, deleteContact, changeFilter };
