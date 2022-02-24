import { combineReducers } from 'redux';

import organizations from './organizations';
import modal from './modal.js';

const rootReducer = combineReducers({
  organizations,
  modal,
});

export default rootReducer;
