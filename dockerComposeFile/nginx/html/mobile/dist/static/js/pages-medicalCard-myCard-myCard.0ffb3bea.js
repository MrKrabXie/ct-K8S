(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-medicalCard-myCard-myCard"],{"0285":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var i={pageMeta:e("6d42").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("page-meta",{attrs:{"root-font-size":t.scaleFontSize+"px"}}),e("v-uni-view",{staticClass:"page"},[e("v-uni-scroll-view",{staticClass:"scrollHeight",attrs:{"scroll-with-animation":!0,"scroll-y":!0}},[t.isSubmitConsultInfo?e("v-uni-view",{staticClass:"commonTopTips"},[t._v("请选择您上次在本院“"+t._s(t.docDeptName)+"”就诊时使用的就诊卡")]):t._e(),null!=t.socialCardList&&null!=t.medicalCard&&(t.medicalCard.length||t.socialCardList.length)?t._l(2,(function(a,i){return 0==i&&t.socialCardList.length||1==i&&t.medicalCard.length?e("v-uni-view",{key:i,staticClass:"cardList"},[e("v-uni-view",{staticClass:"card-title"},[t._v(t._s(0==i?"社保卡":"医院就诊卡"))]),t._l(1==i?t.medicalCard:t.socialCardList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cardItem",class:[0==i?"socialCardItem":"medicalCardItem",a.isMove?"slide":""],on:{touchstart:function(a){arguments[0]=a=t.$handleEvent(a),t.touchstart(a,i)},touchmove:function(a){arguments[0]=a=t.$handleEvent(a),t.touchmove(a,n,i)}}},[e("v-uni-view",{staticClass:"user_info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isSubmitConsultInfo&&t.handleChooseCardItem(a)}}},[e("v-uni-view",[e("i",{staticClass:"icon",class:0==i?"icon-socialCard":"icon-medicalCard"})]),e("v-uni-view",{staticClass:"user_info-content",style:t.isSubmitConsultInfo?"width:calc(100% - 100px)":""},[e("v-uni-view",{staticClass:"fz-36"},[t._v(t._s(a.name))]),1==i?e("v-uni-view",{staticClass:"fz-28 c-999 line1"},[t._v("医院："+t._s(a.hospitalName))]):t._e(),e("v-uni-view",{staticClass:"fz-28"},[t._v("卡号："+t._s(a.number))])],1),t.isSubmitConsultInfo?e("i",{staticClass:"icon icon-radio",class:a.id==t.chooseCardItem.id?"checked":""}):t._e()],1),e("v-uni-view",{staticClass:"del_btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.delCard(i,n)}}},[e("i",{staticClass:"icon icon-delete"})])],1)}))],2):t._e()})):null!=t.socialCardList&&null!=t.medicalCard?[e("Empty",{attrs:{tips:"暂无就诊卡",iconName:"icon-noCard"}})]:t._e(),e("v-uni-view",{staticClass:"buttonList",class:t.medicalCard&&!t.medicalCard.length&&t.socialCardList&&!t.socialCardList.length?"flex-center":""},[e("v-uni-view",{staticClass:"addButton",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goBindCard.apply(void 0,arguments)}}},[e("i",{staticClass:"icon icon-add"}),t._v("同步就诊卡")])],1)],2)],1),e("CustomModal",{ref:"myCustomModal"})],1)},r=[]},"1a2b":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"emptyBox",class:t.absMiddleFlag?"absMiddleEmptyBox":""},[e("i",{staticClass:"iconL",class:t.iconName?t.iconName:"icon-empty"}),t.h1Tips?e("v-uni-view",{staticClass:"fz-36"},[t._v(t._s(t.h1Tips))]):t._e(),e("v-uni-view",[t._v(t._s(t.tips?t.tips:"暂无数据"))])],1)},r=[]},"3e9a":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("ac6a");var n=e("3de1"),r=e("f9d8"),o=i(e("f121")),s=i(e("4b4e")),d=i(e("b800")),c={data:function(){return{socialCardList:null,medicalCard:null,startX:0,startY:0,mStartX:0,mStartY:0,isSubmitConsultInfo:!1,docDeptName:"",chooseCardItem:""}},components:{CustomModal:s.default,Empty:d.default},computed:{scaleFontSize:function(){return this.$store.state.scaleFontSize}},onShow:function(){this.getCardList()},onLoad:function(t){this.isSubmitConsultInfo=t.isSubmitConsultInfo,this.docDeptName=t.deptName,this.isSubmitConsultInfo&&n.native.setNavTitle("选择就诊卡")},methods:{getCardList:function(){var t=this;(0,r.listPatientCard)(o.default.currentApps.currentHospid,!0).then((function(a){"000"==a.errorCode&&(t.socialCardList=a.entity.s,t.medicalCard=a.entity.p,t.socialCardList.forEach((function(t){t.isMove=!1})),t.medicalCard.forEach((function(t){t.isMove=!1})),t.isSubmitConsultInfo&&(t.socialCardList.length||t.medicalCard.length?n.native.modal({title:"请选择您上次在本院“"+t.docDeptName+"”就诊时使用的就诊卡",showCancel:!1,confirmText:"知道了",content:""}):n.native.modal({title:"暂无就诊卡，请根据提示绑定就诊卡",showCancel:!1,confirmText:"知道了",content:""})))})).finally((function(){t.socialCardList=t.socialCardList||[],t.medicalCard=t.medicalCard||[]}))},touchstart:function(t,a){this.socialCardList.forEach((function(t){t.isMove=!1})),this.medicalCard.forEach((function(t){t.isMove=!1})),0==a?(this.startX=t.changedTouches[0].clientX,this.startY=t.changedTouches[0].clientY):1==a&&(this.mStartX=t.changedTouches[0].clientX,this.mStartY=t.changedTouches[0].clientY)},touchmove:function(t,a,e){var i=this;if(!this.isSubmitConsultInfo)if(0==e){var n=this.angle({X:this.startX,Y:this.startY},{X:t.changedTouches[0].clientX,Y:t.changedTouches[0].clientY});if(Math.abs(n)>30)return;this.socialCardList.forEach((function(e,n){e.isMove=!1,n==a&&t.changedTouches[0].clientX<i.startX?e.isMove=!0:e.isMove=!1})),this.$forceUpdate()}else 1==e&&this.mTouchmove(t,a)},mTouchmove:function(t,a){var e=this,i=this.angle({X:this.mStartX,Y:this.mStartY},{X:t.changedTouches[0].clientX,Y:t.changedTouches[0].clientY});Math.abs(i)>30||(this.medicalCard.forEach((function(i,n){i.isMove=!1,n==a&&t.changedTouches[0].clientX<e.mStartX?i.isMove=!0:i.isMove=!1})),this.$forceUpdate())},delCard:function(t,a){var e=this,i="";i=1==t?this.medicalCard[a].id:this.socialCardList[a].id,n.native.modal({title:"确实删除该卡？",cancelText:"取消",confirmText:"确定",content:"",success:function(){(0,r.removePatientCard)({id:i}).then((function(t){"000"==t.errorCode?(n.native.toast("删除成功"),e.getCardList()):n.native.toast(t.message)}))}})},goBindCard:function(){n.native.go("/pages/medicalCard/bindCard/bindCard","/bindCard")},angle:function(t,a){var e=a.X-t.X,i=a.Y-t.Y;return 360*Math.atan(i/e)/(2*Math.PI)},handleChooseCardItem:function(t){this.chooseCardItem=t,n.native.goback(0,1,0,(function(){var a=getCurrentPages().pop();void 0!=a&&null!=a&&(a.$vm.chooseCardItem=t)}))}}};a.default=c},5633:function(t,a,e){"use strict";e.r(a);var i=e("0285"),n=e("5d23");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("9aa4");var o,s=e("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"14bf12b7",null,!1,i["a"],o);a["default"]=d.exports},"58f8":function(t,a,e){"use strict";var i=e("ce0e"),n=e.n(i);n.a},"5d23":function(t,a,e){"use strict";e.r(a);var i=e("3e9a"),n=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},7457:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"popup",data:function(){return{}},props:["h1Tips","tips","absMiddleFlag","iconName"]};a.default=i},"8a80":function(t,a,e){a=t.exports=e("24fb")(!1),a.push([t.i,".emptyBox[data-v-342b73f4]{text-align:center;font-size:4rem;color:#666}.emptyBox.absMiddleEmptyBox[data-v-342b73f4]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%)}.emptyBox>uni-view[data-v-342b73f4]{color:#666;margin-top:2.66667vw;padding-bottom:2.66667vw}@media (orientation:landscape){.emptyBox[data-v-342b73f4]{font-size:5.28169rem}.emptyBox>uni-view[data-v-342b73f4]{margin-top:3.52113rem;padding-bottom:3.52113rem}}",""])},"9aa4":function(t,a,e){"use strict";var i=e("bbe8"),n=e.n(i);n.a},"9adc":function(t,a,e){"use strict";e.r(a);var i=e("7457"),n=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},a225:function(t,a,e){a=t.exports=e("24fb")(!1),a.push([t.i,'.page[data-v-14bf12b7]{background:#fff!important;height:100%}.cardItem[data-v-14bf12b7]{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;padding-left:4vw;margin-right:4vw;margin-bottom:2.66667vw;border-radius:2.66667vw;position:relative}.cardItem .user_info[data-v-14bf12b7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:5.33333vw 4vw;width:100%;transform:translateX(17.33333vw);-webkit-transform:translateX(17.33333vw);margin-left:-17.33333vw;transition:all .4s;-webkit-transition:all .4s;border-radius:2.66667vw}.cardItem .user_info .icon-radio[data-v-14bf12b7]{position:absolute;right:4vw;top:50%;margin-top:-14px}.cardItem .del_btn[data-v-14bf12b7]{width:17.33333vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f05656;transition:all .4s;-webkit-transition:all .4s;transform:translateX(17.33333vw);-webkit-transform:translateX(17.33333vw)}.scrollHeight[data-v-14bf12b7]{position:absolute;right:0;left:0;top:0;bottom:0;height:calc(100% - 2.66667vw)}.socialCardItem .user_info[data-v-14bf12b7]{background-color:#846bff!important}.socialCardItem .user_info .user_info-content>uni-view[data-v-14bf12b7]{color:#fff}.medicalCardItem .user_info[data-v-14bf12b7]{background-color:#f9f9f9!important;color:#222!important}.slide[data-v-14bf12b7]{border-radius:0 2.66667vw 2.66667vw 0!important}.slide .user_info[data-v-14bf12b7],.slide .del_btn[data-v-14bf12b7]{-webkit-transform:translateX(%?0?%);transform:translateX(%?0?%)}.slide .user_info[data-v-14bf12b7]{border-radius:2.66667vw}.cardItem[data-v-14bf12b7]::before{content:"";width:24vw;height:100%;background-color:#f05656;position:absolute;right:2.4vw;top:0}.card-title[data-v-14bf12b7]{padding:3.33333vw 4vw;color:#222;font-size:4.8rem;font-weight:500}.user_info-content[data-v-14bf12b7]{margin-left:4vw}.user_info-content>uni-view[data-v-14bf12b7]{margin-bottom:1.33333vw}.user_info-content>uni-view[data-v-14bf12b7] :nth-last-child(1){margin-bottom:%?0?%!important}.buttonList[data-v-14bf12b7]{padding-top:8vw}.addButton[data-v-14bf12b7]{width:53.33333vw;height:12vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#846bff;border-radius:6.13333vw;text-align:center;line-height:12vw;color:#fff;font-size:4.8rem;margin:0 auto}.addButton .icon-add[data-v-14bf12b7]{margin-right:1.33333vw}@media (orientation:landscape){.cardItem[data-v-14bf12b7]{padding-left:5.28169rem;margin-right:5.28169rem;margin-bottom:3.52113rem;border-radius:3.52113rem}.cardItem .user_info[data-v-14bf12b7]{padding:7.04225rem 5.28169rem;transform:translateX(22.88732rem);-webkit-transform:translateX(22.88732rem);margin-left:-22.88732rem;border-radius:3.52113rem}.cardItem .user_info .icon-radio[data-v-14bf12b7]{right:5.28169rem}.cardItem .del_btn[data-v-14bf12b7]{width:22.88732rem;transform:translateX(22.88732rem);-webkit-transform:translateX(22.88732rem)}.scrollHeight[data-v-14bf12b7]{height:calc(100% - 3.52113rem)}.slide[data-v-14bf12b7]{border-radius:0 3.52113rem 3.52113rem 0!important}.slide .user_info[data-v-14bf12b7],.slide .del_btn[data-v-14bf12b7]{-webkit-transform:translateX(%?0?%);transform:translateX(%?0?%)}.slide .user_info[data-v-14bf12b7]{border-radius:3.52113rem}.cardItem[data-v-14bf12b7]::before{width:31.69014rem;right:3.16901rem}.card-title[data-v-14bf12b7]{padding:4.40141rem 5.28169rem;font-size:6.33803rem}.user_info-content[data-v-14bf12b7]{margin-left:5.28169rem}.user_info-content>uni-view[data-v-14bf12b7]{margin-bottom:1.76056rem}.user_info-content>uni-view[data-v-14bf12b7] :nth-last-child(1){margin-bottom:%?0?%!important}.buttonList[data-v-14bf12b7]{padding-top:10.56338rem}.addButton[data-v-14bf12b7]{width:70.42254rem;height:15.84507rem;border-radius:8.09859rem;line-height:15.84507rem;font-size:6.33803rem}.addButton .icon-add[data-v-14bf12b7]{margin-right:1.76056rem}}',""])},b800:function(t,a,e){"use strict";e.r(a);var i=e("1a2b"),n=e("9adc");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("58f8");var o,s=e("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"342b73f4",null,!1,i["a"],o);a["default"]=d.exports},bbe8:function(t,a,e){var i=e("a225");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6743fa39",i,!0,{sourceMap:!1,shadowMode:!1})},ce0e:function(t,a,e){var i=e("8a80");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("162c61ba",i,!0,{sourceMap:!1,shadowMode:!1})},f9d8:function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.syncPatientCard=a.removePatientCard=a.listPatientCard=a.addPatientCard=void 0;var n=i(e("b775")),r=function(t){return(0,n.default)({url:"/api/patient/card/add",data:t,method:"post"})};a.addPatientCard=r;var o=function(t,a){return(0,n.default)({url:"/api/patient/card/list?hospitalCode="+t,isLogin:a,method:"get"})};a.listPatientCard=o;var s=function(t){return(0,n.default)({url:"/api/patient/card/remove",data:t,method:"post"})};a.removePatientCard=s;var d=function(t){return(0,n.default)({url:"/api/patient/card/sync",data:t,method:"post"})};a.syncPatientCard=d}}]);