import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const UserContext = createContext();

const AuthContext = ({ children }) => {
    const authContext = useFirebase();
    return (
        <UserContext.Provider value={{ ...authContext }}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;