import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../Utils/Validation/validators";
import {Link} from "react-router-dom";
import s from "./SignInForm.module.css"
let maxLength = maxLengthCreator(10)
function SignInForm(props) {
    return (<div>
        <div className={s.center}>
            <h1>Sign In</h1>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div><Field placeholder={'name'} name={'name'} component={Input} validate={[required,maxLength]}/></div>
                    <div><Field placeholder={'surname'} name={'surname'} component={Input} validate={[required,maxLength]}/></div>
                    <div><Field placeholder={'login'} name={'login'} component={Input} validate={[required,maxLength]}/></div>
                    <div><Field placeholder={'password'} name={'password'} component={Input} validate={[required,maxLength]}/></div>
                    <div><Field placeholder={'check password'} name={'check password'} component={Input} validate={[required,maxLength]}/></div>
                    <button>Sign In</button>
                    <Link to="/"><button>Back Login</button></Link>
                </form>
            </div>
        </div>
    </div>)
}

export default reduxForm({form:'signIn'})(SignInForm)