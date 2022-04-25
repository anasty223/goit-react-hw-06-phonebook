export const getContact = (state) => state.myValue.contactReducer;
export const getFilter = (state) => state.myValue.filterReducer;

export const getVisibleContacts = (state) => {
  const filter = getFilter(state);
  const contacts = getContact(state);

  const normalizeFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};
