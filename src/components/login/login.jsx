import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FromsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FromsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form className={s.formControl} onSubmit={handleSubmit}>
            <ul className={s.form}>
                <li>
                    <h1>ВХОД</h1>
                </li>
                <li>
                    <Field className={s.input} placeholder={"Email"}
                           name={"email"}
                           component={Input}
                           validate={[required]}/>
                </li>
                <li>
                    <Field className={s.input} placeholder={"Пароль"}
                           name={"password"}
                           type={"password"}
                           component={Input}
                           validate={[required]}/>
                </li>
                <li className={s.rememberMe}>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
                    <div className={s.word}>
                        Remember me
                    </div>
                </li>
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
                <li>
                    <button className={s.button}>Войти</button>
                </li>
            </ul>
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);