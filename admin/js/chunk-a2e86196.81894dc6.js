(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2e86196"],{"11c3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/telephone_order_list"}}},[t._v("话费通道列表")]),a("el-breadcrumb-item",[t._v("话费通道子账户")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card reset-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("话费通道子账户")])]),a("p",[a("el-button",{staticClass:"green",attrs:{size:"small",type:"info"},on:{click:t.searchAmount}},[t._v("新增账户")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"账户ID","min-width":"100"}}),a("el-table-column",{attrs:{prop:"accountName",label:"账户名称","min-width":"120"}}),a("el-table-column",{attrs:{prop:"ifCode",label:"接口代码","min-width":"150"}}),a("el-table-column",{attrs:{prop:"ifName",label:"接口名称","min-width":"150"}}),a("el-table-column",{attrs:{prop:"ifTypeCode",label:"接口类型代码","min-width":"120"}}),a("el-table-column",{attrs:{prop:"ifTypeName",label:"接口类型名称","min-width":"120"}}),a("el-table-column",{attrs:{prop:"balance",label:"余额","min-width":"100"}}),a("el-table-column",{attrs:{prop:"passageRate",label:"账户数据","min-width":"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s("今日 ：成功金额："+e.row.todayAmount+"元，成功笔数："+e.row.todayCount))]),a("p",[t._v(t._s("昨日 ：成功金额："+e.row.todayAmount+"元，成功笔数："+e.row.todayCount))]),a("p",[t._v(t._s("全部 ：成功金额："+e.row.todayAmount+"元，成功笔数："+e.row.todayCount))])]}}])}),a("el-table-column",{attrs:{prop:"status",label:"账户状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{staticClass:"switchStyle",attrs:{"active-text":"启用","inactive-text":"关闭","active-value":1,"inactive-value":0,"active-color":"#1ab394","inactive-color":"#f56c6c",width:60},on:{change:function(a){return t.changeSwitch(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{staticStyle:{"text-align":"center"},attrs:{label:"操作","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"reset-button green",attrs:{size:"warning"},on:{click:function(a){return t.riskSet(e.row)}}},[t._v("风控")]),a("el-button",{staticClass:"reset-button green",attrs:{size:"warning"},on:{click:function(a){return t.modify(e.row)}}},[t._v("编辑")])]}}])})],1),a("el-pagination",{staticClass:"paginationStyle",attrs:{"current-page":t.currentPage,"page-sizes":[5,10,20,40],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)],1)},s=[],o=(a("eb41"),a("e725"),{data:function(){return{tableData:[],currentPage:1,pagesize:10,mchId:"",pageTotal:null,searchTable:{appId:""}}},filters:{typeFilter:function(t){return 0==t?"禁用":"启用"}},methods:{handleSizeChange:function(t){this.pagesize=t,this.getTableData()},handleCurrentChange:function(t){this.currentPage=t,this.getTableData()},getTableData:function(){var t=this;this.loading=!0,this.axios({method:"post",url:"/api/config/agentpay_passage_account/list",data:{body:{agentpayPassageId:this.$route.query.id,pageIndex:this.currentPage,pageSize:this.pagesize},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(e){t.loading=!1,200==e.data.code||"成功"==e.data.msg?(t.tableData=e.data.body.agentpayAccounts,t.pageTotal=e.data.body.count):t.messageInfo(e)})).catch((function(t){console.log(t)}))},searchAmount:function(){this.$router.push({name:"sub_telephone_add",query:{id:this.$route.query.id}})},searchDetail:function(t){this.$router.push({name:"appDetail",query:{id:t.appId}})},changeSwitch:function(t){var e=this;this.axios({method:"post",url:"/api/config/pay_passage/update",data:{body:{id:t.id,status:t.status},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.messageInfo(t),200==t.data.code&&e.getTableData()})).catch((function(t){console.log(t)}))},riskSet:function(t){this.$router.push({name:"sub_telephone_risk",query:{id:this.$route.query.id,payPassageId:t.id}})},modify:function(t){this.$router.push({name:"sub_telephone_modify",query:{id:this.$route.query.id,payPassageId:t.id}})}},created:function(){this.getTableData()},mounted:function(){var t=this.$refs.table.$refs.bodyWrapper;this.mouseEventFun(t)}}),i=o,r=(a("9871"),a("2877")),l=Object(r["a"])(i,n,s,!1,null,"7b5be7e6",null);e["default"]=l.exports},"120d":function(t,e,a){},9871:function(t,e,a){"use strict";var n=a("120d"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-a2e86196.81894dc6.js.map