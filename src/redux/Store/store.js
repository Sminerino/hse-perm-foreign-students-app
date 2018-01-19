import { createStore, applyMiddleware } from 'redux';
import { appReducer } from "../Reducer/reducer";
import thunk from 'redux-thunk';

let store = createStore(appReducer, applyMiddleware(thunk));

export { store };
