(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217aec"],{c889:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/payment_order_list"}}},[e._v("代付通道列表")]),a("el-breadcrumb-item",[e._v("新增代付通道")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("新增代付通道")]),a("span",{staticStyle:{color:"red","font-size":"13px","padding-left":"15px"}},[e._v("带 * 选项为必填项")])]),a("el-row",{attrs:{gutter:10}},[a("el-form",{attrs:{model:e.addTypeFrom}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticClass:"start",attrs:{label:"通道名称","label-width":"130px"}},[a("el-input",{model:{value:e.addTypeFrom.passageName,callback:function(t){e.$set(e.addTypeFrom,"passageName",t)},expression:"addTypeFrom.passageName"}})],1)],1),a("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticClass:"reset-select",attrs:{label:"支付接口","label-width":"130px"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addTypeFrom.ifCode,callback:function(t){e.$set(e.addTypeFrom,"ifCode",t)},expression:"addTypeFrom.ifCode"}},e._l(e.payPort,(function(e){return a("el-option",{key:e.ifCode,attrs:{label:e.ifName,value:e.ifCode}})})),1)],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"手续费类型","label-width":"130px"}},[a("el-radio-group",{model:{value:e.addTypeFrom.feeType,callback:function(t){e.$set(e.addTypeFrom,"feeType",t)},expression:"addTypeFrom.feeType"}},[a("el-radio",{attrs:{border:"",label:"1"}},[e._v("百分比收费")]),a("el-radio",{attrs:{border:"",label:"2"}},[e._v("固定收费")])],1)],1)],1),1==e.addTypeFrom.feeType?a("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"手续费费率(%)","label-width":"130px"}},[a("el-input",{model:{value:e.addTypeFrom.feeRate,callback:function(t){e.$set(e.addTypeFrom,"feeRate",t)},expression:"addTypeFrom.feeRate"}})],1)],1):a("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"每笔手续费(元)","label-width":"130px"}},[a("el-input",{model:{value:e.addTypeFrom.feeEvery,callback:function(t){e.$set(e.addTypeFrom,"feeEvery",t)},expression:"addTypeFrom.feeEvery"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"通道状态","label-width":"130px"}},[a("el-radio-group",{model:{value:e.addTypeFrom.status,callback:function(t){e.$set(e.addTypeFrom,"status",t)},expression:"addTypeFrom.status"}},[a("el-radio",{attrs:{border:"",label:"1"}},[e._v("开启")]),a("el-radio",{attrs:{border:"",label:"0"}},[e._v("关闭")])],1)],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"备注信息","label-width":"130px"}},[a("el-input",{model:{value:e.addTypeFrom.remark,callback:function(t){e.$set(e.addTypeFrom,"remark",t)},expression:"addTypeFrom.remark"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{staticClass:"green",attrs:{type:"info"},on:{click:function(t){return e.submitForm()}}},[e._v("保存")]),a("el-button",{attrs:{plain:""},on:{click:e.toPayList}},[e._v("返回")])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],l={data:function(){return{addTypeFrom:{feeType:"1",passageName:"",feeRate:"",feeEvery:"",status:"1",ifCode:"",remark:""},payPort:null}},methods:{toPayList:function(){this.$router.push("payment_order_list")},submitForm:function(){var e=this;this.axios({method:"post",url:"/api/config/agentpay_passage/add",data:{body:{feeType:this.addTypeFrom.feeType,passageName:this.addTypeFrom.passageName,feeRate:1==this.addTypeFrom.feeType?this.addTypeFrom.feeRate:null,feeEvery:2==this.addTypeFrom.feeType?100*this.addTypeFrom.feeEvery:null,status:this.addTypeFrom.status,ifCode:this.addTypeFrom.ifCode,remark:this.addTypeFrom.remark},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.messageInfo(t),200==t.data.code&&e.$router.push("payment_order_list")})).catch((function(e){console.log(e)}))},getPayPort:function(){var e=this;this.axios({method:"post",url:"/api/config/common/pay_interface_all",data:{body:{},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){200==t.data.code?e.payPort=t.data.body:e.messageInfo(t)})).catch((function(e){console.log(e)}))}},created:function(){this.getPayPort()}},o=l,d=a("2877"),i=Object(d["a"])(o,s,r,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d217aec.1f0a2ae0.js.map