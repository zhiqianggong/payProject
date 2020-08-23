(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ce84f"],{6098:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/oilCard_order_list"}}},[e._v("代付通道列表")]),a("el-breadcrumb-item",{on:{click:e.toPayList}},[a("router-link",e._b({},"router-link",{to:"/oilCard_sub_account?id="+e.$route.query.id},!1),[e._v("代付通道子账户")])],1),a("el-breadcrumb-item",[e._v("子账户风控配置")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("子账户风控配置")])]),a("el-row",{attrs:{gutter:10}},[a("el-form",{attrs:{model:e.changeMecFrom}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticClass:"reset-select",attrs:{label:"账户名称","label-width":"130px"}},[a("el-input",{attrs:{disabled:""},model:{value:e.changeMecFrom.accountName,callback:function(t){e.$set(e.changeMecFrom,"accountName",t)},expression:"changeMecFrom.accountName"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"风控模式","label-width":"130px"}},[a("el-radio-group",{model:{value:e.changeMecFrom.riskMode,callback:function(t){e.$set(e.changeMecFrom,"riskMode",t)},expression:"changeMecFrom.riskMode"}},[a("el-radio",{attrs:{border:"",label:"1"}},[e._v("开启")]),a("el-radio",{attrs:{border:"",label:"2"}},[e._v("关闭")])],1)],1)],1),2==e.changeMecFrom.riskMode?a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"当天交易金额(元)","label-width":"130px"}},[a("el-input",{model:{value:e.changeMecFrom.maxDayAmount,callback:function(t){e.$set(e.changeMecFrom,"maxDayAmount",t)},expression:"changeMecFrom.maxDayAmount"}})],1)],1):e._e(),2==e.changeMecFrom.riskMode?a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"单笔最大金额(元)","label-width":"130px"}},[a("el-input",{model:{value:e.changeMecFrom.maxEveryAmount,callback:function(t){e.$set(e.changeMecFrom,"maxEveryAmount",t)},expression:"changeMecFrom.maxEveryAmount"}})],1)],1):e._e(),2==e.changeMecFrom.riskMode?a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"单笔最小金额(元)","label-width":"130px"}},[a("el-input",{model:{value:e.changeMecFrom.minEveryAmount,callback:function(t){e.$set(e.changeMecFrom,"minEveryAmount",t)},expression:"changeMecFrom.minEveryAmount"}})],1)],1):e._e(),2==e.changeMecFrom.riskMode?a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticClass:"reset-data",attrs:{label:"交易时间","label-width":"130px"}},[a("el-time-picker",{attrs:{placeholder:"起始时间","picker-options":{selectableRange:"00:00:00 - 23:59:59"}},model:{value:e.changeMecFrom.createTime,callback:function(t){e.$set(e.changeMecFrom,"createTime",t)},expression:"changeMecFrom.createTime"}}),a("el-time-picker",{attrs:{placeholder:"结束时间","arrow-control":"","picker-options":{selectableRange:"00:00:00 - 23:59:59"}},model:{value:e.changeMecFrom.updateTime,callback:function(t){e.$set(e.changeMecFrom,"updateTime",t)},expression:"changeMecFrom.updateTime"}})],1)],1):e._e(),2==e.changeMecFrom.riskMode?a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"风控状态","label-width":"130px"}},[a("el-radio-group",{model:{value:e.changeMecFrom.riskStatus,callback:function(t){e.$set(e.changeMecFrom,"riskStatus",t)},expression:"changeMecFrom.riskStatus"}},[a("el-radio",{attrs:{border:"",label:"1"}},[e._v("开启")]),a("el-radio",{attrs:{border:"",label:"0"}},[e._v("关闭")])],1)],1)],1):e._e(),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{staticClass:"green",attrs:{type:"info"},on:{click:function(t){return e.submitForm()}}},[e._v("保存")]),a("el-button",{attrs:{plain:""},on:{click:e.toPayList}},[e._v("返回")])],1)],1)],1)],1)],1)],1)],1)],1)},o=[],s={data:function(){return{changeMecFrom:{maxDayAmount:0,maxEveryAmount:0,minEveryAmount:0,passageName:"",riskStatus:"1",updateTime:"",createTime:"",riskMode:"",accountName:""},detailList:null,tableData:[],search:"",dataList:null,payAccountList:[]}},methods:{getUserDetail:function(){var e=this;this.axios({method:"post",url:"/api/config/agentpay_passage_account/get",data:{body:{id:this.$route.query.payPassageId},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){200==t.data.code?(e.dataList=t.data.body,e.changeMecFrom={maxDayAmount:0|e.dataList.maxDayAmount,maxEveryAmount:"0"|e.dataList.maxEveryAmount,minEveryAmount:"0"|e.dataList.minEveryAmount,passageName:e.dataList.passageName,riskStatus:e.dataList.riskStatus?String(e.dataList.riskStatus):"1",riskMode:e.dataList.riskMode?String(e.dataList.riskMode):"1",createTime:e.dataList.tradeEndTime,updateTime:e.dataList.tradeStartTime,accountName:e.dataList.accountName}):e.messageInfo(t)})).catch((function(e){console.log(e)}))},submitForm:function(){var e=this;this.axios({method:"post",url:"/api/config/agentpay_passage_account/update",data:{body:{id:this.$route.query.payPassageId,maxDayAmount:this.changeMecFrom.maxDayAmount,maxEveryAmount:this.changeMecFrom.maxEveryAmount,minEveryAmount:this.changeMecFrom.minEveryAmount,passageName:this.changeMecFrom.passageName,riskStatus:this.changeMecFrom.riskStatus,updateTime:this.changeMecFrom.updateTime,createTime:this.changeMecFrom.createTime,riskMode:this.changeMecFrom.riskMode,accountName:this.dataList.accountName},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.messageInfo(t),200==t.data.code&&e.getUserDetail()})).catch((function(e){console.log(e)}))},toPayList:function(){console.log(this.$route.query.id),this.$router.push({name:"oilCard_sub_account",query:{id:this.$route.query.id}})}},created:function(){this.getUserDetail()}},c=s,i=a("2877"),l=Object(i["a"])(c,r,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0ce84f.d67b3995.js.map