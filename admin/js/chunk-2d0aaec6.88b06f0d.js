(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aaec6"],{"12a0":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/appManage"}}},[e._v("应用列表")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card reset-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("应用列表")])]),a("p",[a("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"应用ID","prefix-icon":"el-icon-search"},model:{value:e.searchTable.appId,callback:function(t){e.$set(e.searchTable,"appId",t)},expression:"searchTable.appId"}}),a("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"商户ID","prefix-icon":"el-icon-search"},model:{value:e.mchId,callback:function(t){e.mchId=t},expression:"mchId"}}),a("el-button",{staticClass:"green",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"info"},on:{click:e.searchAmount}},[a("i",{staticClass:"el-icon-search"}),e._v(" 搜索 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"mchId",label:"商户id","min-width":"100"}}),a("el-table-column",{attrs:{prop:"appId",label:"商户应用Id","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[e._v(e._s(t.row.appId))]),a("div",{staticClass:"name-wrapper",staticStyle:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(t.row.appId))])])])]}}])}),a("el-table-column",{attrs:{prop:"appName",label:"商户应用名称","min-width":"120"}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("typeFilter")(t.row.status)))])]}}])}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.getLocalTime(t.row.createTime)))])]}}])}),a("el-table-column",{staticStyle:{"text-align":"center"},attrs:{label:"操作","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"reset-button green",attrs:{size:"warning"},on:{click:function(a){return e.searchDetail(t.row)}}},[e._v("查看")])]}}])})],1),a("el-pagination",{staticClass:"paginationStyle",attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},l=[],n={data:function(){return{tableData:[],currentPage:1,pagesize:10,mchId:"",pageTotal:null,searchTable:{appId:""}}},filters:{typeFilter:function(e){return 0==e?"禁用":"启用"}},methods:{handleSizeChange:function(e){this.pagesize=e,this.getTableData()},handleCurrentChange:function(e){this.currentPage=e,this.getTableData()},getTableData:function(){var e=this;this.loading=!0,this.axios({method:"post",url:"/api/app/list",data:{body:{appId:this.searchTable.appId,mchId:this.mchId,pageIndex:this.currentPage,pageSize:this.pagesize},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.loading=!1,200==t.data.code?(e.tableData=t.data.body.mchAppQueryList,e.pageTotal=t.data.body.count):e.messageInfo(t)})).catch((function(e){console.log(e)}))},searchAmount:function(){this.currentPage=1,this.getTableData()},searchDetail:function(e){this.$router.push({name:"appDetail",query:{id:e.appId}})}},created:function(){this.getTableData()},mounted:function(){var e=this.$refs.table.$refs.bodyWrapper;this.mouseEventFun(e)}},r=n,i=a("2877"),o=Object(i["a"])(r,s,l,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0aaec6.88b06f0d.js.map