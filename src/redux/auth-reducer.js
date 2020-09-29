import React from 'react';
import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import { getUserProfile } from './profile-reducer';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const ZERO_STATE = 'ZERO_STATE';

let usersState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null,
    myData: null
};


const authReducer = (state = usersState, action) => {
    switch (action.type) {
        case ZERO_STATE: 
            return usersState;
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_MY_PROFILE: {
            return {...state, myData: action.myProfile}
        }
        default:
            return state;
    }
};

export const zeroState = () =>({ type: ZERO_STATE})
export const zeroStateThunk = () => (dispatch) => {
    dispatch(zeroState())
}
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
                dispatch(getMyProfileData(id))
            }
};

//myProfile
export const setMyProfileData = (myProfile) => ({type: SET_MY_PROFILE, myProfile})
export const getMyProfileData = (myId) => async (dispatch) => {
    let response = await profileAPI.getProfile(myId);
        if(response.data) {
            dispatch(setMyProfileData(response.data.photos));
        }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if(response.data.resultCode === 10){
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
};

export const getCaptchaUrl = () => async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
        dispatch(zeroStateThunk())
};


export default authReducer;