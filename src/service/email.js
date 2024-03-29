import { axios, $ } from "./axios";
import { __server } from "@jx3box/jx3box-common/data/jx3box.json";

function checkEmail(email) {
    return axios.get(__server + "account/email/check", {
        params: {
            user_email: email,
        },
    });
}

function registerByEmail(data) {
    return axios.post(__server + "account/register/email", {
        user_email: data.email,
        user_pass: data.pass,
    });
}

function loginByEmail(data) {
    return $.post(__server + "account/login/email", {
        user_email: data.email,
        user_pass: data.pass,
        device_id: data.device_id,
    });
    // 必须以携带模式请求
}

function verifyEmail(data) {
    return axios.get(__server + "account/email/verify", {
        params : {
            uid: data.uid,
            code: data.code,
        }
    });
}

export { checkEmail, registerByEmail, loginByEmail, verifyEmail };
