(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-doctor-list-list"],{"15b0":function(e,t,i){var r=i("ea9c");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("4f06").default;o("a46a41d2",r,!0,{sourceMap:!1,shadowMode:!1})},"322a":function(e,t,i){"use strict";var r=i("ac1b"),o=i.n(r);o.a},5933:function(e,t,i){"use strict";i.r(t);var r=i("bdb9"),o=i("e979");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("322a");var n,s=i("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"4f0651bd",null,!1,r["a"],n);t["default"]=l.exports},6355:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a481");var o=i("3de1"),a=r(i("f121")),n=i("b379"),s={data:function(){return{SERVICECODE:n.SERVICECODE,fileUrl:a.default.currentApps.fileUrl,showUnFinshedOrderPopup:!1,newDataList:[]}},props:{isBottomPopup:!1,dataList:"",isHaveFreeOrder:!1},watch:{dataList:{immediate:!0,handler:function(e){this.newDataList=JSON.parse(JSON.stringify(this.dataList))}}},methods:{imageError:function(e,t,i){var r=(0,o.getDefaultIcon)(e.doctorSex,"DOCTOR");return e[i]=r.replace(this.fileUrl,""),i&&this.$set(this.newDataList,t,e),r},goOrderDetailPage:function(e){var t={id:e.chargeId||e.id,type:"orderDetail"};o.native.go("/pages/myConsult/myConsult","/myConsult",t)}}};t.default=s},"698d":function(e,t,i){"use strict";var r=i("15b0"),o=i.n(r);o.a},"8c3d":function(e,t,i){"use strict";i.r(t);var r=i("fa1b"),o=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},ac1b:function(e,t,i){var r=i("b288");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("4f06").default;o("2b55e648",r,!0,{sourceMap:!1,shadowMode:!1})},b288:function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,".unFinshOrderPopup[data-v-4f0651bd]{z-index:2}.unFinshOrderPopup.bottom .fixedPopup-content[data-v-4f0651bd]{border-radius:4vw 4vw 0 0;width:100%;left:0;margin-left:0}.unFinshOrderPopup .fixedPopup-content[data-v-4f0651bd]{background:#f4f4f4;border-radius:4vw}.unFinshOrderPopup .fixedPopup-content-main[data-v-4f0651bd]{padding:4vw 4vw 8vw}.unFinshOrderPopup .fixedPopup-content-main uni-scroll-view[data-v-4f0651bd]{max-height:calc(100vh - 53.33333vw)}.unFinshOrderPopup .fixedPopup-content-main .list .listItem[data-v-4f0651bd]{margin-bottom:2.66667vw;padding:4vw;border-radius:4vw;background:#fff}.unFinshOrderPopup .fixedPopup-content-main .list .listItem[data-v-4f0651bd]:last-child{margin-bottom:0}.unFinshOrderPopup .fixedPopup-content-main .list .listItem uni-image[data-v-4f0651bd]{width:10.66667vw;height:10.66667vw;border-radius:100%;margin-right:2.66667vw}.unFinshOrderPopup .fixedPopup-content-main .list .listItem .docInfo>uni-text[data-v-4f0651bd]:nth-child(2){margin-left:1.33333vw}.unFinshOrderPopup .fixedPopup-content-main .list .listItem .time[data-v-4f0651bd]{margin-top:2.66667vw}.unFinshOrderPopup .fixedPopup-content-btn .btn[data-v-4f0651bd]{border-radius:0 0 4vw 4vw}@media (orientation:landscape){.unFinshOrderPopup.bottom .fixedPopup-content[data-v-4f0651bd]{border-radius:5.28169rem 5.28169rem 0 0}.unFinshOrderPopup .fixedPopup-content[data-v-4f0651bd]{border-radius:5.28169rem}.unFinshOrderPopup .fixedPopup-content-main[data-v-4f0651bd]{padding:5.28169rem 5.28169rem 10.56338rem}.unFinshOrderPopup .fixedPopup-content-main uni-scroll-view[data-v-4f0651bd]{max-height:calc(100vh - 70.42254rem)}.unFinshOrderPopup .fixedPopup-content-main .list .listItem[data-v-4f0651bd]{margin-bottom:3.52113rem;padding:5.28169rem;border-radius:5.28169rem}.unFinshOrderPopup .fixedPopup-content-main .list .listItem uni-image[data-v-4f0651bd]{width:14.08451rem;height:14.08451rem;margin-right:3.52113rem}.unFinshOrderPopup .fixedPopup-content-main .list .listItem .docInfo>uni-text[data-v-4f0651bd]:nth-child(2){margin-left:1.76056rem}.unFinshOrderPopup .fixedPopup-content-main .list .listItem .time[data-v-4f0651bd]{margin-top:3.52113rem}.unFinshOrderPopup .fixedPopup-content-btn .btn[data-v-4f0651bd]{border-radius:0 0 5.28169rem 5.28169rem}}",""])},bdb9:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.showUnFinshedOrderPopup?i("v-uni-view",{staticClass:"fixedPopup mask unFinshOrderPopup",class:e.isBottomPopup?"bottom":""},[i("v-uni-view",{staticClass:"fixedPopup-content"},[e.isBottomPopup?i("i",{staticClass:"iconfont2 icon_pop_up_cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showUnFinshedOrderPopup=!1}}}):e._e(),e.isHaveFreeOrder?[i("v-uni-view",{staticClass:"fixedPopup-content-title"},[e._v("您有未完成的免费咨询")]),i("v-uni-view",{staticClass:"fixedPopup-content-tips c-orange"},[e._v("每个用户一次只能预约一条免费的咨询")])]:[i("v-uni-view",{staticClass:"fixedPopup-content-title"},[e._v("您有未完成订单")]),i("v-uni-view",{staticClass:"fixedPopup-content-tips c-orange"},[e._v("点击查看订单详情")])],i("v-uni-view",{staticClass:"fixedPopup-content-main"},[i("v-uni-scroll-view",{attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"list"},e._l(e.newDataList,(function(t,r){return i("v-uni-view",{key:r,staticClass:"listItem",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.goOrderDetailPage(t)}}},[i("v-uni-view",{staticClass:"flex-father flex-center"},[i("v-uni-image",{attrs:{src:t.doctorIcon?e.fileUrl+t.doctorIcon:e.imageError(t,r)},on:{error:function(i){arguments[0]=i=e.$handleEvent(i),e.imageError(t,r,"doctorIcon")}}}),i("v-uni-view",{staticClass:"detail flex-child"},[i("v-uni-view",{staticClass:"docInfo"},[i("v-uni-text",{staticClass:"fz-40 fw-500"},[e._v(e._s(t.doctorName))]),i("v-uni-text",{staticClass:"c-666"},[e._v(e._s(t.doctorLevelName))]),t.psychLevelName?i("v-uni-text",{staticClass:"c-666",staticStyle:{"margin-left":"10rpx"}},[e._v("| "+e._s(t.psychLevelName))]):e._e()],1)],1)],1),t.businessType==e.SERVICECODE.IMGTXTCONSULT?i("v-uni-view",{staticClass:"time"},[i("v-uni-text",{staticClass:"c-666"},[e._v("下单时间：")]),e._v(e._s(t.createTime?t.createTime.substring(0,16):""))],1):i("v-uni-view",{staticClass:"time"},[i("v-uni-text",{staticClass:"c-666"},[e._v("咨询时间：")]),e._v(e._s(t.orderDate)+" "+e._s(t.orderPoint))],1)],1)})),1)],1)],1),e.isBottomPopup?e._e():i("v-uni-view",{staticClass:"fixedPopup-content-btn flex-father",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showUnFinshedOrderPopup=!1}}},[i("v-uni-view",{staticClass:"btn flex-child c-purple"},[e._v("关闭")])],1)],2)],1):e._e()},a=[]},d7a3:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var r={pageMeta:i("6d42").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-meta",{attrs:{"root-font-size":e.scaleFontSize+"px"}}),null!==e.isPsychological?i("v-uni-view",{staticClass:"wrapper",class:[e.isPsychological||e.isOnlineConsult?"otherLayout":""]},[i("v-uni-view",{staticClass:"filterBox"},[e.isPsychological||e.isOnlineConsult?[i("v-uni-view",{staticClass:"filterTop flex-father flex-center"},e._l(e.filterList,(function(t,r){return i("v-uni-view",{key:r,staticClass:"flex-child filterItem",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.setShowOrHideFilterList(t,!t.isShowFilterList)}}},[i("v-uni-view",{class:t.isShowFilterList?"showFilterList":""},[i("v-uni-text",{class:t.checked?"c-purple":""},[e._v(e._s(t.checkName||t.name))]),i("i",{staticClass:"icon",class:t.checked||t.isShowFilterList?"icon-arrow-downSmall-purple":"icon-arrow-downSmall-gray"})],1),t.isShowFilterList?i("v-uni-view",{staticClass:"fixedFilterPopup",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[i("v-uni-view",{staticClass:"fixedFilterPopup-content"},[i("v-uni-view",{staticClass:"fixedFilterPopup-content-main"},[i("v-uni-scroll-view",{attrs:{"scroll-y":!0}},[e._l(t.list,(function(r,o){return t.list?i("v-uni-view",{key:o,staticClass:"listItem",class:e.doctorListParams.queryOwnSort==r.code?"active":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleFilter("sort",t,r)}}},[e._v(e._s(r.name)),e.doctorListParams.queryOwnSort==r.code?i("i",{staticClass:"icon icon-tick"}):e._e()]):e._e()})),e._l(t.listFolder,(function(r,o){return t.listFolder?i("v-uni-view",{key:o,staticClass:"listFolderItem"},[i("v-uni-view",{staticClass:"title"},[e._v(e._s(r.name)),i("v-uni-text",{staticClass:"c-666"},[e._v(e._s(r.isMultiple?"(可多选)":"(单选)"))])],1),i("v-uni-view",{staticClass:"folderList"},e._l(r.list,(function(o,a){return i("v-uni-view",{key:a,staticClass:"commonRadioItem",class:[r.isDateTime?"dateTimeItem":"",r.isMultiple&&e.doctorListParams[r.key]&&e.doctorListParams[r.key].indexOf(o.code)>=0?"active":"",!r.isMultiple&&e.doctorListParams[r.key]&&e.doctorListParams[r.key]==o.code?"active":""],on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleFilter("",t,r,o)}}},[r.isDateTime?[i("v-uni-text",{staticClass:"fz-36"},[e._v(e._s(o.dateShort))]),i("v-uni-text",{staticClass:"c-666 fz-24"},[e._v(e._s(o.weekShort))])]:[e._v(e._s(o.name))]],2)})),1)],1):e._e()}))],2)],1),t.listFolder&&!t.isNoShowBtn?i("v-uni-view",{staticClass:"fixedFilterPopup-content-btn flex-father"},[i("v-uni-view",{staticClass:"btn btn-empty-purple flex-child",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleFilterReset(t)}}},[e._v("重置")]),i("v-uni-view",{staticClass:"btn btn-purple flex-child",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleFilterSubmit(t)}}},[e._v("确定")])],1):e._e()],1)],1):e._e()],1)})),1),i("v-uni-view",{staticClass:"filterFast flex-father flex-center"},e._l(e.filterFastList,(function(t,r){return t.isShow?i("v-uni-view",{key:r,staticClass:"flex-child filterFastItem commonRadioItem",class:[t.isMultiple&&e.doctorListParams[t.key]&&e.doctorListParams[t.key].indexOf(t.code)>=0?"active":"",!t.isMultiple&&e.doctorListParams[t.key]&&e.doctorListParams[t.key]===t.code?"active":""],on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleFilterFast(t)}}},[i("v-uni-text",[e._v(e._s(t.name))])],1):e._e()})),1)]:[i("v-uni-view",{staticClass:"unLimit js-leftUnLimit"},[i("v-uni-view",{staticClass:"date",class:-1==e.filterIndex?"active":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseDateDoc()}}},[e._v("不限"),i("br"),e._v("日期")])],1),i("v-uni-view",{staticClass:"dateList"},[i("v-uni-scroll-view",{attrs:{"scroll-x":!0}},[e.dateListWidth?i("v-uni-view",{style:"width:"+e.dateListWidth+"px"},e._l(e.dateList,(function(t,r){return i("v-uni-view",{key:r,staticClass:"listItem",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.chooseDateDoc(t.wholeDate,r)}}},[i("v-uni-view",{staticClass:"date",class:r==e.filterIndex?"active":""},[e._v(e._s(t.dateStr)),i("br"),i("v-uni-text",{staticClass:"fz-28"},[e._v(e._s(t.weekStr))])],1)],1)})),1):e._e()],1)],1)]],2),i("v-uni-view",{staticClass:"listBox"},[e.doctorList&&e.doctorList.length?i("v-uni-scroll-view",{staticClass:"scrollBox",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"refresher-triggered":e.loading,"refresher-enabled":!0},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.bindDownLoad.apply(void 0,arguments)},refresherrefresh:function(t){arguments[0]=t=e.$handleEvent(t),e.onRefresh.apply(void 0,arguments)}}},[e.doctorList&&e.doctorList.length?i("DoctorList",{attrs:{doctorList:e.doctorList,isOtherLayout:e.isPsychological||e.isOnlineConsult}}):e._e(),i("v-uni-view",{staticClass:"loadMore"},[e._v(e._s(e.loadMoreText))])],1):null!=e.doctorList?i("Empty",{attrs:{absMiddleFlag:!0}}):e._e()],1),i("UnFinshedOrderPopup",{ref:"myUnFinshedOrderPopup",attrs:{isBottomPopup:!0,dataList:e.unfinishedOrderList}})],1):e._e(),i("v-uni-view",{staticClass:"rightFixedTips",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getMyConsultPage.apply(void 0,arguments)}}},[e._v("历史"),i("br"),e._v("记录")]),i("CustomModal",{ref:"myCustomModal"})],1)},a=[]},e5d8:function(e,t,i){"use strict";i.r(t);var r=i("d7a3"),o=i("8c3d");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("698d");var n,s=i("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"50e0ff92",null,!1,r["a"],n);t["default"]=l.exports},e979:function(e,t,i){"use strict";i.r(t);var r=i("6355"),o=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},ea9c:function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,".wrapper[data-v-50e0ff92]{height:100%}.wrapper.otherLayout .filterBox[data-v-50e0ff92]{background:#fff;padding:0;height:25.33333vw;text-align:center}.wrapper.otherLayout .listBox[data-v-50e0ff92]{height:calc(100% - 25.33333vw)}.wrapper .filterBox[data-v-50e0ff92]{position:relative;padding:4vw 0 4vw 2.66667vw;height:24vw;position:inherit}.wrapper .filterBox .filterTop[data-v-50e0ff92]{padding:0 1.33333vw;height:10.66667vw;line-height:10.66667vw}.wrapper .filterBox .filterTop .icon[data-v-50e0ff92]{top:-2px;margin-left:1.33333vw}.wrapper .filterBox .filterTop .showFilterList uni-text[data-v-50e0ff92]{color:#846bff}.wrapper .filterBox .filterTop .showFilterList .icon[data-v-50e0ff92]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.wrapper .filterBox .filterTop .fixedFilterPopup[data-v-50e0ff92]{position:fixed;position:absolute;top:10.66667vw;left:0;right:0;width:100%;bottom:0;background:rgba(0,0,0,.5);z-index:2}.wrapper .filterBox .filterTop .fixedFilterPopup-content[data-v-50e0ff92]{background:#fff;border-radius:0 0 5.33333vw 5.33333vw}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main[data-v-50e0ff92]{min-height:53.33333vw}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main uni-scroll-view[data-v-50e0ff92]{height:100%;max-height:80vw}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listItem[data-v-50e0ff92]{position:relative;line-height:13.33333vw;padding:0 4vw;font-size:4.26667rem;text-align:left}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listItem.active[data-v-50e0ff92]{font-weight:500;color:#846bff}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listFolderItem[data-v-50e0ff92]{text-align:left;padding:0 2.66667vw}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listFolderItem .title[data-v-50e0ff92]{margin:0 1.33333vw}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listFolderItem .commonRadioItem[data-v-50e0ff92]{height:9.33333vw;line-height:9.33333vw;font-size:3.73333rem;font-weight:400;margin:0 1.33333vw 4vw}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listFolderItem .commonRadioItem.dateTimeItem[data-v-50e0ff92]{width:13.06667vw;min-width:inherit;height:18.66667vw;line-height:6.66667vw;border-radius:2.66667vw;padding:2.66667vw 0}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listFolderItem .commonRadioItem.dateTimeItem uni-text[data-v-50e0ff92]{display:block}.wrapper .filterBox .filterTop .fixedFilterPopup-content-btn[data-v-50e0ff92]{height:17.33333vw;padding:2.66667vw 4vw;border-top:%?1?% solid #f5f5f5}.wrapper .filterBox .filterTop .fixedFilterPopup-content-btn .btn[data-v-50e0ff92]{height:12vw;line-height:11.73333vw;border-radius:6.66667vw;font-size:4.8rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content-btn .btn[data-v-50e0ff92]:first-child{margin-right:4vw}.wrapper .filterBox .filterFast[data-v-50e0ff92]{height:14.66667vw;padding:2.66667vw}.wrapper .filterBox .filterFast>uni-view[data-v-50e0ff92]{margin:0 1.33333vw;height:9.33333vw;padding:0;line-height:9.33333vw;font-size:3.73333rem;border-radius:4.8vw;font-weight:400}.wrapper .filterBox .filterFast>uni-view uni-text[data-v-50e0ff92]{color:#666}.wrapper .filterBox .filterFast>uni-view.active uni-text[data-v-50e0ff92]{font-weight:500}.wrapper .filterBox .unLimit[data-v-50e0ff92]{float:left}.wrapper .filterBox .date[data-v-50e0ff92]{float:left;width:14.66667vw;height:16vw;border-radius:2.66667vw;background:#fff;text-align:center;padding:2vw 0;line-height:6vw;font-size:4.26667rem;font-weight:500;margin:0 1.33333vw}.wrapper .filterBox .date.active[data-v-50e0ff92]{background:#846bff;color:#fff}.wrapper .filterBox .date.active uni-text[data-v-50e0ff92]{color:#fff}.wrapper .filterBox .date>uni-text[data-v-50e0ff92]{font-weight:400}.wrapper .filterBox .dateList[data-v-50e0ff92]{float:left;height:100%;width:calc(100% - 17.6vw)}.wrapper .filterBox .dateList uni-scroll-view[data-v-50e0ff92]{width:100%;height:100%}.wrapper .listBox[data-v-50e0ff92]{position:relative;height:calc(100% - 24vw);background-color:#fff}.wrapper .listBox uni-scroll-view[data-v-50e0ff92]{height:100%}.wrapper .listBox uni-scroll-view[data-v-50e0ff92] .doctorList{background:transparent;border-radius:0}.rightFixedTips[data-v-50e0ff92]{position:fixed;bottom:21.33333vw;z-index:1;right:0;width:16vw;height:16vw;line-height:6vw;background:#fff;font-size:4.26667rem;color:#846bff;text-align:center;padding:2vw 0;box-shadow:-1.33333vw 0 4vw %?0?% rgba(0,0,0,.08);border-radius:2.66667vw 0 0 2.66667vw}@media (orientation:landscape){.wrapper.otherLayout .filterBox[data-v-50e0ff92]{height:33.4507rem}.wrapper.otherLayout .listBox[data-v-50e0ff92]{height:calc(100% - 33.4507rem)}.wrapper .filterBox[data-v-50e0ff92]{padding:5.28169rem 0 5.28169rem 3.52113rem;height:31.69014rem}.wrapper .filterBox .filterTop[data-v-50e0ff92]{padding:0 1.76056rem;height:14.08451rem;line-height:14.08451rem}.wrapper .filterBox .filterTop .icon[data-v-50e0ff92]{margin-left:1.76056rem}.wrapper .filterBox .filterTop .fixedFilterPopup[data-v-50e0ff92]{top:14.08451rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content[data-v-50e0ff92]{border-radius:0 0 7.04225rem 7.04225rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main[data-v-50e0ff92]{min-height:70.42254rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main uni-scroll-view[data-v-50e0ff92]{max-height:105.6338rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listItem[data-v-50e0ff92]{line-height:17.60563rem;padding:0 5.28169rem;font-size:5.6338rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listFolderItem[data-v-50e0ff92]{padding:0 3.52113rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listFolderItem .title[data-v-50e0ff92]{margin:0 1.76056rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listFolderItem .commonRadioItem[data-v-50e0ff92]{height:12.32394rem;line-height:12.32394rem;font-size:4.92958rem;margin:0 1.76056rem 5.28169rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content-main .listFolderItem .commonRadioItem.dateTimeItem[data-v-50e0ff92]{width:17.25352rem;height:24.64789rem;line-height:8.80282rem;border-radius:3.52113rem;padding:3.52113rem 0}.wrapper .filterBox .filterTop .fixedFilterPopup-content-btn[data-v-50e0ff92]{height:22.88732rem;padding:3.52113rem 5.28169rem;border-top:%?1?% solid #f5f5f5}.wrapper .filterBox .filterTop .fixedFilterPopup-content-btn .btn[data-v-50e0ff92]{height:15.84507rem;line-height:15.49296rem;border-radius:8.80282rem;font-size:6.33803rem}.wrapper .filterBox .filterTop .fixedFilterPopup-content-btn .btn[data-v-50e0ff92]:first-child{margin-right:5.28169rem}.wrapper .filterBox .filterFast[data-v-50e0ff92]{height:19.3662rem;padding:3.52113rem}.wrapper .filterBox .filterFast>uni-view[data-v-50e0ff92]{margin:0 1.76056rem;height:12.32394rem;line-height:12.32394rem;font-size:4.92958rem;border-radius:6.33803rem}.wrapper .filterBox .date[data-v-50e0ff92]{width:19.3662rem;height:21.12676rem;border-radius:3.52113rem;padding:2.64085rem 0;line-height:7.92254rem;font-size:5.6338rem;margin:0 1.76056rem}.wrapper .filterBox .dateList[data-v-50e0ff92]{width:calc(100% - 23.23944rem)}.wrapper .listBox[data-v-50e0ff92]{height:calc(100% - 31.69014rem)}.rightFixedTips[data-v-50e0ff92]{bottom:28.16901rem;width:21.12676rem;height:21.12676rem;line-height:7.92254rem;font-size:5.6338rem;padding:2.64085rem 0;box-shadow:-1.76056rem 0 5.28169rem %?0?% rgba(0,0,0,.08);border-radius:3.52113rem 0 0 3.52113rem}}",""])},f8b7:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.supplementConsultationInfo=t.prepareVideoVisit=t.patientCancel=t.pageCompletedAssessAnon=t.listUnfinishedVisit=t.listUnfinishedPsychVisit=t.listSrvEvalByParam=t.listSrvEval=t.listPrescription=t.listEffectiveHsApplyTicket=t.isPaid=t.getVideoChargeList=t.getRemainingTimeByBiz=t.getPayUrl=t.getPatientAssessWaitingInfo=t.getConsultPayUrl=t.getChargeDetail=t.finalPrice=t.evalSubmit=t.diagnosisOpnDetail=t.deleteVisitFile=t.countSrvEval=t.cognitionExplainQuicklyReserve=t.canUserCouponNum=void 0;var o=r(i("b775")),a=function(e,t){return(0,o.default)({url:"/api/inquiry/charge/detail",data:e,method:"post",isLogin:t})};t.getChargeDetail=a;var n=function(e){return(0,o.default)({url:"/api/pay/getRemainingTimeByBiz",data:e,method:"post"})};t.getRemainingTimeByBiz=n;var s=function(e){return(0,o.default)({url:"/api/inquiry/payment/isPaid",data:e,method:"post"})};t.isPaid=s;var l=function(e){return(0,o.default)({url:"/api/inquiry/payment/getPayUrl",data:e,method:"post"})};t.getPayUrl=l;var d=function(e){return(0,o.default)({url:"/api/cognition/assess/patientAssessWaitingInfo",data:e,method:"post"})};t.getPatientAssessWaitingInfo=d;var c=function(e){return(0,o.default)({url:"/api/inquiry/video/diagnosisOpnDetail",data:e,method:"post"})};t.diagnosisOpnDetail=c;var u=function(e){return(0,o.default)({url:"/api/inquiry/video/supplementConsultationInfo/_newly",data:e,method:"post"})};t.supplementConsultationInfo=u;var f=function(e){return(0,o.default)({url:"/api/inquiry/video/deleteVisitFile/"+e,method:"get"})};t.deleteVisitFile=f;var p=function(e){return(0,o.default)({url:"/api/inquiry/eval/charge/submit",data:e,method:"post"})};t.evalSubmit=p;var h=function(e){return(0,o.default)({url:"/api/srveval/listSrvEvalByBusinessId",data:e,method:"post"})};t.listSrvEval=h;var v=function(e){return(0,o.default)({url:"/api/srveval/listSrvEvalByParam",data:e,method:"post"})};t.listSrvEvalByParam=v;var m=function(e){return(0,o.default)({url:"/api/srveval/countSrvEval",data:e,method:"post"})};t.countSrvEval=m;var g=function(e){return(0,o.default)({url:"/api/inquiry/charge/patientCancel",data:e,method:"post"})};t.patientCancel=g;var w=function(e){return(0,o.default)({url:"/api/inquiry/video/getVideoChargeList",data:e,method:"post"})};t.getVideoChargeList=w;var y=function(e,t){return(0,o.default)({url:"/api/inquiry/charge/listUnfinishedVisit",data:e,isLogin:t,method:"get"})};t.listUnfinishedVisit=y;var x=function(e){return(0,o.default)({url:"/api/inquiry/charge/finalPrice",data:e,method:"post"})};t.finalPrice=x;var P=function(e){return(0,o.default)({url:"/api/inquiry/video/prepareVideoVisit",data:e,isLogin:!0,method:"post"})};t.prepareVideoVisit=P;var L=function(e){return(0,o.default)({url:"/api/inquiry/payment/getPayUrl",data:e,isLogin:!0,method:"post"})};t.getConsultPayUrl=L;var b=function(e){return(0,o.default)({url:"/api/inquiry/hs/listEffectiveHsApplyTicket?type="+e,method:"get"})};t.listEffectiveHsApplyTicket=b;var C=function(e,t){return(0,o.default)({url:"/api/cognition/pack/patient/pageCompletedAssessAnon",data:e,isLogin:t,method:"get"})};t.pageCompletedAssessAnon=C;var F=function(e){return(0,o.default)({url:"/api/coupon/order/canUserCouponNum",data:e,method:"post"})};t.canUserCouponNum=F;var S=function(e){return(0,o.default)({url:"/api/inquiry/charge/listUnfinishedPsychVisit",data:e,method:"get"})};t.listUnfinishedPsychVisit=S;var k=function(e){return(0,o.default)({url:"/api/inquiry/video/listPrescription?chargeId="+e,method:"get"})};t.listPrescription=k;var O=function(e,t,i){return(0,o.default)({url:"/api/inquiry/video/cognitionExplainQuicklyReserve",data:e,role:i,isLogin:t,method:"post"})};t.cognitionExplainQuicklyReserve=O},fa1b:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a");var o=i("3de1"),a=i("ca00"),n=i("1265"),s=i("f8b7"),l=i("2934"),d=r(i("f121")),c=i("b379"),u=r(i("4b4e")),f=r(i("2127")),p=r(i("b800")),h=r(i("5933")),v={data:function(){return{isPsychological:null,isOnlineConsult:null,showUnFinshedOrderPopup:!1,unfinishedOrderList:[],fileUrl:d.default.currentApps.fileUrl,filterIndex:-1,dateListWidth:0,doctorList:null,doctorListParams:{pageNo:1,pageSize:10,queryScheduleDate:""},loading:!1,loadMoreText:"下拉加载更多",isNewDocList:!0,swiperOption:{loop:!1,width:130},dateList:[],allDoc:0,wxInfoObj:{},filterList:[],filterFastList:[{code:(0,a.getServiceTime)().substring(0,10),name:"今日可约",isMultiple:!0,isShow:!0,key:"queryScheduleDates"},{code:1,name:"可开处方",isMultiple:!0,isShow:!1,key:"queryEprescription"},{code:2,name:"低价优先",isShow:!0,key:"queryOwnSort"},{code:1,name:"女咨询师",isMultiple:!0,isShow:!1,key:"querySex"},{code:0,name:"男咨询师",isMultiple:!0,isShow:!1,key:"querySex"}],checkFastNameArr:[]}},components:{CustomModal:u.default,DoctorList:f.default,Empty:p.default,UnFinshedOrderPopup:h.default},onShow:function(){},onLoad:function(e){var t=this;this.isPsychological=!!e.isPsychological,this.isOnlineConsult=!!e.isOnlineConsult,e.isPrescription&&(this.isOnlineConsult=!0,this.doctorListParams.queryEprescription=[1]),this.isPsychological?(o.native.setNavTitle("心理咨询"),this.filterFastList.forEach((function(e){"querySex"==e.key&&(e.isShow=!0)})),this.filterList=[{name:"综合排序",key:"queryOwnSort",list:[{code:"",name:"综合排序"},{code:1,name:"问诊量优先"},{code:2,name:"低价优先"},{code:3,name:"高价优先"},{code:4,name:"好评优先"}]},{name:"咨询方向",listFolder:[{name:"咨询方向",isMultiple:!1,key:"queryDomainId",list:[]}]},{name:"时间",listFolder:[{name:"咨询时间",isDateTime:!0,isMultiple:!0,key:"queryScheduleDates",list:[]}]},{name:"筛选",listFolder:[{name:"咨询师性别",isMultiple:!0,key:"querySex",list:[{code:1,name:"女性"},{code:0,name:"男性"}]},{name:"咨询师资质",isMultiple:!0,key:"queryPsychLevelCodes",list:[]},{name:"擅长人群",isMultiple:!0,key:"queryExpertCrowdCodes",list:[]}]}]):this.isOnlineConsult?(o.native.setNavTitle("在线问诊"),this.filterFastList.forEach((function(e){"queryEprescription"==e.key&&(e.isShow=!0)})),this.filterList=[{name:"科室",key:"queryPlatBigDeptCode",isNoShowBtn:!0,listFolder:[]},{name:"综合排序",key:"queryOwnSort",list:[{code:"",name:"综合排序"},{code:1,name:"问诊量优先"},{code:2,name:"低价优先"},{code:3,name:"高价优先"},{code:4,name:"好评优先"}]},{name:"时间",listFolder:[{name:"咨询时间",isDateTime:!0,isMultiple:!0,key:"queryScheduleDates",list:[]}]},{name:"筛选",listFolder:[{name:"医生职称",isMultiple:!0,key:"queryJobLevelCodes",list:[]},{name:"问诊类型",isMultiple:!0,key:"queryInquiryTypes",list:[{code:c.SERVICECODE.VIDEOCONSULT,name:(0,c.BUSINESSTYPENAME)(c.SERVICECODE.VIDEOCONSULT)},{code:c.SERVICECODE.READ,name:(0,c.BUSINESSTYPENAME)(c.SERVICECODE.READ)}]},{name:"医生状态",isMultiple:!0,key:"queryVideoSwitchWork",list:[{code:1,name:"当前在线"}]},{name:"其他",key:"queryEprescription",isMultiple:!0,list:[{code:1,name:"可开处方"}]}]}]):o.native.setNavTitle("认知咨询服务"),(this.isPsychological||this.isOnlineConsult)&&this.listDictComm(),this.$nextTick((function(){var e=uni.createSelectorQuery();e.select(".js-leftUnLimit").boundingClientRect((function(e){e&&(t.dateListWidth=14*e.width)})).exec()}));for(var i=0;i<14;i++){var r=(new Date).setDate((new Date).getDate()+i),n=(0,o.formatDateTime)(r).substring(5,10),s=(0,o.weekDay)(r),l=parseInt(n.substring(3,5));if(0==i){var d="今天";l="今"}else if(1==i){d="明天";l="明"}else if(2==i)d="后天";else d=(0,o.weekDay)(r);var u={dateStr:n,weekStr:d,weekShort:s,dateShort:l,wholeDate:(0,o.formatDateTime)(r).substring(0,10)};u.code=u.wholeDate,console.log("dateItem",u),this.dateList.push(u),(this.isPsychological||this.isOnlineConsult)&&(this.filterList[2].listFolder[0].list=this.dateList)}e.allDoc?(this.filterIndex=-1,this.doctorListParams.queryScheduleDate="",this.doctorListParams.show=0):(this.filterIndex=0,this.doctorListParams.queryScheduleDate=(0,a.getServiceTime)().substring(0,10),this.doctorListParams.show=1),this.getDoctorList(),this.token&&this.getUnfinishedOrderList()},computed:{scaleFontSize:function(){return this.$store.state.scaleFontSize},token:function(){return this.$store.state.user.token}},methods:{imageError:function(e,t){return(0,o.getDefaultIcon)(e.doctorSex,"DOCTOR")},handleFilter:function(e,t,i,r){if("sort"==e)t.checkName=i.name,t.checked=!0,this.doctorListParams.queryOwnSort=i.code,t.isShowFilterList=!1;else if("queryPlatBigDeptCode"==t.key)console.log("item,sItem,cItem",t,i,r),this.doctorListParams[t.key]=i.code,this.doctorListParams[i.key]=r.code,t.checked=!0,t.checkName=r.name,t.isShowFilterList=!1;else if(i.isMultiple){this.doctorListParams[i.key]=this.doctorListParams[i.key]||[];var o=this.doctorListParams[i.key].indexOf(r.code);o>=0?this.doctorListParams[i.key].splice(o,1):this.doctorListParams[i.key].push(r.code),this.doctorListParams[i.key].length?t.checked=!0:t.checked=!1}else this.doctorListParams[i.key]==r.code?(this.doctorListParams[i.key]="",t.checkName="",t.checked=!1):(this.doctorListParams[i.key]=r.code,t.checkName=r.name,t.checked=!0);this.getDoctorList(1),this.filterList=JSON.parse(JSON.stringify(this.filterList))},handleFilterReset:function(e){var t=this;e.listFolder.forEach((function(e){t.doctorListParams[e.key]=""})),e.checked=!1,e.checkName="",this.filterList=JSON.parse(JSON.stringify(this.filterList)),this.getDoctorList(1)},handleFilterSubmit:function(e){e.isShowFilterList=!1,this.filterList=JSON.parse(JSON.stringify(this.filterList))},handleFilterFast:function(e){var t=this;this.filterList.forEach((function(i){i.listFolder?i.listFolder.forEach((function(r){r.key==e.key&&t.handleFilter("",i,r,e)})):i.key==e.key&&"queryOwnSort"==e.key&&(t.doctorListParams["queryOwnSort"]?(t.doctorListParams["queryOwnSort"]="",i.checkName="",i.checked=!1,t.getDoctorList(1),t.filterList=JSON.parse(JSON.stringify(t.filterList))):t.handleFilter("sort",i,e))}))},listDictComm:function(){var e=this;this.isPsychological&&((0,l.listDictPsychDomain)().then((function(t){if("000"===t.errorCode){var i=[];t.entity.forEach((function(e){i.push({code:e.id,name:e.name})})),e.filterList[1].listFolder[0].list=i}})),(0,l.listDictComm)("2012-2013").then((function(t){"000"===t.errorCode&&(e.filterList[3].listFolder[1].list=t.entity["2012"],e.filterList[3].listFolder[2].list=t.entity["2013"])}))),this.isOnlineConsult&&((0,l.listSrvPlatDept)().then((function(t){"000"===t.errorCode&&t.entity.length&&(t.entity.forEach((function(e){e.list=JSON.parse(JSON.stringify(e.subs)),e.key="queryPlatSmallDeptCode",delete e["subs"]})),e.filterList[0].listFolder=t.entity)})),(0,l.listDictComm)("9900009").then((function(t){"000"===t.errorCode&&(e.filterList[3].listFolder[0].list=t.entity["9900009"])})),console.log("this.filterList",this.filterList))},setShowOrHideFilterList:function(e,t){this.filterList.forEach((function(e){e.isShowFilterList=!1})),e.isShowFilterList=t,this.filterList=JSON.parse(JSON.stringify(this.filterList))},getweekDay:function(e){var t=e,i=(0,o.getSeconds)(t.timeBegin),r=(0,o.getSeconds)(t.timeEnd),a="";return i>=(0,o.getSeconds)("08:00")&&r<=(0,o.getSeconds)("11:59")?a="上午":i>=(0,o.getSeconds)("12:00")&&r<=(0,o.getSeconds)("17:59")?a="下午":i>=(0,o.getSeconds)("18:00")&&r<=(0,o.getSeconds)("23:59")&&(a="晚上"),(0,o.weekDay)(e.scheduleDate)+" "+a},getSchedulState:function(e){var t=(0,a.getServiceTime)();return(0,o.getTimeCount)(e.scheduleDate+" "+e.timeEnd,t)>0?"过":e.orderNum==e.limitNum||e.limitNum-e.orderNum-e.expireNum==0?"满":e.orderNum<e.limitNum?e.limitNum-e.orderNum-e.expireNum:void 0},getMyConsultPage:function(){o.native.go("/pages/myConsult/myConsult","/myConsult")},getUnfinishedOrderList:function(){var e=this,t=(0,a.getUserId)();if(t)if(this.isPsychological){var i={patientId:t};(0,s.listUnfinishedPsychVisit)(i).then((function(t){"000"==t.errorCode?(e.unfinishedOrderList=t.entity,0!=t.entity.length&&(e.$refs.myUnFinshedOrderPopup.showUnFinshedOrderPopup=!0)):o.native.toast(t.message)}))}else{i={queryStatus:"11,13,14",pageNo:1,pageSize:999999999,queryChargeDateBegin:"",queryChargeDateEnd:"",queryPatientId:t,queryDoctorId:"",queryServiceType:"10003,10005,10008",queryChargeId:"",queryIntellectDiag:"0"};(0,s.getVideoChargeList)(i).then((function(t){"000"==t.errorCode?(e.unfinishedOrderList=t.entity.records,0!=t.entity.records.length&&(e.$refs.myUnFinshedOrderPopup.showUnFinshedOrderPopup=!0)):o.native.toast(t.message)}))}},getDoctorList:function(e){var t=this;e&&(this.doctorListParams.pageNo=e);var i=JSON.parse(JSON.stringify(this.doctorListParams));(this.isOnlineConsult||this.isPsychological)&&i.queryScheduleDates&&(i.queryScheduleDates=i.queryScheduleDates.join(",")),this.isPsychological?(delete i["queryScheduleDate"],delete i["show"],i.querySex&&(i.querySex=2==i.querySex.length?[2]:i.querySex,i.querySex=i.querySex.join(",")),i.queryPsychLevelCodes&&(i.queryPsychLevelCodes=i.queryPsychLevelCodes.join(",")),i.queryExpertCrowdCodes&&(i.queryExpertCrowdCodes=i.queryExpertCrowdCodes.join(",")),(0,n.listPsychServiceDoctor)(i).then((function(e){t.getDoctorListCallback(e)})).finally((function(e){t.loading=!1,t.doctorList=t.doctorList||[]}))):this.isOnlineConsult?(delete i["queryScheduleDate"],delete i["show"],i.queryJobLevelCodes=i.queryJobLevelCodes?i.queryJobLevelCodes.join(","):"",i.queryInquiryTypes=i.queryInquiryTypes?i.queryInquiryTypes.join(","):"",i.queryVideoSwitchWork=i.queryVideoSwitchWork?i.queryVideoSwitchWork.join(","):"",i.queryEprescription=i.queryEprescription?i.queryEprescription.join(","):"",i.queryPlace=1,(0,n.pageOnlineInquiryDoctor)(i).then((function(e){t.getDoctorListCallback(e)})).finally((function(e){t.loading=!1,t.doctorList=t.doctorList||[]}))):(0,n.listServiceDoctor)(i).then((function(e){t.getDoctorListCallback(e)})).finally((function(e){t.loading=!1,t.doctorList=t.doctorList||[]}))},getDoctorListCallback:function(e){"000"==e.errorCode?(1==this.doctorListParams.pageNo?(this.doctorList=e.entity.records||[],this.totalPages=e.entity.pages):this.doctorList=this.doctorList.concat(e.entity.records),this.$nextTick((function(){setTimeout((function(){this.loading=!1}),1e3)})),this.doctorListParams.pageNo==e.entity.pages?this.loadMoreText="已加载全部":this.loadMoreText="下拉加载更多",(this.isPsychological||this.isOnlineConsult)&&e.entity.records.forEach((function(e){if(e.dictExpertLabels){var t=[];e.dictExpertLabels.forEach((function(e){t.push(e.name)})),e.dictExpertLabelsStr=t.join("、")}if(e.scheduleFastDate){var i=(0,o.weekDay)(e.scheduleFastDate),r=(0,o.getDifferDays)((0,a.getServiceTime)(),e.scheduleFastDate);if(0==r)i="今天";else if(1==r)i="明天";e.scheFirstTimeStr=i+" "+e.scheduleFastTime}}))):(this.doctorList=this.doctorList||[],o.native.toast(e.message))},bindDownLoad:function(){var e=this;this.totalPages>this.doctorListParams.pageNo?(this.doctorListParams.pageNo++,this.getDoctorList()):(this.loadMoreText="已加载全部",setTimeout((function(){e.loading=!1}),100))},onRefresh:function(){var e=this;setTimeout((function(){e.loading=!0,e.doctorListParams.pageNo=1,e.getDoctorList()}),500)},chooseDateDoc:function(e,t){e?(this.filterIndex=t,this.doctorListParams.show=1):(this.filterIndex=-1,e="",this.doctorListParams.show=0),this.doctorListParams.queryScheduleDate=e,this.doctorListParams.pageNo=1,this.doctorList=null,this.getDoctorList()},goOrderDetailPage:function(e){var t={id:e.chargeId,type:"orderDetail"};o.native.go("/pages/myConsult/myConsult","/myConsult",t)}}};t.default=v}}]);