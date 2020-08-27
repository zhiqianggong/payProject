(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e17a1"],{"7b33":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/user_list"}}},[e._v("用户列表")]),a("el-breadcrumb-item",[e._v("修改用户")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("修改用户")])]),a("el-row",{attrs:{gutter:10}},[a("el-form",{attrs:{model:e.changeMecFrom}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticClass:"reset-select",attrs:{label:"用户ID","label-width":"130px"}},[a("el-input",{attrs:{disabled:""},model:{value:e.changeMecFrom.userId,callback:function(t){e.$set(e.changeMecFrom,"userId",t)},expression:"changeMecFrom.userId"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"用户名","label-width":"130px"}},[a("el-input",{model:{value:e.changeMecFrom.userName,callback:function(t){e.$set(e.changeMecFrom,"userName",t)},expression:"changeMecFrom.userName"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"用户昵称","label-width":"130px"}},[a("el-input",{model:{value:e.changeMecFrom.nickName,callback:function(t){e.$set(e.changeMecFrom,"nickName",t)},expression:"changeMecFrom.nickName"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"密码","label-width":"130px"}},[a("el-input",{attrs:{placeholder:"请填写6到12位密码","show-password":""},model:{value:e.changeMecFrom.passWord,callback:function(t){e.$set(e.changeMecFrom,"passWord",t)},expression:"changeMecFrom.passWord"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"邮箱","label-width":"130px"}},[a("el-input",{model:{value:e.changeMecFrom.email,callback:function(t){e.$set(e.changeMecFrom,"email",t)},expression:"changeMecFrom.email"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{attrs:{label:"手机号","label-width":"130px"}},[a("el-input",{model:{value:e.changeMecFrom.mobile,callback:function(t){e.$set(e.changeMecFrom,"mobile",t)},expression:"changeMecFrom.mobile"}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:24}},[a("el-form-item",{attrs:{label:"超级管理","label-width":"130px"}},[a("el-radio-group",{model:{value:e.changeMecFrom.isSuperAdmin,callback:function(t){e.$set(e.changeMecFrom,"isSuperAdmin",t)},expression:"changeMecFrom.isSuperAdmin"}},[a("el-radio",{attrs:{border:"",label:"1"}},[e._v("是")]),a("el-radio",{attrs:{border:"",label:"0"}},[e._v("否")])],1)],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:24}},[a("el-form-item",{attrs:{label:"状态","label-width":"130px"}},[a("el-radio-group",{model:{value:e.changeMecFrom.status,callback:function(t){e.$set(e.changeMecFrom,"status",t)},expression:"changeMecFrom.status"}},[a("el-radio",{attrs:{border:"",label:"1"}},[e._v("开启")]),a("el-radio",{attrs:{border:"",label:"0"}},[e._v("关闭")])],1)],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{staticClass:"green",attrs:{type:"info"},on:{click:function(t){return e.submitForm()}}},[e._v("保存")]),a("el-button",{attrs:{plain:""},on:{click:e.toPayList}},[e._v("返回")])],1)],1)],1)],1)],1)],1)],1)],1)},l=[],r={data:function(){return{changeMecFrom:{userId:"",userName:"",nickName:"",passWord:"",mobile:"",email:"",isSuperAdmin:"",status:""},detailList:null,tableData:[],search:"",dataList:null,payAccountList:[]}},methods:{getUserDetail:function(){var e=this;this.axios({method:"post",url:"/api/sys/user/get",data:{body:{userId:this.$route.query.id},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){200==t.data.code?(e.dataList=t.data.body,e.changeMecFrom={userId:e.dataList.userId,userName:e.dataList.userName,nickName:e.dataList.nickName,mobile:e.dataList.mobile,email:e.dataList.email,isSuperAdmin:String(e.dataList.isSuperAdmin),status:String(e.dataList.status)}):e.messageInfo(t)})).catch((function(e){console.log(e)}))},submitForm:function(){var e=this;this.axios({method:"post",url:"/api/sys/user/update",data:{body:{userId:this.changeMecFrom.userId,userName:this.changeMecFrom.userName,nickName:this.changeMecFrom.nickName,passWord:this.changeMecFrom.passWord,mobile:this.changeMecFrom.mobile,email:this.changeMecFrom.email,isSuperAdmin:this.changeMecFrom.isSuperAdmin,status:this.changeMecFrom.status},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.messageInfo(t),200==t.data.code&&e.$router.push("user_list")})).catch((function(e){console.log(e)}))},toPayList:function(){this.$router.push("user_list")}},created:function(){this.getUserDetail()}},o=r,i=a("2877"),c=Object(i["a"])(o,s,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e17a1.52b3aec3.js.map