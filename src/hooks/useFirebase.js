import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/initialize-firebase";
import signInEmail from "../Firebase/sign-in-email";
import signInFB from "../Firebase/sign-in-facebook";
import signInGitHub from "../Firebase/sign-in-github";
import signInGoogle from "../Firebase/sign-in-google";
import signUpEmail from "../Firebase/sign-up-email";

// initialize firebase authentication in this website
initializeFirebase();
// get authentication Credentials
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState(null); // set user as a mutable state
    const [userLoading, setUserLoading] = useState(true); // set user loading state
    const [error, setError] = useState(null); // firebase related errors
    useEffect(() => user && setError(null), [user]); // clear error after login

    onAuthStateChanged(auth, newUser => {
        // set user every time when auth changed
        newUser ? setUser(newUser) : user && setUser(null);
        userLoading && setUserLoading(false); // clear loading state
    })

    // login or signup functions
    const facebookLogin = () => signInFB(auth).catch(err => setError(err));
    const githubLogin = () => signInGitHub(auth).catch(err => setError(err));
    const googleLogin = () => signInGoogle(auth).catch(err => setError(err));
    const emailSignUp = (name, email, password) => signUpEmail(auth, name, email, password).catch(err => setError(err));
    const emailLogin = (email, password) => signInEmail(auth, email, password).catch(err => setError(err));
    // logout function
    const logout = () => signOut(auth).catch(err => setError(err));

    // return need values from this function
    return {
        auth, user, setUser, googleLogin, githubLogin, facebookLogin,
        emailSignUp, emailLogin, logout, error, setError, userLoading
    }
};

export default useFirebase;