import { configureStore} from "@reduxjs/toolkit";
import CartSliceReducer from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";
import TodoSlice from "./slices/FetchSlice";




// import storage from 'redux-persist/lib/storage'
// import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore} from 'redux-persist'


// const rootReducer=combineReducers({
//   todo:TodoSlice,
//   cart : CartSliceReducer,
//   category: CategorySlice,
//   search: SearchSlice,
// })


// const persistConfig={
//   key:'root',
//   storage,
//   whitelist:['cart'],
//   blacklist:['category',]
// }
// const persistedReducer=persistReducer(persistConfig,rootReducer);

// export const Store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//       }
//     })
// });

// export const persistor=persistStore(Store)




const Store = configureStore({
  reducer: {
      todo:TodoSlice,
   cart : CartSliceReducer,
   category: CategorySlice,
   search: SearchSlice,
   },
  });
export default Store;