(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-medicalCard-bindCard-bindCard"],{"3b6c":function(t,e,i){"use strict";i.r(e);var n=i("73bb"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"73bb":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("3de1"),o=i("7ded"),s=i("f9d8"),d=i("ca00"),r=n(i("f121")),u=n(i("4b4e")),c=i("c24f"),l={data:function(){return{hosptail:r.default.currentApps.hospName,name:"",idCard:"",phone:"",code:"",disableIdCard:!1,timeDown:!1,countDownTime:60,userIdCard:"",isSubmitFlag:!1,isVerfyFocus:!1,submitAjaxFlag:!1,registerPhone:"",showCode:!1}},components:{CustomModal:u.default},computed:{scaleFontSize:function(){return this.$store.state.scaleFontSize}},watch:{isSubmitFlag:function(){this.isSubmitFlag?a.native.showLoading():a.native.hideLoading()}},onLoad:function(t){this.sensitiveInfo();var e=JSON.parse(uni.getStorageSync("onlineUser"));e.currentUser.idCard&&(console.log("用户信息",e.currentUser),this.idCard=e.currentUser.idCard,this.disableIdCard=!0),e.currentUser.name&&(this.name=e.currentUser.name)},methods:{limitBlank:function(t,e){var i=this;setTimeout((function(){i[e]=(0,a.limitBlank)(t),"phone"==e&&(i.phone!=i.registerPhone?i.showCode=!0:i.showCode=!1)}),100)},sensitiveInfo:function(){var t=this,e=JSON.parse(uni.getStorageSync("onlineUser")).currentUser.pid;(0,c.sensitiveInfo)({pid:e}).then((function(e){if("000"==e.errorCode){var i=JSON.parse((0,d.decodeEncrypt)(e.entity));console.log(i),t.userIdCard=i.idCard,t.phone=i.phone,t.registerPhone=i.phone}else a.native.toast(e.message)}))},getVerifyCodeCallFun:function(){var t=this,e={phone:this.phone,type:"70001"};(0,o.sendCode)(e).then((function(e){"000"==e.errorCode?(t.timeDown=!0,t.startTimeDown(),t.isVerfyFocus=!0,e.entity.code&&(t.code=e.entity.code)):a.native.toast(e.message)}))},checkSmsCode:function(){var t=this,e={phone:this.phone,code:this.code,type:"70001"};(0,o.checkCode)(e).then((function(e){"000"==e.errorCode?t.syncCard():a.native.toast(e.message)}))},getCode:function(){this.idCard?this.phone?(0,a.isPhone)(this.phone)?(0,a.isIdCard)(this.idCard)||this.disableIdCard?this.getVerifyCodeCallFun():a.native.toast("身份证格式不正确!"):a.native.toast("手机号格式不正确!"):a.native.toast("手机号不能为空!"):a.native.toast("身份证号不能为空!")},startTimeDown:function(){this.countDownTime=this.countDownTime-1,this.timer()},timer:function(){this.countDownTime>0?setTimeout(this.startTimeDown,1e3):(this.countDownTime=60,this.timeDown=!1)},bindCard:function(){if(!this.submitAjaxFlag&&!this.isSubmitFlag)return this.name?this.idCard?this.phone?this.showCode&&!this.code?(a.native.toast("验证码不能为空!"),this.isSubmitFlag=!1,!1):(0,a.isPhone)(this.phone)?(0,a.isIdCard)(this.idCard)||this.disableIdCard?void(this.showCode?this.checkSmsCode():this.syncCard()):(a.native.toast("身份证格式不正确!"),this.isSubmitFlag=!1,!1):(a.native.toast("手机号格式不正确!"),this.isSubmitFlag=!1,!1):(a.native.toast("手机号不能为空!"),this.isSubmitFlag=!1,!1):(a.native.toast("身份证号不能为空!"),this.isSubmitFlag=!1,!1):(a.native.toast("姓名不能为空!"),this.isSubmitFlag=!1,!1)},syncCard:function(){var t=this,e={name:this.name,idcard:this.disableIdCard?this.userIdCard:this.idCard,phone:this.phone};this.submitAjaxFlag=!0,(0,s.syncPatientCard)(e).then((function(e){console.log("--------------------**",e),"000"==e.errorCode?a.native.toast("添加成功"):a.native.toast("暂无新的就诊卡"),setTimeout((function(){t.submitAjaxFlag=!1,a.native.goback(-1)}),2500)})).finally((function(){}))}}};e.default=l},"8a6a":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".scrollHeight[data-v-6b9f95e8]{position:absolute;right:0;left:0;top:0;bottom:0;height:calc(100% - 2.66667vw)}.remindTips[data-v-6b9f95e8]{background:#fffbf7;width:100%;padding:2.66667vw 4vw;font-weight:400;color:#ff8315;font-size:3.73333rem}.input-content[data-v-6b9f95e8]{margin:4vw;background:#fff;border-radius:2.66667vw;padding:0 4vw}.input-content>uni-view[data-v-6b9f95e8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #f5f5f5;padding:3.46667vw 0}.input-content>uni-view[data-v-6b9f95e8] :nth-last-child(1){border-bottom:none}.input-content>uni-view uni-input[data-v-6b9f95e8]{width:70%;text-align:right;height:6.66667vw;color:#666}.codeInput[data-v-6b9f95e8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.codeInput uni-input[data-v-6b9f95e8]{width:calc(100% - 48vw)!important;text-align:left!important}.codeButton[data-v-6b9f95e8],.downTimeButton[data-v-6b9f95e8]{width:25.33333vw;height:9.33333vw;border-radius:4.66667vw;text-align:center;line-height:9.33333vw;font-size:3.73333rem;color:#fff}.codeButton[data-v-6b9f95e8]{background:#846bff}.downTimeButton[data-v-6b9f95e8]{background:#999}.bottom-tips[data-v-6b9f95e8]{padding:0 4vw;font-weight:400;color:#666;font-size:3.2rem}.bindButton[data-v-6b9f95e8]{width:53.33333vw;height:12vw;background:#846bff;border-radius:6.13333vw;font-size:4.8rem;font-weight:400;color:#fff;text-align:center;line-height:12vw;margin:0 auto;margin-top:8vw}@media (orientation:landscape){.scrollHeight[data-v-6b9f95e8]{height:calc(100% - 3.52113rem)}.remindTips[data-v-6b9f95e8]{padding:3.52113rem 5.28169rem;font-size:4.92958rem}.input-content[data-v-6b9f95e8]{margin:5.28169rem;border-radius:3.52113rem;padding:0 5.28169rem}.input-content>uni-view[data-v-6b9f95e8]{border-bottom:%?1?% solid #f5f5f5;padding:4.57746rem 0}.input-content>uni-view uni-input[data-v-6b9f95e8]{height:8.80282rem}.codeInput uni-input[data-v-6b9f95e8]{width:calc(100% - 63.38028rem)!important}.codeButton[data-v-6b9f95e8],.downTimeButton[data-v-6b9f95e8]{width:33.4507rem;height:12.32394rem;border-radius:6.16197rem;line-height:12.32394rem;font-size:4.92958rem}.bottom-tips[data-v-6b9f95e8]{padding:0 5.28169rem;font-size:4.22535rem}.bindButton[data-v-6b9f95e8]{width:70.42254rem;height:15.84507rem;border-radius:8.09859rem;font-size:6.33803rem;line-height:15.84507rem;margin-top:10.56338rem}}",""])},"9d4b":function(t,e,i){"use strict";var n=i("e22b"),a=i.n(n);a.a},c2ab:function(t,e,i){"use strict";i.r(e);var n=i("cd26"),a=i("3b6c");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9d4b");var s,d=i("f0c5"),r=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"6b9f95e8",null,!1,n["a"],s);e["default"]=r.exports},cd26:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={pageMeta:i("6d42").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-meta",{attrs:{"root-font-size":t.scaleFontSize+"px"}}),i("v-uni-view",{staticClass:"page"},[i("v-uni-scroll-view",{staticClass:"scrollHeight",attrs:{"scroll-with-animation":!0,"scroll-y":!0}},[i("v-uni-view",{staticClass:"remindTips"},[t._v("暂无就诊卡，请先确认以下信息同步您在"+t._s(t.hosptail)+"办理过的就诊卡")]),i("v-uni-view",{staticClass:"input-content"},[i("v-uni-view",[i("v-uni-view",{staticClass:"fz-32 c-222"},[t._v("姓名")]),i("v-uni-input",{attrs:{"placeholder-style":"color:#AFB2B9"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.limitBlank(e,"name")}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"fz-32 c-222"},[t._v("身份证号")]),i("v-uni-input",{attrs:{disabled:t.disableIdCard,"placeholder-style":"color:#AFB2B9"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.limitBlank(e,"idCard")}},model:{value:t.idCard,callback:function(e){t.idCard=e},expression:"idCard"}})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"fz-32 c-222"},[t._v("联系电话")]),i("v-uni-input",{attrs:{"placeholder-style":"color:#AFB2B9"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.limitBlank(e,"phone")}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t.showCode?i("v-uni-view",{staticClass:"codeInput"},[i("v-uni-view",{staticClass:"fz-32 c-222"},[t._v("验证码")]),i("v-uni-input",{attrs:{"placeholder-style":"color:#AFB2B9",placeholder:"请输入验证码",focus:t.isVerfyFocus},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.limitBlank(e,"code")}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t.timeDown?i("v-uni-view",{staticClass:"downTimeButton"},[t._v(t._s(t.countDownTime)+"s")]):i("v-uni-view",{staticClass:"codeButton",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v("获取验证码")])],1):t._e()],1),i("v-uni-view",{staticClass:"bottom-tips"},[t._v("提示：请输入您在医院就诊时使用的手机号，若办卡时未预留手机号或需要修改手机号，可凭个人身份证和就诊卡到院内服务窗口进行补充登记或修改。")]),i("v-uni-view",{staticClass:"bindButton",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindCard.apply(void 0,arguments)}}},[t._v("绑定")])],1)],1),i("CustomModal",{ref:"myCustomModal"})],1)},o=[]},e22b:function(t,e,i){var n=i("8a6a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("52752a93",n,!0,{sourceMap:!1,shadowMode:!1})},f9d8:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.syncPatientCard=e.removePatientCard=e.listPatientCard=e.addPatientCard=void 0;var a=n(i("b775")),o=function(t){return(0,a.default)({url:"/api/patient/card/add",data:t,method:"post"})};e.addPatientCard=o;var s=function(t,e){return(0,a.default)({url:"/api/patient/card/list?hospitalCode="+t,isLogin:e,method:"get"})};e.listPatientCard=s;var d=function(t){return(0,a.default)({url:"/api/patient/card/remove",data:t,method:"post"})};e.removePatientCard=d;var r=function(t){return(0,a.default)({url:"/api/patient/card/sync",data:t,method:"post"})};e.syncPatientCard=r}}]);