import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import species from './fish/species';
import speciesDetails from './fish/speciesDetail';

const rootReducer = combineReducers({
  species,
  speciesDetails,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
