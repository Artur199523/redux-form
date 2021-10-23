import Login from "../States/Login";

function LoginReducer(state = Login, action) {
    let temp = {...state};

    switch (action.type) {
        case "login":
            temp.form.signIn.login = action.data.login;
            temp.form.signIn.password = action.data.password;
            break
    }
    return temp
}

export default LoginReducer