import { signInWithEmailAndPassword } from "firebase/auth";

export default function signInEmail(auth, email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}