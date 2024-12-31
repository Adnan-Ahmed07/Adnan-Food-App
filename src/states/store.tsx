import { configureStore } from "@reduxjs/toolkit";
import { FLUSH,PAUSE,PERSIST,PURGE,REGISTER,REHYDRATE,persistStore, persistReducer } from "redux-persist";
import reduxStorage from "./storage";
import rootReducer from "./rootReducer";


const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist: [],
  whitelist: ['user','cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store =configureStore({ 
  reducer:persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({ 
    serializableCheck:{ 
      ignoredActions:[FLUSH,PERSIST,PAUSE,PURGE,REHYDRATE,REGISTER]
    }
  })
  
})
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;