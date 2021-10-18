import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { useState } from "react";
import initializeFirebase from "../Firebase/initialize-firebase";
import signInGoogle from "../Firebase/sign-in-google";

initializeFirebase();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    console.log(user, error);

    onAuthStateChanged(auth, newUser => {
        newUser ? setUser(newUser) : user && setUser(null);
    })

    const googleLogin = () => signInGoogle(auth).catch(err => setError(err));
    const logout = () => signOut(auth).catch(err => setError(err));

    return {
        auth, user, setUser, googleLogin, logout
    }
};

export default useFirebase;