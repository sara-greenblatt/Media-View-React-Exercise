import { combineReducers } from 'redux';

import { list } from './list.reducer';

const rootReducer = combineReducers({
    list
});

export default rootReducer;