import LoginForm from "./LoginForm/LoginForm";
import React from "react";
import s from './Login.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux"
import {connect, useSelector} from "react-redux"
import {setLogin} from "../../Redux/Actions/Login";

function Login() {
    const dispatch = useDispatch();
    const f = useSelector(state => state.login.form);

    const onSubmit = (formData) => {
        console.log(f)
        dispatch(setLogin(formData))
    }
    return (
        <div>
            <div className={s.loginCenter}>
                <h1>Login</h1>
                <LoginForm onSubmit={onSubmit}/>
                <div>
                    <button><Link to="/signIn" className={s.but}>SignIn</Link></button>
                    <div>
                        <button className="inp"><Link to="/users">Users</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(r => r)(Login)