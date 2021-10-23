import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../Utils/Validation/validators"
import {Input} from "../../Common/FormControls/FormControls";
import style from "./LoginForm.module.css"
const maxLength = maxLengthCreator(10)
const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className={style.inp}>
                    <Field name={'login'} placeholder={"login"} component={Input}
                           validate={[required, maxLength]}/>
                </div>
                <div className={style.inp}>
                    <Field name={'password'} placeholder={"password"} component={Input}
                           validate={[required, maxLength]}/></div>
                <div><Field type={"checkbox"} component={Input} name={'rememberMe'}/> Remember Me</div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default reduxForm({form: 'login'})(LoginForm)