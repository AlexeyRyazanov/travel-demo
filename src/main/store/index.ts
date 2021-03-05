import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from '../utils/throttle';
import { rootReducer } from './flights';
import { saveState, loadState } from './helpers/local-storage';

// const persistedStore = loadState();

const store = createStore(
   rootReducer,
   // persistedStore,
   composeWithDevTools(
      // applyMiddleware(...middleware),
      // other store enhancers if any
   ),
);

// store.subscribe(throttle(() => {
//    console.log('save state');
//    saveState(store.getState());
// }, 1000));

export default store;

// const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), devTools));
