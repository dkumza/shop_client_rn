import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthCtx = createContext({
  login() {},
  logout() {},
  isUserLogged: false,
  token: null,
  username: '',
});

AuthCtx.displayName = 'AuthCtx';

export const AuthCtxProvider = ({ children }) => {
  const tokenFromLS = AsyncStorage.getItem('session_token');
  const usernameFromLS = AsyncStorage.getItem('session_username');
  const [sessionToken, setSessionToken] = useState(tokenFromLS || null);
  const [username, setUsername] = useState(usernameFromLS || '');

  const isUserLogged = !!sessionToken;

  const login = (token, name) => {
    setSessionToken(token);
    setUsername(username);
    AsyncStorage.setItem('session_token', token);
    AsyncStorage.setItem('session_username', username);
  };

  const authCtx = {
    token: sessionToken,
    username,
    isUserLogged,
    // login,
    // logout,
  };

  return <AuthCtx.Provider value={authCtx}>{children}</AuthCtx.Provider>;
};

export function useAuthCtx() {
  return useContext(AuthCtx);
}