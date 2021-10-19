
// validate password using regular expression
const passwordValidator = (password) => {
    const validator = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$");
    return validator.test(password);
};

export default passwordValidator;