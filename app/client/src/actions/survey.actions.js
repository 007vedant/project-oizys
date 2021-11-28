// import axios from 'axios';
// import BASE_URL from '../config';
import {
  SURVEY_FIRST_SUBMIT,
  SURVEY_SUBMIT_FAIL,
  SURVEY_SUBMIT_REQUEST,
  SURVEY_SUBMIT_SUCCESS,
} from '../constants/survey.constants';

export const surveyFirstSubmit = (responses) => async (dispatch) => {
  try {
    dispatch({ type: SURVEY_FIRST_SUBMIT, payload: responses });
  } catch {
    console.log('Some Error Occured!');
  }
};

export const submitSurvey = (responses) => async (dispatch, getState) => {
  try {
    dispatch({ type: SURVEY_SUBMIT_REQUEST, payload: responses });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: userInfo.token,
    //   },
    // };

    // const { data } = await axios.post(
    //   BASE_URL + `/api/users/records`,
    //   responses,
    //   config
    // );
    const data = {};
    dispatch({ type: SURVEY_SUBMIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SURVEY_SUBMIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
