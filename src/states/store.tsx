import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";
import reduxStorage from "./storage";
import rootReducer from "./rootReducer";


const persistConfig = {
    key: 'root',
    storage: reduxStorage,
    blacklist: [],
    whitelist: ['user', 'cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlare) => 
        getDefaultMiddlare({
            serializableCheck: {
                ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST]
            }
        })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;