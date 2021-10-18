import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/initialize-firebase";
import signInEmail from "../Firebase/sign-in-email";
import signInGoogle from "../Firebase/sign-in-google";
import signUpEmail from "../Firebase/sign-up-email";

initializeFirebase();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => user && setError(null), [user])

    onAuthStateChanged(auth, newUser => {
        newUser ? setUser(newUser) : user && setUser(null);
    })

    const googleLogin = () => signInGoogle(auth).catch(err => setError(err));
    const emailSignUp = (name, email, password) => signUpEmail(auth, name, email, password).catch(err => setError(err));
    const emailLogin = (email, password) => signInEmail(auth, email, password).catch(err => setError(err));
    const logout = () => signOut(auth).catch(err => setError(err));

    return {
        auth, user, setUser, googleLogin, emailSignUp, emailLogin,
        logout, error, setError
    }
};

export default useFirebase;