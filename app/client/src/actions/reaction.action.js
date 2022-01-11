import axios from 'axios';
import BASE_URL from '../config';
import { SURVEY_SUBMIT_REQUEST, SURVEY_SUBMIT_SUCCESS } from '../constants/survey.constants';

export const submitReaction = (strp, brt) => async (dispatch, getState) => {
  try {
    dispatch({ type: SURVEY_SUBMIT_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(
      BASE_URL + `/api/reactscreening`,
      { strp, brt },
      config
    );

    dispatch({ type: SURVEY_SUBMIT_SUCCESS, payload: data });

  } catch (error) {
    console.log(error);
  }
};
