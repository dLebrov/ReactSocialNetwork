import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "a4c5407e-c446-46f9-831c-563295f47846"}
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
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
    },
    saveProfile (profile) {
        return instance.put('profile', profile)
    }
}

export const authAPI = {
    me () { return instance.get(`auth/me`)},
    login (email,password, rememberMe = false, captcha=null) { return instance.post(`auth/login`, {email, password, rememberMe, captcha})},
    logout () { return instance.delete(`auth/login`)}
}

export const securityAPI = {
    getCaptchaUrl () { return instance.get(`security/get-captcha-url`)},
}

export const dialogsAPI = {
    getDialogs () {return instance.get(`dialogs`)},

    getAllMessages (id) {return instance.get(`dialogs/${id}/messages`)},

    startChatting (id) {return instance.put(`dialogs/${id}`)},

    sendMessage (id, message) {return instance.post(`dialogs/${id}/messages`, {body: message})}
}


