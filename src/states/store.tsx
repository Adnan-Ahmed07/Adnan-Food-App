import { configureStore } from "@reduxjs/toolkit";
import { FLUSH,PAUSE,PERSIST,PURGE,REGISTER,REHYDRATE,persistStore } from "redux-persist";

export const store =configureStore({ 
  reducer:[],
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({ 
    serializableCheck:{ 
      ignoredActions:[FLUSH,PERSIST,PAUSE,PURGE,REHYDRATE,REGISTER]
    }
  })
  
})
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;