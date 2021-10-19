import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function signUpEmail(auth, name, email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(() => updateProfile(auth.currentUser, { displayName: name }));
}