import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user with email and password
    const signInwithpassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with social accounts
    const signInWithSocials = (Provider) => {
        setLoading(true)
        return signInWithPopup(auth, Provider)
    }

    const updateUserInfo = (name,  phoneNumber) => {
        return updateProfile(auth.currentUser, { displayName: name,  phoneNumber: phoneNumber })
    }
    // observe user state and get user data 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])
    // sign out user 
    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {
        user,
        loading,
        googleProvider,
        createUser,
        signInwithpassword,
        signInWithSocials,
        updateUserInfo,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node //'any' if doesn't work
};
export default AuthProvider;