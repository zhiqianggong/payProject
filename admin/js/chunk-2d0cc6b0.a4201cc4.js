(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc6b0"],{"4e9b":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-card",{staticClass:"box-card reset-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("资金流水列表")])]),t("p",[t("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"流水ID","prefix-icon":"el-icon-search"},model:{value:e.searchTable.appId,callback:function(a){e.$set(e.searchTable,"appId",a)},expression:"searchTable.appId"}}),t("el-button",{staticClass:"green",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"info"},on:{click:e.searchAmount}},[t("i",{staticClass:"el-icon-search"}),e._v(" 搜索 ")])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"mchId",label:"代理商ID","min-width":"100"}}),t("el-table-column",{attrs:{prop:"appId",label:"变更前余额(元)","min-width":"110"}}),t("el-table-column",{attrs:{prop:"appName",label:"变更金额(元)","min-width":"120"}}),t("el-table-column",{attrs:{prop:"status",label:"变更后余额(元)","min-width":"125"}}),t("el-table-column",{attrs:{prop:"createTime",label:"业务类型","min-width":"150"}}),t("el-table-column",{attrs:{prop:"createTime",label:"业务类目","min-width":"150"}}),t("el-table-column",{attrs:{prop:"createTime",label:"业务订单","min-width":"150"}}),t("el-table-column",{attrs:{prop:"createTime",label:"时间","min-width":"150"}})],1),t("el-pagination",{staticClass:"paginationStyle",attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},n=[],i=(t("eb41"),t("e725"),{data:function(){return{tableData:[],currentPage:1,pagesize:10,mchId:"",pageTotal:null,searchTable:{appId:""}}},filters:{typeFilter:function(e){return 0==e?"禁用":"启用"}},methods:{handleSizeChange:function(e){this.pagesize=e,this.getTableData()},handleCurrentChange:function(e){this.currentPage=e,this.getTableData()},getTableData:function(){var e=this;this.loading=!0,this.axios({method:"post",url:"/api/agent_account/history_list",data:{body:{appId:this.searchTable.appId,mchId:this.mchId,pageIndex:this.currentPage,pageSize:this.pagesize},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){e.loading=!1,e.tableData=a.data.body,200==a.data.code?(e.tableData=a.data.body.mchAppQueryList,e.pageTotal=a.data.body.count):e.messageInfo(a)})).catch((function(a){e.loading=!1,console.log(a)}))},searchAmount:function(){this.currentPage=1,this.getTableData()},searchDetail:function(e){this.$router.push({name:"appDetail",query:{id:e.appId}})}},created:function(){this.getTableData()},mounted:function(){var e=this.$refs.table.$refs.bodyWrapper;this.mouseEventFun(e)}}),s=i,r=t("2877"),o=Object(r["a"])(s,l,n,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0cc6b0.a4201cc4.js.map