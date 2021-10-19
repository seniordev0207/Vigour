import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

export default function signInFB(auth) {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
}