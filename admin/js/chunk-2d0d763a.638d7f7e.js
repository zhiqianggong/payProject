(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d763a"],{7737:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/pay_passage_config"}}},[e._v("支付通道列表")]),t("el-breadcrumb-item",[e._v("新增支付通道")])],1),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("新增支付通道")]),t("span",{staticStyle:{color:"red","font-size":"13px","padding-left":"15px"}},[e._v("带 * 选项为必填项")])]),t("el-row",{attrs:{gutter:10}},[t("el-form",{attrs:{model:e.addTypeFrom}},[t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticClass:"start",attrs:{label:"通道名称","label-width":"130px"}},[t("el-input",{model:{value:e.addTypeFrom.passageName,callback:function(a){e.$set(e.addTypeFrom,"passageName",a)},expression:"addTypeFrom.passageName"}})],1)],1),t("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticClass:"reset-select",attrs:{label:"支付接口","label-width":"130px"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addTypeFrom.ifCode,callback:function(a){e.$set(e.addTypeFrom,"ifCode",a)},expression:"addTypeFrom.ifCode"}},e._l(e.payPort,(function(e){return t("el-option",{key:e.ifCode,attrs:{label:e.ifName,value:e.ifCode}})})),1)],1)],1),t("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticClass:"reset-select",attrs:{label:"支付类型","label-width":"130px"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addTypeFrom.payType,callback:function(a){e.$set(e.addTypeFrom,"payType",a)},expression:"addTypeFrom.payType"}},e._l(e.payType,(function(e){return t("el-option",{key:e.payTypeCode,attrs:{label:e.payTypeName,value:e.payTypeCode}})})),1)],1)],1),t("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"通道费率(%)","label-width":"130px"}},[t("el-input",{model:{value:e.addTypeFrom.passageRate,callback:function(a){e.$set(e.addTypeFrom,"passageRate",a)},expression:"addTypeFrom.passageRate"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"通道状态","label-width":"130px"}},[t("el-radio-group",{model:{value:e.addTypeFrom.status,callback:function(a){e.$set(e.addTypeFrom,"status",a)},expression:"addTypeFrom.status"}},[t("el-radio",{attrs:{border:"",label:"1"}},[e._v("开启")]),t("el-radio",{attrs:{border:"",label:"0"}},[e._v("关闭")])],1)],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"备注信息","label-width":"130px"}},[t("el-input",{model:{value:e.addTypeFrom.remark,callback:function(a){e.$set(e.addTypeFrom,"remark",a)},expression:"addTypeFrom.remark"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticStyle:{"text-align":"center"}},[t("el-button",{staticClass:"green",attrs:{type:"info"},on:{click:function(a){return e.submitForm()}}},[e._v("保存")]),t("el-button",{attrs:{plain:""},on:{click:e.toPayList}},[e._v("返回")])],1)],1)],1)],1)],1)],1)],1)],1)},o=[],l=(t("a9e3"),{data:function(){return{addTypeFrom:{ifCode:"",passageName:"",passageRate:0,payType:"",remark:"",status:"1"},payPort:null,payType:null}},methods:{toPayList:function(){this.$router.push("pay_passage_config")},submitForm:function(){var e=this;this.axios({method:"post",url:"/api/config/pay_passage/add",data:{body:{ifCode:this.addTypeFrom.ifCode,passageName:this.addTypeFrom.passageName,passageRate:Number(this.addTypeFrom.passageRate),payType:this.addTypeFrom.payType,remark:this.addTypeFrom.remark,status:this.addTypeFrom.status},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){e.messageInfo(a),200==a.data.code&&(e.addTypeFrom={ifCode:"",passageName:"",passageRate:0,payType:"",remark:"",status:"1"})})).catch((function(e){console.log(e)}))},getPayType:function(){var e=this;this.axios({method:"post",url:"/api/config/common/pay_type_all",data:{body:{},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){200==a.data.code?e.payType=a.data.body:e.messageInfo(a)})).catch((function(e){console.log(e)}))},getPayPort:function(){var e=this;this.axios({method:"post",url:"/api/config/common/pay_interface_all",data:{body:{},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){200==a.data.code?e.payPort=a.data.body:e.messageInfo(a)})).catch((function(e){console.log(e)}))}},created:function(){this.getPayPort(),this.getPayType()}}),r=l,d=t("2877"),i=Object(d["a"])(r,s,o,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0d763a.638d7f7e.js.map