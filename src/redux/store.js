import { configureStore } from '@reduxjs/toolkit';

import filter from './filter';
import contacts from './contacts';
import { contactsApi } from './contactsApiSlice/contactsApiSlice';
import user from './user';
import { userApi } from './userApiSlice/userApiSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};
const persistedUserReducer = persistReducer(userPersistConfig, user);

export const store = configureStore({
  reducer: {
    filter,
    contacts,
    [contactsApi.reducerPath]: contactsApi.reducer,
    user: persistedUserReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    userApi.middleware,
  ],
});

export const persistor = persistStore(store);
