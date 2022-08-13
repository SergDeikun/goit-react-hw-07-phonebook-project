import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeContact: (state, { payload: id }) => {
      state.items = state.items.filter(item => item.id !== id);
    },

    // getVisibleContacts: (state, actions) => {
    //   state.items = state.items.filter(contact =>
    //     contact.name.includes(actions.payload.filter)
    //   );
    // },
  },
});

export const { addContact, removeContact, getVisibleContacts } =
  contactsSlice.actions;
export const itemsReducer = contactsSlice.reducer;
