import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FromsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FromsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.form}>
                <div>
                    <h1 style={{ margin: "20px 0 0 0"}}>ВХОД</h1>
                </div>
                <div className={s.login}>
                    <Field placeholder={"Email"}
                           name={"email"}
                           type={"text"}
                           component={Input}
                           validate={[required]}/>
                </div>
                <div className={s.password}>
                    <Field  placeholder={"Пароль"}
                           name={"password"}
                           type={"password"}
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    {captchaUrl && <img src={captchaUrl}/>}
                    {captchaUrl && createField("Введите символы", "captcha", [required], Input)}
                </div>
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
                    <button className={s.button}>Войти</button>
            </div>
            <div className={s.data}>
            <h1>Тестовый аккаунт: free@samuraijs.com</h1>
            <h1>Пароль: free</h1>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login);