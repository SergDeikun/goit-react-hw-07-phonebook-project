import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);

      return headers;
    },
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contacts'],
    }),
    // ======
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts`,
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['contacts'],
    }),
    // ======
    updateContactById: builder.mutation({
      query: contact => ({
        url: `/contacts/${contact.id}`,
        method: 'PATCH',
        body: contact,
      }),
      providesTags: ['contacts'],
    }),
    // ======
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useUpdateContactByIdMutation,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
