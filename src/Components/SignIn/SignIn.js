
import SignInForm, {SignInReduxForm} from "../Login/SignInForm/SignInForm";
import React from "react";
const signInFormData = (formData) =>{
   console.log(formData)
}
function SignIn() {
    return (<div>
       <SignInForm onSubmit={signInFormData}/>
    </div>)
}

export default SignIn