import * as axios from "axios";
import {savePhotoSuccess} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "9844b466-56b7-4a78-a371-51d8fdf2f09e"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?Page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfile (userId) {
        console.warn ('obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)},
    follow (userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow (userId) {
        return instance.delete(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)},
    getStatus (userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus (status) {
        return instance.put('profile/status', {status})
    },
    savePhoto (photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me () { return instance.get(`auth/me`)},
    login (email,password, rememberMe = false) { return instance.post(`auth/login`, {email, password, rememberMe})},
    logout () { return instance.delete(`auth/login`)}
}