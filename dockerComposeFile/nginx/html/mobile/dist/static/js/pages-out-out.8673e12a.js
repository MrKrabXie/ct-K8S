(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-out-out"],{"062e":function(e,t,o){"use strict";var a=o("8a56"),n=o.n(a);n.a},"8a56":function(e,t,o){var a=o("c49a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=o("4f06").default;n("13fb82fb",a,!0,{sourceMap:!1,shadowMode:!1})},ba2f:function(e,t,o){"use strict";o.r(t);var a=o("f241"),n=o("c768");for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);o("062e");var s,r=o("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"7408046c",null,!1,a["a"],s);t["default"]=c.exports},c49a:function(e,t,o){t=e.exports=o("24fb")(!1),t.push([e.i,"",""])},c768:function(e,t,o){"use strict";o.r(t);var a=o("e4b3"),n=o.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},e4b3:function(e,t,o){"use strict";var a=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o("3de1"),i=o("ca00"),s=a(o("4b4e")),r=(o("b379"),a(o("f121"))),c={data:function(){return{url:"",isShow:!1,num:"",isReloadEducation:!1,isNativeBack:!1,isShowIframe:!0,orgWindowHistoryLen:0}},onLoad:function(e){var t=this;document.body.classList.add("noHeader"),n.native.setNavTitle(document.title),this.orgWindowHistoryLen=window.history.length,e&&(e.from&&"sm"==e.from&&(this.isFromSm=!0),this.optionsObj=e),console.log("app.globalData.hasCallAutoLogin",(0,n.getStorage)("hasCallAutoLogin")),(0,n.getStorage)("hasCallAutoLogin"),this.getLoadFun(),window.addEventListener("message",(function(e){var o=e.data,a=o.sendUrl,i=window.history.length-t.orgWindowHistoryLen+1;console.log("window.history.length",window.history.length,t.orgWindowHistoryLen,i),console.log("this.$router.history",t.$router.history),i=i<=0?1:i,a&&("-1"!=a||t.isNativeBack?t.isNativeBack||t.hideIframe((function(){setTimeout((function(){n.native.goback(!1,0,i,(function(){n.native.go("",a)}))}),10)})):t.hideIframe((function(){setTimeout((function(){n.native.goback(!1,0,i)}),10)})))}),!1)},computed:{scaleFontSize:function(){return this.$store.state.scaleFontSize}},onHide:function(){(0,n.setStorage)("isReloadEducation",1)},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(e){console.log("onShareAwsage",e.webViewUrl)},components:{CustomModal:s.default},methods:{hideIframe:function(e){this.isNativeBack=!0,e()},receiveSocketMsg:function(e){e.content},getLoadFun:function(){var e=this;(0,n.getStorage)("waitBackChargeId")&&(this.isShow=!0,this.num=(0,n.getStorage)("videoLineNum"));var t=this.optionsObj;t&&(this.noNeedwxInfoObj=t.noNeedwxInfoObj,t.noNeedwxInfoObj&&!r.default.isWxAPP?this.urlValue=t.link:this.handleH5Url(t));try{this.optionsObj.urljumpfromWxapp?(0,n.getStorage)("IP")?this.isToaccessTicketFun():(0,i.getClientIPv4)((function(){e.isToaccessTicketFun()})):this.callbackFun()}catch(o){console.log(o)}},handleH5Url:function(e){console.log("options.link",e.link),this.urlValue=decodeURIComponent(e.link),this.urlValue.indexOf("/education/education")>-1&&(0,n.setStorage)("isReloadEducation",0)},isToaccessTicketFun:function(){var e=this;""!=app.globalData.extraDataFromPrevWxapp?e.fromhjWxappIslogin=app.globalData.extraDataFromPrevWxapp.fromhjWxappIslogin:e.fromhjWxappIslogin="",""!=app.globalData.extraDataFromPrevWxapp?e.fromhjWxapp=app.globalData.extraDataFromPrevWxapp.fromhjWxapp:e.fromhjWxapp="",""!=app.globalData.extraDataFromPrevWxapp?e.accessTicket=app.globalData.extraDataFromPrevWxapp.accessTicket:e.accessTicket="",""!=app.globalData.extraDataFromPrevWxapp?e.phone=app.globalData.extraDataFromPrevWxapp.phone:e.phone="",e.fromhjWxapp&&0===e.fromhjWxappIslogin?((0,n.setStorage)("onlineUser",""),(0,n.setStorage)("c-token",""),uni.removeStorageSync("isScreenTestTipsPopup"),e.callbackFun()):e.fromhjWxapp&&e.fromhjWxappIslogin&&((0,n.getStorage)("onlineUser")?e.silentBind():e.accessTicketFun())},sensitiveInfo:function(e){var t=JSON.parse((0,n.getStorage)("onlineUser")).currentUser.pid;request.postJSON("patient/sensitiveInfo",{pid:t},!0,!1,(function(t){var o=t.data;o.entity;"000"==o.errorCode?e():n.native.toast(o.message,"none")}))},hideWait:function(e,t){this.handleDataset(e,t),this.setData({isShow:!1}),console.log("hideWait",this.isShow)},accessTicketFun:function(){console.log("accessTicketFun===");var e=this;uni.login({success:function(t){var o={code:t.code};app.globalData.wxCode=o.code,request.postJSON("mappa/wxma/util/code2WxMaSession",o,!0,!0,(function(t){var o=t.data;if("000"==o.errorCode){(0,n.setStorage)("openId",o.entity.openid);var a={accessTicket:e.accessTicket};request.postJSON("loginx/patient/login/accessTicket",a,!0,!0,(function(t){var o=t.data;if("000"==o.errorCode){var a=o.entity;(0,n.setStorage)("onlineUser",JSON.stringify(a)),(0,n.setStorage)("c-token",a.token),uni.removeStorageSync("isScreenTestTipsPopup"),console.log("accessTicketFun===entity",a),e.callbackFun()}else n.native.toast(o.message,"none")}))}else n.native.toast(o.message,"none")}))}})},silentBind:function(){console.log("silentBind==");var e=this;uni.login({success:function(t){console.log("wx.login--",t);var o={forceUnbund:1,code:t.code};request.postJSON("mappa/wxma/user/silentBind",o,!0,!0,(function(t){var o=t.data;console.log("silentBind--silentBind==data",o),"000"==o.errorCode?((0,n.setStorage)("onlineUser",""),(0,n.setStorage)("c-token",""),uni.removeStorageSync("isScreenTestTipsPopup"),e.accessTicketFun()):n.native.toast(o.message,"none")}))}})},callbackFun:function(){n.native.getCurrentPage();(0,n.getStorage)("waitBackChargeId")?(this.isShow=!0,this.num=(0,n.getStorage)("videoLineNum")):this.isShow=!1;var e=(0,i.getWxInfoObj)(),t="",o="";console.log("out-urlValue--0",this.urlValue),this.noNeedwxInfoObj?o=this.urlValue:(t=this.urlValue.indexOf("wxInfoObj")>-1?(0,i.subUrlParam)(this.urlValue,"wxInfoObj",JSON.stringify(e)):this.urlValue.indexOf("?")>-1?this.urlValue+"&wxInfoObj="+JSON.stringify(e):this.urlValue+"?wxInfoObj="+JSON.stringify(e),o=t),this.isFromSm&&(o=this.urlAddParams(urlAddParams,"from=sm")),this.url=o},urlAddParams:function(e,t){return e=e.indexOf("?")>-1?e+"&"+t:e+"?"+t,e}}};t.default=c},f241:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return a}));var a={pageMeta:o("6d42").default},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("page-meta",{attrs:{"root-font-size":e.scaleFontSize+"px"}}),o("v-uni-web-view",{ref:"myIframe",staticClass:"myWebView",attrs:{src:e.url,"update-title":!0}},[o("CustomModal",{ref:"myCustomModal"})],1)],1)},i=[]}}]);