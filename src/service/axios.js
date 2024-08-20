import axios from "axios";
import User from "@jx3box/jx3box-common/js/user";
import { __cms } from "@jx3box/jx3box-common/data/jx3box.json";

const $ = axios.create({
    withCredentials : true,
    headers: {},
    baseURL: process.env.NODE_ENV === "production" ? __cms : "/",
});

setTimeout(() => {
    $.defaults.headers.common['user-device-fingerprint'] = User.getDeviceFingerprint();
}, 1500);

import Vue from "vue";
import { Message, Notification } from "element-ui";
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;

function installInterceptors(target){
    target['interceptors']['response'].use(
        function(response) {
            return response;
        },
        function(err) {
            // if (err.response && err.response.data) {
            //     broadcast.$message.error(`${err.response.data.msg}`);
            // } else {
            //     broadcast.$message.error("网络请求异常");
            // }
            console.log(err)
            return Promise.reject(err);
        }
    );
}
installInterceptors(axios)
installInterceptors($)

export { $, axios };
