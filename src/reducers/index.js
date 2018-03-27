import { fetch } from './fetch';
import { images } from './images';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    fetch,
    images
});

export default rootReducer;