import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email , password)
    }
    
    const authData = {
        user,
        setUser,
        createUser
    }
    return <AuthContext value={authData} >
        {children}
    </AuthContext>
};

export default AuthProvider;