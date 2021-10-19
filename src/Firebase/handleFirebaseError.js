
// handle firebase errors and return understandable text
const handleFirebaseError = err => {
    console.log(err.message, err);
    let errMessage;
    if (err.message) {
        switch (err.message) {
            case "weak password": errMessage = "Password must have one number, one lowercase, one uppercase and at least 6 characters long"; break;
            case "Firebase: Error (auth/account-exists-with-different-credential).":
                errMessage = "Account Exists with this email"; break;
            case "Firebase: Error (auth/user-not-found).":
                errMessage = "User not found!"; break;
            case "Firebase: Error (auth/wrong-password).":
                errMessage = "Password doesn't matched"; break;
            case "Firebase: Error (auth/invalid-email).":
                errMessage = "Invalid Email..!"; break;
            default: errMessage = "Error!"; break;
        }
    }
    else if (err === "Firebase: Error (auth/email-already-in-use).") {
        errMessage = "Account exists with this email!";
    }

    return errMessage;
};

export default handleFirebaseError;