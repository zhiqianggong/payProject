(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bfe7af2"],{6621:function(e,r,t){},8127:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"login_frame"}},[t("h3",{attrs:{id:"image_logo"}},[e._v("注册成为会员")]),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"账号",prop:"age"}},[t("el-input",{model:{value:e.ruleForm.age,callback:function(r){e.$set(e.ruleForm,"age",e._n(r))},expression:"ruleForm.age"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1),t("p",{staticStyle:{"text-align":"right"}},[e._v("已经有账号? "),t("router-link",{staticStyle:{color:"#000"},attrs:{to:{name:"login"}}},[e._v("点击登录")])],1),t("p",{staticStyle:{"text-align":"center"}},[t("el-button",{attrs:{type:"primary",plain:"",round:""},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("点击注册")])],1)],1)],1)},s=[],l={name:"pages",data:function(){var e=this,r=function(r,t,a){""===t?a(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),a())},t=function(r,t,a){""===t?a(new Error("请再次输入密码")):t!==e.ruleForm.pass?a(new Error("两次输入密码不一致!")):a()};return{ruleForm:{pass:"",checkPass:"",age:""},rules:{pass:[{validator:r,trigger:"blur"}],checkPass:[{validator:t,trigger:"blur"}]}}},methods:{submitForm:function(){}}},o=l,n=(t("d5b4"),t("2877")),u=Object(n["a"])(o,a,s,!1,null,null,null);r["default"]=u.exports},d5b4:function(e,r,t){"use strict";var a=t("6621"),s=t.n(a);s.a}}]);
//# sourceMappingURL=chunk-0bfe7af2.87c6e68c.js.map