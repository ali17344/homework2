import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('contacts')) || [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
    deleteContact: (state, action) => {
      const newState = state.filter((contact) => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    },
    editContact: (state, action) => {
      const { id, name, phone } = action.payload;
      const contact = state.find((contact) => contact.id === id);
      if (contact) {
        contact.name = name;
        contact.phone = phone;
      }
      localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;

