import axios from 'axios';
import BASE_URL from '../config';

export const submitReaction = (strp, brt) => async (dispatch, getState) => {
  try {
    dispatch({ type: SURVEY_SUBMIT_REQUEST, payload: responses });

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
      strp,
      brt,
      config
    );
  } catch (error) {
    console.log(error);
  }
};
