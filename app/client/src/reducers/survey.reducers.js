import {
  SURVEY_FIRST_SUBMIT,
  SURVEY_SUBMIT_FAIL,
  SURVEY_SUBMIT_REQUEST,
  SURVEY_SUBMIT_SUCCESS,
} from '../constants/survey.constants';

export const surveyFirstSubmitReducer = (state = {}, action) => {
  switch (action.type) {
    case SURVEY_FIRST_SUBMIT:
      console.log(action.payload);
      return { ...action.payload };
    case SURVEY_SUBMIT_REQUEST:
      return { ...action.payload };
    default:
      return state;
  }
};

export const surveySubmitReducer = (state = {}, action) => {
  switch (action.type) {
    case SURVEY_SUBMIT_REQUEST:
      return { loading: true };
    case SURVEY_SUBMIT_SUCCESS:
      return { loading: false, success: true };
    case SURVEY_SUBMIT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
