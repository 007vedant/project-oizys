import { combineReducers } from 'redux';

import {
  surveyFirstSubmitReducer,
  surveySubmitReducer,
} from './survey.reducers';

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userNotificationsReducer,
  userConsentReducer,
  userRemoveAccessReducer,
} from './user.reducers';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userNotifications: userNotificationsReducer,
  userConsent: userConsentReducer,
  userRemoveAccess: userRemoveAccessReducer,
  surveyResponses: surveyFirstSubmitReducer,
  surveySubmit: surveySubmitReducer,
});
