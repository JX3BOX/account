(function(e){function t(t){for(var r,a,s=t[0],u=t[1],i=t[2],f=0,d=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={email_verify:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://cdn.jx3box.com/static/account/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;c.push([2,"chunk-vendors","chunk-common"]),n()})({"1db0":function(e,t,n){},2:function(e,t,n){e.exports=n("dbed")},"6fee":function(e,t,n){"use strict";n("1db0")},dbed:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5c96"),c=n.n(o),a=(n("6b30"),n("c5b4"),n("0af6")),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-card",attrs:{id:"app"}},[t("el-card",{staticClass:"box-card"},[t("CardHeader"),t("main",{staticClass:"m-main"},[null==e.success?t("el-alert",{attrs:{title:"未知异常",type:"error",description:"非法请求或网络异常","show-icon":"",closable:!1}}):e._e(),1==e.success?t("el-alert",{attrs:{title:"验证成功",type:"success",description:"欢迎成为JX3BOX大家庭的正式一员:)","show-icon":"",closable:!1}}):e._e(),0==e.success?t("el-alert",{attrs:{title:"验证失败",type:"warning",description:"无效链接 或 链接已失效","show-icon":"",closable:!1}}):e._e(),t("a",{staticClass:"u-skip el-button u-button el-button--primary",attrs:{href:e.homepage}},[e._v("返回首页")])],1)],1),t("Bottom")],1)},u=[],i=(n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("9861"),n("88a7"),n("271a"),n("5494"),n("0111")),l=n("96d9"),f=n("65c2"),d={name:"Register",data:function(){return{success:null,homepage:f["__Root"],token:""}},computed:{ready:function(){return this.token}},methods:{parse:function(){var e=new URLSearchParams(document.location.search);this.token=e.get("token")},verify:function(){var e=this;Object(l["d"])({token:this.token}).then((function(t){t.data.code?e.success=!1:(e.success=!0,setTimeout((function(){location.href="/login"}),2e3))})).catch((function(t){e.success=null}))}},filters:{},mounted:function(){this.parse(),this.ready?this.verify():this.success=null},components:{CardHeader:i["a"]}},p=d,h=(n("6fee"),n("2877")),b=Object(h["a"])(p,s,u,!1,null,null,null),m=b.exports;r["default"].config.productionTip=!1,r["default"].use(c.a),r["default"].component("Bottom",a["a"]),new r["default"]({render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=email_verify.701ecd1b.js.map