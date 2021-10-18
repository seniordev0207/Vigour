import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

export default function signInGitHub(auth) {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
}