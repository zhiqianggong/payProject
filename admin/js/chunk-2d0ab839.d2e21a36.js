(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab839"],{1631:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/pay_product_list"}}},[t._v("支付产品")]),a("el-breadcrumb-item",[t._v("新增支付产品")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("新增支付产品")]),a("span",{staticStyle:{color:"red","font-size":"13px","padding-left":"15px"}},[t._v("带 * 选项为必填项")])]),a("el-row",{attrs:{gutter:10}},[a("el-form",{attrs:{model:t.addTypeFrom}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticClass:"start",attrs:{label:"产品名称","label-width":"130px"}},[a("el-input",{model:{value:t.addTypeFrom.productName,callback:function(e){t.$set(t.addTypeFrom,"productName",e)},expression:"addTypeFrom.productName"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"产品类型","label-width":"130px"}},[a("el-radio-group",{model:{value:t.addTypeFrom.productType,callback:function(e){t.$set(t.addTypeFrom,"productType",e)},expression:"addTypeFrom.productType"}},[a("el-radio",{attrs:{border:"",label:"1"}},[t._v("收款")]),a("el-radio",{attrs:{border:"",label:"0"}},[t._v("充值")])],1)],1)],1),a("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticClass:"reset-select",attrs:{label:"支付类型","label-width":"130px"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.addTypeFrom.payType,callback:function(e){t.$set(t.addTypeFrom,"payType",e)},expression:"addTypeFrom.payType"}},t._l(t.payType,(function(t){return a("el-option",{key:t.payTypeCode,attrs:{label:t.payTypeName,value:t.payTypeCode}})})),1)],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"状态","label-width":"130px"}},[a("el-radio-group",{model:{value:t.addTypeFrom.status,callback:function(e){t.$set(t.addTypeFrom,"status",e)},expression:"addTypeFrom.status"}},[a("el-radio",{attrs:{border:"",label:"1"}},[t._v("开启")]),a("el-radio",{attrs:{border:"",label:"0"}},[t._v("关闭")])],1)],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{staticClass:"green",attrs:{type:"info"},on:{click:function(e){return t.submitForm()}}},[t._v("保存")]),a("el-button",{attrs:{plain:""},on:{click:t.toPayList}},[t._v("返回")])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],s={data:function(){return{addTypeFrom:{payType:"",productName:"",productType:"1",status:"1"},payType:null}},methods:{toPayList:function(){this.$router.push("pay_product_list")},submitForm:function(){var t=this;this.axios({method:"post",url:"/api/config/pay_product/add",data:{body:{payType:this.addTypeFrom.payType,productName:this.addTypeFrom.productName,productType:this.addTypeFrom.productType,status:this.addTypeFrom.status},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(e){t.messageInfo(e),200==e.data.code&&t.$router.push("pay_product_list")})).catch((function(t){console.log(t)}))},getPayType:function(){var t=this;this.axios({method:"post",url:"/api/config/common/pay_type_all",data:{body:{},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(e){200==e.data.code?t.payType=e.data.body:t.messageInfo(e)})).catch((function(t){console.log(t)}))}},created:function(){this.getPayType()}},l=s,d=a("2877"),p=Object(d["a"])(l,o,r,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0ab839.d2e21a36.js.map