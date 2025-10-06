// store.ts
import { configureStore, combineReducers, type Reducer } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  type PersistConfig,
  createTransform,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import CryptoJS from "crypto-js";

// Slice imports
import CommonGlobalValSlice, { type CommonGlobalValState } from "./CommonStore/CommonGlobalValSlice";
import CommonSave_GlobalValSlice, { type CommonSaveGlobalValState } from "./CommonStore/CommonSave_GlobalValSlice";
import type { AnyAction } from "redux";

// ==============================|| ENCRYPTION TRANSFORM ||============================== //
const secretKey = "MY_SECRET_KEY_123";

const encryptDecryptTransform = createTransform<any, any>(
  (inboundState: unknown) => {
    try {
      const stringified = JSON.stringify(inboundState);
      const encrypted = CryptoJS.AES.encrypt(stringified, secretKey).toString();
      return encrypted;
    } catch (e) {
      console.error("Encryption error:", e);
      return inboundState;
    }
  },
  (outboundState: unknown) => {
    try {
      if (typeof outboundState !== "string") return outboundState;
      const bytes = CryptoJS.AES.decrypt(outboundState, secretKey);
      const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decrypted;
    } catch (e) {
      console.error("Decryption error:", e);
      return outboundState;
    }
  }
);

// ==============================|| ROOT REDUCER ||============================== //
export interface RootState {
  CommonGlobalValStore: CommonGlobalValState;
  CommonSave_GlobalValStore: CommonSaveGlobalValState;
}

// Combine reducers
const rootReducer: Reducer<RootState, AnyAction> = combineReducers({
  CommonGlobalValStore: CommonGlobalValSlice,
  CommonSave_GlobalValStore: CommonSave_GlobalValSlice,
});

// ==============================|| PERSIST CONFIG ||============================== //
const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["CommonSave_GlobalValStore"], // only persist this slice
 transforms: [encryptDecryptTransform],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

// ==============================|| STORE ||============================== //
export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env?.VITE_DEVELOPMENT_MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// ==============================|| PERSISTOR ||============================== //
export const persistor = persistStore(store);

// ==============================|| TYPES ||============================== //
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
