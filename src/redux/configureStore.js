import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import species from './fish/species';

const rootReducer = combineReducers({
  species,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
