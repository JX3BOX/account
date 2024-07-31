import { axios, $ } from "./axios";
import { __server, __cms } from "@jx3box/jx3box-common/data/jx3box.json";

function checkEmail(email) {
    return $.get("api/cms/user/account/email/valid", {
        params: {
            email: email,
        },
    });
}

function registerByEmail(data) {
    return $.post("api/cms/user/account/email/register", {
        email: data.email,
        password: data.pass,
    }, { params: { app: 'jx3box' } });
}

function loginByEmail(data) {
    return $.post("api/cms/user/account/email/login", {
        email: data.email,
        password: data.pass,
    }, { params: { app: 'jx3box' } });
    // 必须以携带模式请求
}

function verifyEmail(data) {
    return $.put("api/cms/user/account/email/active", {
        token: data.token,
    });
}

export { checkEmail, registerByEmail, loginByEmail, verifyEmail };
