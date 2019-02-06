import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
import sync from "../utils/sync";
import { SYNC_ACTIONS, CLEAR_SEARCH_CACHE_ACTIONS } from "./resources/actions";
import { PURGE_STORE, SET_FROM_STORE, LOG_REDUX } from "../config/env";
import { resetCache } from "../utils/search";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);

const syncMiddleware = store => next => action => {
  next(action);

  if (SYNC_ACTIONS.includes(action.type)) {
    sync();
  }
};

const clearCacheMiddleware = store => next => action => {
  if (CLEAR_SEARCH_CACHE_ACTIONS.includes(action.type)) {
    resetCache();
  }

  next(action);
};

const middleware = [syncMiddleware, clearCacheMiddleware];

if (LOG_REDUX) {
  middleware.push(logger);
}

let store = createStore(persistedReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store, undefined, () => {
  return sync(SET_FROM_STORE, SET_FROM_STORE);
});

if (PURGE_STORE) {
  persistor.purge();
}

export { store };
