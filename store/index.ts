//REDUX
import { combineReducers, configureStore } from "@reduxjs/toolkit";
//REDUX-PERSIST
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
//REDUCERS
import uiConfigsReducer from "@/store/slices/uiConfigs";
import navbarItemsReducer from "@/store/slices/navbarItems";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  uiConfigs: uiConfigsReducer,
  navbarItems: navbarItemsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
