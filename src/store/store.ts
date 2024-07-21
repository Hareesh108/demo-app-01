import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import StepperChecklistSlice from "../slices/StepperChecklistSlice";
import sectionASlice from "../slices/sectionASlice";
import sectionAExecutiveSlice from "../slices/sectionAExecutiveSlice";
import sectionCSlice from "../slices/sectionCSlice";
import sectionBSlice from "../slices/sectionBSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  stepperChecklist: StepperChecklistSlice,
  sectionA: sectionASlice,
  sectionAExecutive: sectionAExecutiveSlice,
  sectionB: sectionBSlice,
  sectionC: sectionCSlice,
});

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
