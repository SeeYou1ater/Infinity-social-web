import React from "react";
import { Navigate } from "react-router-dom";
import { Field, InjectedFormProps } from "redux-form";
import { reduxForm } from "redux-form";
import { requiredField } from "../../../utilities/validators/validators";
import { FormControl, FormControlInputType } from "../FormControls/FormControls";
import { FormDataType } from "./ContainerLogin";
import './Login.css';

type LoginOwnPropsType = {
  isAuth: boolean
  authUserId: number | null
  captchaUrl: string | null
  onSubmit: (formData: FormDataType) => void
}

class Login extends React.Component<LoginOwnPropsType> {
  render() {
    if (this.props.isAuth) { return <Navigate to={`/profile/${this.props.authUserId}`}/>} else {
    return (
      <div className='App__login-uniform container'>
        <div className='App__login-block'>
          <h1>
            LOGIN <br /><br />

            Test login and password: <br /><br />  LOGIN: free@samuraijs.com <br /><br /> PASSWORD: free
          </h1>
          <LoginReduxForm captchaUrl={this.props.captchaUrl} onSubmit={this.props.onSubmit}/>
        </div>
      </div>
    )}
  }
}

type LoginFormOwnPropsType = {
  captchaUrl: string | null
}

type FieldType = {
  className: string
  component: React.FC<FormControlInputType>
  validate?: [(value: string) => string | undefined]
  formType: 'input'
  type: string
  name: 'login' | 'password' | 'rememberMe' | 'captcha'
  placeholder?: string
}

class LoginForm extends React.Component<InjectedFormProps<FormDataType, LoginFormOwnPropsType> & LoginFormOwnPropsType> {
  render() {
    return (
        <form onSubmit={this.props.handleSubmit} className='App__login-form' action="">
            <Field<FieldType> className='App__login-form-inputName' component={FormControl} validate={[requiredField]} formType='input' type="text" name='login' placeholder="Login"/>
            <Field<FieldType> className='App__login-form-inputPassword' component={FormControl} validate={[requiredField]} formType='input' type="password" name='password' placeholder="password"/>
            <p className="App__login-form-input-rememberMe-text">Remember me</p>
            <Field<FieldType> className='App__login-form-input-rememberMe' component={FormControl} name='rememberMe' type="checkbox" formType='input'/>
            { this.props.captchaUrl && <img src={this.props.captchaUrl} alt="" /> }
            { this.props.captchaUrl && <Field<FieldType> className='App__login-form-inputCaptcha' component={FormControl} validate={[requiredField]} formType='input' type="text" name='captcha' placeholder="enter symbols from picture"/> } 
             {this.props.error && <div className="stopSubmit-error">{this.props.error}</div> }
            <button className="App__login-form-buttonLogin green-button">Log in</button>
        </form>
    )
  }
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnPropsType>({
  form: 'login'
})(LoginForm)


export default Login;