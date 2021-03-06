(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f45b"],{d8b3:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/pay_port_list"}}},[e._v("支付接口列表")]),t("el-breadcrumb-item",[e._v("新增支付接口")])],1),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("新增支付接口")])]),t("el-row",{attrs:{gutter:10}},[t("el-form",{attrs:{model:e.addTypeFrom}},[t("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticClass:"reset-select",attrs:{label:"接口类型","label-width":"130px"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addTypeFrom.ifTypeCode,callback:function(a){e.$set(e.addTypeFrom,"ifTypeCode",a)},expression:"addTypeFrom.ifTypeCode"}},e._l(e.payPort,(function(e){return t("el-option",{key:e.ifTypeCode,attrs:{label:e.ifTypeName,value:e.ifTypeCode}})})),1)],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"接口代码","label-width":"130px"}},[t("el-input",{model:{value:e.addTypeFrom.ifCode,callback:function(a){e.$set(e.addTypeFrom,"ifCode",a)},expression:"addTypeFrom.ifCode"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"接口名称","label-width":"130px"}},[t("el-input",{model:{value:e.addTypeFrom.ifName,callback:function(a){e.$set(e.addTypeFrom,"ifName",a)},expression:"addTypeFrom.ifName"}})],1)],1),t("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticClass:"reset-select",attrs:{label:"支付类型","label-width":"130px"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addTypeFrom.payType,callback:function(a){e.$set(e.addTypeFrom,"payType",a)},expression:"addTypeFrom.payType"}},e._l(e.payType,(function(e){return t("el-option",{key:e.payTypeCode,attrs:{label:e.payTypeName,value:e.payTypeCode}})})),1)],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"应用场景","label-width":"130px"}},[t("el-radio-group",{model:{value:e.addTypeFrom.scene,callback:function(a){e.$set(e.addTypeFrom,"scene",a)},expression:"addTypeFrom.scene"}},[t("el-radio",{attrs:{border:"",label:"1"}},[e._v("移动APP")]),t("el-radio",{attrs:{border:"",label:"2"}},[e._v("移动网页")]),t("el-radio",{attrs:{border:"",label:"3"}},[e._v("PC网页")]),t("el-radio",{attrs:{border:"",label:"4"}},[e._v("微信公众号")]),t("el-radio",{attrs:{border:"",label:"5"}},[e._v("手机扫码")])],1)],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"状态","label-width":"130px"}},[t("el-radio-group",{model:{value:e.addTypeFrom.status,callback:function(a){e.$set(e.addTypeFrom,"status",a)},expression:"addTypeFrom.status"}},[t("el-radio",{attrs:{border:"",label:"1"}},[e._v("开启")]),t("el-radio",{attrs:{border:"",label:"0"}},[e._v("关闭")])],1)],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"备注信息","label-width":"130px"}},[t("el-input",{model:{value:e.addTypeFrom.remark,callback:function(a){e.$set(e.addTypeFrom,"remark",a)},expression:"addTypeFrom.remark"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"扩展参数","label-width":"130px"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"当支付类型为网银支付时,可配置支持的银行列表.格式如:[{'bank':'zhonghang','code':'300008'},{'bank':'nonghang','code':'300009'}]"},model:{value:e.addTypeFrom.param,callback:function(a){e.$set(e.addTypeFrom,"param",a)},expression:"addTypeFrom.param"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticStyle:{"text-align":"center"}},[t("el-button",{staticClass:"green",attrs:{type:"info"},on:{click:function(a){return e.submitForm()}}},[e._v("保存")]),t("el-button",{attrs:{plain:""},on:{click:e.toPayList}},[e._v("返回")])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],l={data:function(){return{addTypeFrom:{extra:"",ifCode:"",ifName:"",ifTypeCode:"",param:"",payType:"",remark:"",scene:"1",status:"1"},payPort:null,payType:null}},methods:{toPayList:function(){this.$router.push("pay_port_list")},submitForm:function(){var e=this;this.axios({method:"post",url:"/api/config/pay_interface/add",data:{body:{extra:this.addTypeFrom.extra,ifCode:this.addTypeFrom.ifCode,ifName:this.addTypeFrom.ifName,ifTypeCode:this.addTypeFrom.ifTypeCode,param:this.addTypeFrom.param,payType:this.addTypeFrom.payType,remark:this.addTypeFrom.remark,scene:this.addTypeFrom.scene,status:this.addTypeFrom.status},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){e.messageInfo(a),200==a.data.code&&e.$router.push("pay_port_list")})).catch((function(e){console.log(e)}))},getPayType:function(){var e=this;this.axios({method:"post",url:"/api/config/common/pay_type_all",data:{body:{},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){200==a.data.code?e.payType=a.data.body:e.messageInfo(a)})).catch((function(e){console.log(e)}))},getPayPort:function(){var e=this;this.axios({method:"post",url:"/api/config/common/pay_interface_type_all",data:{body:{},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){200==a.data.code?e.payPort=a.data.body:e.messageInfo(a)})).catch((function(e){console.log(e)}))}},created:function(){this.getPayPort(),this.getPayType()}},s=l,d=t("2877"),i=Object(d["a"])(s,o,r,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d21f45b.3f84ac89.js.map