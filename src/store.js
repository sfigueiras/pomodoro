import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
  key: 'pomodoro',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
