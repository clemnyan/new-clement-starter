import { combineReducers } from 'redux';

import AuthReducer from './authReducer';

const rootReducer = combineReducers({
  authenticated: AuthReducer,
});

export default rootReducer;
