(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={login_callback_wesite:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://cdn.jx3box.com/static/account/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=s;a.push([5,"chunk-vendors","chunk-common"]),n()})({"1aa8":function(t,e,n){},"472c":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5c96"),a=n.n(o),i=(n("6b30"),n("c5b4"),n("0af6")),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-card",attrs:{id:"app"}},[e("el-card",{staticClass:"box-card"},[e("CardHeader"),e("main",{staticClass:"m-main"},[e("el-alert",{attrs:{title:"登录成功",type:"success",description:"欢迎回来(#^.^#)","show-icon":"",closable:!1}}),e("a",{staticClass:"u-skip el-button u-button el-button--primary",attrs:{href:t.redirect}},[t._v(t._s(t.redirect_button))])],1)],1),e("Bottom")],1)},s=[],u=(n("caad"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("841c"),n("81b2"),n("ddb0"),n("0eb6"),n("b7ef"),n("8bd4"),n("9861"),n("88a7"),n("271a"),n("5494"),n("0111")),d=n("c9d2"),l=n("65c2"),f=(n("2ca0"),{data:function(){return{redirect:"",redirect_button:"",homepage:"/"}},mounted:function(){var t=new URLSearchParams(location.search),e=t.get("redirect");e&&sessionStorage.setItem("redirect",e),this.checkDirect()},methods:{checkDirect:function(){var t=sessionStorage.getItem("redirect");t&&t.startsWith("http")?(this.redirect=t,this.redirect_button="即将跳转"):(this.redirect=this.homepage,this.redirect_button="返回首页")},skip:function(){var t=this;this.redirect&&setTimeout((function(){location.href=decodeURIComponent(t.redirect)}),1200)}}}),p=location.host.includes("origin")?"origin":"std",b={name:"Login_Callback",mixins:[f],data:function(){return{success:null,redirect:"origin"==p?l["__OriginRoot"]:l["__Root"]}},methods:{init:function(){var t=this,e=new URLSearchParams(location.search),n=e.get("userdata");if(n){var r=JSON.parse(decodeURIComponent(escape(atob(n)))),o={token:r.token,uid:r.ID,name:null===r||void 0===r?void 0:r.display_name,avatar:(null===r||void 0===r?void 0:r.user_avatar)||""};d["a"].update(o).then((function(){t.skip()}))}}},mounted:function(){this.init()},components:{CardHeader:u["a"]}},h=b,m=(n("bab9"),n("2877")),v=Object(m["a"])(h,c,s,!1,null,null,null),g=v.exports;r["default"].config.productionTip=!1,r["default"].use(a.a),r["default"].component("Bottom",i["a"]),new r["default"]({render:function(t){return t(g)}}).$mount("#app")},5:function(t,e,n){t.exports=n("472c")},bab9:function(t,e,n){"use strict";n("1aa8")}});
//# sourceMappingURL=login_callback_wesite.e00effba.js.map