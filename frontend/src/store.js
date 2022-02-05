import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";  // redux google extension
import { sampleReducer} from './redux/reducers/sampleReducer';

const reducer = combineReducers({
    sample: sampleReducer
})

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;