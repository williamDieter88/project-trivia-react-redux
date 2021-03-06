import mainAPI from '../services/mainAPI';
import getToken from '../services/tokenAPI';

export const USER_LOGIN = 'USER_LOGIN';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const GET_API = 'GET_API';
export const SCORE = 'SCORE';
export const RESET_GAME = 'RESET_GAME';

export const userLogin = (email, name, score) => ({
  type: USER_LOGIN,
  email,
  name,
  score,
});

export const scoreFunction = (timer, counter) => ({
  type: SCORE,
  counter,
  timer,
});

const getApi = (answer) => ({
  type: GET_API,
  answer,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export function fetchApi() {
  return async (dispatch) => {
    const { token } = await getToken();
    const answer = await mainAPI(token);
    dispatch(getApi(answer));
  };
}
