(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4744"],{"0707":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v(" 修改商户 "),t("span",{staticStyle:{color:"red","font-size":"13px","padding-left":"15px"}},[e._v("带 * 选项为必填项")])])]),t("el-alert",{staticClass:"reset-hint",attrs:{title:"用户管理",type:"success",closable:!1}}),t("el-row",{attrs:{gutter:10}},[t("el-form",{attrs:{model:e.changeMecFrom}},[t("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"商户名称","label-width":"130px"}},[t("el-input",{model:{value:e.changeMecFrom.name,callback:function(a){e.$set(e.changeMecFrom,"name",a)},expression:"changeMecFrom.name"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticClass:"reset-select",attrs:{label:"所属代理商","label-width":"130px"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.changeMecFrom.agentId,callback:function(a){e.$set(e.changeMecFrom,"agentId",a)},expression:"changeMecFrom.agentId"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"用户名","label-width":"130px"}},[t("el-input",{model:{value:e.changeMecFrom.userName,callback:function(a){e.$set(e.changeMecFrom,"userName",a)},expression:"changeMecFrom.userName"}})],1)],1),t("el-col",{staticClass:"start",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"邮箱","label-width":"130px"}},[t("el-input",{model:{value:e.changeMecFrom.email,callback:function(a){e.$set(e.changeMecFrom,"email",a)},expression:"changeMecFrom.email"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"手机号","label-width":"130px"}},[t("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g, '')"},model:{value:e.changeMecFrom.mobile,callback:function(a){e.$set(e.changeMecFrom,"mobile",a)},expression:"changeMecFrom.mobile"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"线下充值费率(%)","label-width":"130px"}},[t("el-input",{model:{value:e.changeMecFrom.mchRate,callback:function(a){e.$set(e.changeMecFrom,"mchRate",a)},expression:"changeMecFrom.mchRate"}})],1)],1),t("el-alert",{staticClass:"reset-hint",attrs:{title:"安全信息",type:"success",closable:!1}}),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"谷歌验证","label-width":"130px"}},[t("el-radio-group",{model:{value:e.changeMecFrom.googleAuthStatus,callback:function(a){e.$set(e.changeMecFrom,"googleAuthStatus",a)},expression:"changeMecFrom.googleAuthStatus"}},[t("el-radio",{attrs:{border:"",label:"0"}},[e._v("未绑定")]),t("el-radio",{attrs:{border:"",label:"1"}},[e._v("已绑定")])],1)],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticClass:"reset-select",attrs:{label:"登录安全类型","label-width":"130px"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.changeMecFrom.loginSecurityType,callback:function(a){e.$set(e.changeMecFrom,"loginSecurityType",a)},expression:"changeMecFrom.loginSecurityType"}},[t("el-option",{attrs:{label:"仅登录密码验证",value:"1"}}),t("el-option",{attrs:{label:"登录密码+谷歌组合验证",value:"2"}})],1)],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticClass:"reset-select",attrs:{label:"支付安全类型","label-width":"130px"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.changeMecFrom.paySecurityType,callback:function(a){e.$set(e.changeMecFrom,"paySecurityType",a)},expression:"changeMecFrom.paySecurityType"}},[t("el-option",{attrs:{label:"无需验证",value:"0"}}),t("el-option",{attrs:{label:"仅支付密码验证",value:"1"}}),t("el-option",{attrs:{label:"仅谷歌验证",value:"2"}}),t("el-option",{attrs:{label:"支付密码+谷歌组合验证",value:"3"}})],1)],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"登录密码","label-width":"130px"}},[t("el-input",{attrs:{placeholder:"若修改请输入新密码，8-16位的字母和数字组合"},model:{value:e.changeMecFrom.password,callback:function(a){e.$set(e.changeMecFrom,"password",a)},expression:"changeMecFrom.password"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"支付密码","label-width":"130px"}},[t("el-input",{attrs:{placeholder:"若修改请输入新密码，8-16位的字母和数字组合"},model:{value:e.changeMecFrom.payPassword,callback:function(a){e.$set(e.changeMecFrom,"payPassword",a)},expression:"changeMecFrom.payPassword"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"登录IP白名单","label-width":"130px"}},[t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入登录白名单,多个IP半角逗号分隔"},model:{value:e.changeMecFrom.loginWhiteIp,callback:function(a){e.$set(e.changeMecFrom,"loginWhiteIp",a)},expression:"changeMecFrom.loginWhiteIp"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"登录IP黑名单","label-width":"130px"}},[t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入登录黑名单,多个IP半角逗号分隔"},model:{value:e.changeMecFrom.loginBlackIp,callback:function(a){e.$set(e.changeMecFrom,"loginBlackIp",a)},expression:"changeMecFrom.loginBlackIp"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"支付IP白名单","label-width":"130px"}},[t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入支付白名单,多个IP半角逗号分隔"},model:{value:e.changeMecFrom.payWhiteIp,callback:function(a){e.$set(e.changeMecFrom,"payWhiteIp",a)},expression:"changeMecFrom.payWhiteIp"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"支付IP黑名单","label-width":"130px"}},[t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入支付黑名单,多个IP半角逗号分隔"},model:{value:e.changeMecFrom.payBlackIp,callback:function(a){e.$set(e.changeMecFrom,"payBlackIp",a)},expression:"changeMecFrom.payBlackIp"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"代付IP白名单","label-width":"130px"}},[t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入代付白名单,多个IP半角逗号分隔"},model:{value:e.changeMecFrom.agentpayWhiteIp,callback:function(a){e.$set(e.changeMecFrom,"agentpayWhiteIp",a)},expression:"changeMecFrom.agentpayWhiteIp"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{attrs:{label:"代付IP黑名单","label-width":"130px"}},[t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入代付黑名单,多个IP半角逗号分隔"},model:{value:e.changeMecFrom.agentpayBlackIp,callback:function(a){e.$set(e.changeMecFrom,"agentpayBlackIp",a)},expression:"changeMecFrom.agentpayBlackIp"}})],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-form-item",{staticStyle:{"text-align":"center"}},[t("el-button",{staticClass:"green",attrs:{type:"info"},on:{click:function(a){return e.submitForm()}}},[e._v("添加")]),t("el-button",{attrs:{plain:""},on:{click:function(a){return e.$router.push("/agentList")}}},[e._v("返回")])],1)],1)],1)],1)],1)],1)],1)],1)},c=[],s=(t("b0c0"),{data:function(){return{changeMecFrom:{agentId:"",agentpayBalance:0,agentpayBlackIp:"",agentpayWhiteIp:"",balance:0,email:"",googleAuthStatus:"0",loginBlackIp:"",loginSecurityType:"1",loginWhiteIp:"",mchId:0,mchRate:"",mobile:0,name:"",password:"",payBlackIp:"",payPassword:"",paySecurityType:"1",payWhiteIp:"",securityMoney:0,userName:""},detailList:null,tableData:[],search:""}},methods:{handleEdit:function(e,a){console.log(e,a)},handleDelete:function(e,a){console.log(e,a)},getUserDetail:function(){var e=this;this.axios({method:"post",url:"/api/mch_info/get",data:{body:{mchId:this.$route.query.id},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){200==a.data.code?(e.detailList=a.data.body,e.changeMecFrom.name=e.detailList.name,e.changeMecFrom.userName=e.detailList.userName,e.changeMecFrom.email=e.detailList.email,e.changeMecFrom.mobile=e.detailList.mobile,e.changeMecFrom.mchRate=e.detailList.mchRate?e.detailList.mchRate:0):e.messageInfo(a)})).catch((function(e){console.log(e)}))},submitForm:function(){var e=this;this.axios({method:"post",url:"/api/mch_info/update",data:{body:{agentId:this.changeMecFrom.agentId,agentpayBalance:this.changeMecFrom.agentpayBalance,agentpayBlackIp:this.changeMecFrom.agentpayBlackIp,agentpayWhiteIp:this.changeMecFrom.agentpayWhiteIp,balance:this.changeMecFrom.balance,email:this.changeMecFrom.email,googleAuthStatus:this.changeMecFrom.googleAuthStatus,loginBlackIp:this.changeMecFrom.loginBlackIp,loginSecurityType:this.changeMecFrom.loginSecurityType,loginWhiteIp:this.changeMecFrom.loginWhiteIp,mchId:this.$route.query.id,mchRate:this.changeMecFrom.mchRate,mobile:this.changeMecFrom.mobile,name:this.changeMecFrom.name,password:this.changeMecFrom.password,payBlackIp:this.changeMecFrom.payBlackIp,payPassword:this.changeMecFrom.payPassword,paySecurityType:this.changeMecFrom.paySecurityType,payWhiteIp:this.changeMecFrom.payWhiteIp,securityMoney:this.changeMecFrom.securityMoney,userName:this.changeMecFrom.userName},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){e.messageInfo(a),200==a.data.code&&(e.changeMecFrom={agentId:"",agentpayBalance:0,agentpayBlackIp:"",agentpayWhiteIp:"",balance:0,email:"",googleAuthStatus:"0",loginBlackIp:"",loginSecurityType:"1",loginWhiteIp:"",mchId:0,mchRate:"",mobile:0,name:"",password:"",payBlackIp:"",payPassword:"",paySecurityType:"1",payWhiteIp:"",securityMoney:0,userName:""},e.getUserDetail())})).catch((function(e){console.log(e)}))}},created:function(){this.getUserDetail()}}),o=s,r=t("2877"),n=Object(r["a"])(o,l,c,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0a4744.bc08d6cb.js.map