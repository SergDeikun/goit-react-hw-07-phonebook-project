import { createSlice } from '@reduxjs/toolkit';
// import { contactsApi } from './contactsApiSlice/contactsApiSlice';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  // extraReducers: builder => {
  //   builder.addMatcher(
  //     contactsApi.endpoints.addContact.matchFulfilled,
  //     (state, action) => {
  //       state.items = action.payload.data;
  //     }
  //   );
  // },

  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeContact: (state, { payload: id }) => {
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { addContact, removeContact, getVisibleContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
