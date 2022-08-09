import { createContext } from 'react';
import { AuthContext } from 'modules/Auth/types';

const AuthContext = createContext({} as AuthContext);

export default AuthContext;
