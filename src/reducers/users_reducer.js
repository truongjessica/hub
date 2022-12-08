import {
  LOGIN,
  LOGOUT,
  REGISTER,
  ACTIVE_ACCOUNT,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "../context/action";
import { MAIN_ROOT } from "../url";
import axios from "axios";
const user_reducer = async (state, action) => {
  const USER_URL = `${MAIN_ROOT}/auth/`;
  if (action.type === LOGIN) {
    const response = await axios.post(`${USER_URL}/login`, {
      ...action.payload,
    });
    const { user } = await response.data;
  }
};
export default user_reducer;
