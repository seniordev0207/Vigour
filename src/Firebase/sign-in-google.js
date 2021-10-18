import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signInGoogle = auth => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};

export default signInGoogle;

