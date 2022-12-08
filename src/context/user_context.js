import React, { useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  ACTIVE_ACCOUNT,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "../context/action";
import reducer from "../reducers/users_reducer";
const user = {};
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, user);

  const login = async (info) => {
    dispatch({ type: LOGIN, payload: info });
  };
  const logout = async () => {
    dispatch({ type: LOGOUT });
  };
  const register = async (info) => {
    dispatch({ type: REGISTER, payload: info });
  };
  const forgotPassword = async () => {
    dispatch({ type: FORGOT_PASSWORD });
  };
  const resetPassword = async () => {
    dispatch({ type: RESET_PASSWORD });
  };
  const activeAccount = async (info) => {
    dispatch({ type: ACTIVE_ACCOUNT, payload: info });
  };
  return (
    <UserContext.Provider value={{ login, user }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
