import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

// import UserModel from '../serverless/data/models/UserModel';
import api from '../services/fetchAPI/init';
import { UserModel } from '../../backend/data/model/UserModel';
import { LoginProps } from '../../backend/data/usecases/users/UsersCases';

export interface AuthProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface AuthContextProps {
  user: { userInfo: Omit<UserModel, 'password'> } | null
  isAuthenticated: boolean
  signIn({ email, password }: LoginProps): Promise<boolean>
  signOut(): void
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<{ userInfo: Omit<UserModel, 'password'> } | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const handleRecoverUserInfo = async () => {
      const { authToken } = parseCookies();

      if (authToken) {
        const response = await api.post('/user/recovery', {
          token: authToken,
        });

        const { content, payload } = response.data;

        api.setAuthHeader(`Bearer ${payload}`);

        if (content) {
          setUser({
            userInfo: content as Omit<UserModel, 'password'>,
          });
        }
      }
    };
    handleRecoverUserInfo();
  }, []);

  const signIn = async ({ email, password }: LoginProps): Promise<boolean> => {
    const response = await api.post('/user/login', {
      email,
      password,
    });

    if (response.data.error) {
      return false;
    }

    setCookie(undefined, 'authToken', response.data.payload as string, {
      maxAge: (60 * 60) * 48, // 2 days
    });

    setCookie(undefined, 'userId', (response.data.content as UserModel).id as unknown as string, {
      maxAge: (60 * 60) * 48,
    });

    api.setAuthHeader(`Bearer ${response.data.payload}`);
    const userReturns = response.data.content as Omit<UserModel, 'password'>;
    if (response.data.content !== undefined) {
      setUser({
        userInfo: {
          id: userReturns.id,
          email: userReturns.email,
        },
      });
      return true;
    }
    return false;
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const signOut = useCallback((): void => {
    destroyCookie({}, 'userId');
    destroyCookie({}, 'authToken', {
      path: '/',
    });
    setUser(null);
  }, []);

  const context: AuthContextProps = useMemo(() => ({
    user,
    isAuthenticated,
    signIn,
    signOut,
  }), [user, isAuthenticated, signOut]);

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
}
