(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-retrieve_password-index"],{"442c":function(t,e,i){"use strict";i.r(e);var a=i("7931"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"6a7f":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"register absolute"},[i("v-uni-view",{staticClass:"shading"},[i("v-uni-view",{staticClass:"pictrue acea-row row-center-wrapper"},[i("v-uni-image",{attrs:{src:"/static/images/logo2.png"}})],1)],1),i("v-uni-view",{staticClass:"whiteBg"},[i("v-uni-view",{staticClass:"title"},[t._v("找回密码")]),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-image",{attrs:{src:"/static/images/phone_1.png"}}),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"输入手机号码","placeholder-class":"placeholder"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"align-left acea-row row-middle"},[i("v-uni-image",{attrs:{src:"/static/images/code_2.png"}}),i("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码","placeholder-class":"placeholder"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),i("v-uni-button",{staticClass:"code",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-image",{attrs:{src:"/static/images/code_1.png"}}),i("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"填写您的登录密码","placeholder-class":"placeholder"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),i("v-uni-view",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.registerReset.apply(void 0,arguments)}}},[t._v("确认")]),i("v-uni-navigator",{staticClass:"tip",attrs:{url:"/pages/users/login/index"}},[i("v-uni-text",{staticClass:"font-color"},[t._v("立即登录")])],1)],1),i("v-uni-view",{staticClass:"bottom"})],1)},n=[]},7931:function(t,e,i){"use strict";(function(t){var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var s=a(i("1da1")),n=a(i("8790")),c=i("7de8"),r={data:function(){return{account:"",password:"",captcha:""}},mixins:[n.default],methods:{registerReset:function(){var t=this;return t.account?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.account)?t.captcha?/^[\w\d]+$/i.test(t.captcha)?t.password?/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/i.test(t.password)?void(0,c.registerReset)({account:t.account,captcha:t.captcha,password:t.password}).then((function(e){t.$util.Tips({title:e.msg,success:function(){uni.navigateTo({url:"/pages/login/index"})}})})).catch((function(e){t.$util.Tips({title:e.msg})})):t.$util.Tips({title:"您输入的密码过于简单"}):t.$util.Tips({title:"请填写密码"}):t.$util.Tips({title:"请输入正确的验证码"}):t.$util.Tips({title:"请填写验证码"}):t.$util.Tips({title:"请输入正确的手机号码"}):t.$util.Tips({title:"请填写手机号码"})},code:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t,i.account){e.next=3;break}return e.abrupt("return",i.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.account)){e.next=5;break}return e.abrupt("return",i.$util.Tips({title:"请输入正确的手机号码"}));case 5:(0,c.registerVerify)({phone:i.account}).then((function(t){i.$util.Tips({title:t.msg}),i.sendCode()})).catch((function(t){i.$util.Tips({title:t})}));case 6:case"end":return e.stop()}}),e)})))()}}};e.default=r}).call(this,i("5a52")["default"])},8790:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var i=setInterval((function(){e-=1,e<0&&clearInterval(i),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=a},9405:function(t,e,i){"use strict";i.r(e);var a=i("6a7f"),s=i("442c");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);var c,r=i("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"37dd4079",null,!1,a["a"],c);e["default"]=u.exports}}]);