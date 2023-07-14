import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./todo/reducers/index";

const reduxPersistConfig = {
  key: "application",
  storage: storage,
};

const huyReducer = persistReducer(reduxPersistConfig, rootReducer);

export const store = createStore(huyReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
