import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        composeWithDevTools(
                applyMiddleware(thunk))

)
export default store;