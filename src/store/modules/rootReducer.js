import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import service from './servics/reducer';

export default combineReducers({
  auth,
  user,
  service,
});
