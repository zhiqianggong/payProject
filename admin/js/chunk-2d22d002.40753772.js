(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d002"],{f640:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/notify"}}},[e._v("商户通知")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card reset-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("商户通知")])]),a("p",[a("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"订单号","prefix-icon":"el-icon-search"},model:{value:e.searchTable.orderId,callback:function(t){e.$set(e.searchTable,"orderId",t)},expression:"searchTable.orderId"}}),a("el-select",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"类型"},model:{value:e.searchTable.orderType,callback:function(t){e.$set(e.searchTable,"orderType",t)},expression:"searchTable.orderType"}},[a("el-option",{attrs:{label:"类型",value:""}}),a("el-option",{attrs:{label:"支付",value:"1"}}),a("el-option",{attrs:{label:"转账",value:"2"}}),a("el-option",{attrs:{label:"退款",value:"3"}}),a("el-option",{attrs:{label:"代付",value:"4"}})],1),a("el-select",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"通知状态"},model:{value:e.searchTable.status,callback:function(t){e.$set(e.searchTable,"status",t)},expression:"searchTable.status"}},[a("el-option",{attrs:{label:"通知状态",value:""}}),a("el-option",{attrs:{label:"通知中",value:"1"}}),a("el-option",{attrs:{label:"通知成功",value:"2"}}),a("el-option",{attrs:{label:"通知失败",value:"3"}})],1),a("el-button",{staticClass:"green",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"info"},on:{click:e.searchAmount}},[a("i",{staticClass:"el-icon-search"}),e._v(" 搜索 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"orderId",label:"订单号","min-width":"240"}}),a("el-table-column",{attrs:{prop:"mchId",label:"商户ID","min-width":"110"}}),a("el-table-column",{attrs:{prop:"orderType",label:"订单类型","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("typeFilter")(t.row.orderType,e.typeBox)))])]}}])}),a("el-table-column",{attrs:{prop:"notifyCount",label:"通知次数","min-width":"120"}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("typeFilter")(t.row.status,e.statusBox)))])]}}])}),a("el-table-column",{attrs:{prop:"lastNotifyTime",label:"最后通知","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.getLocalTime(t.row.lastNotifyTime)))])]}}])}),a("el-table-column",{staticStyle:{"text-align":"center"},attrs:{label:"操作","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"reset-button green",attrs:{size:"warning"},on:{click:function(a){return e.searchDetail(t.row)}}},[e._v("查看")]),a("el-button",{class:2==t.row.status?"reset-button":"reset-button yellow",attrs:{size:"warning",disabled:2==t.row.status},on:{click:function(a){return e.send(t.row)}}},[e._v("重发通知")])]}}])})],1),a("el-pagination",{staticClass:"paginationStyle",attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},s=[],r=(a("4de4"),a("b0c0"),{data:function(){return{tableData:[],currentPage:1,pagesize:10,mchId:"",pageTotal:null,searchTable:{orderId:"",orderType:"",status:""},statusBox:[{color:"blue",key:1,name:"通知中"},{color:"blue",key:2,name:"通知成功"},{color:"blue",key:3,name:"通知失败"}],typeBox:[{key:1,name:"支付"},{key:2,name:"转账"},{key:4,name:"退款"}]}},filters:{typeFilter:function(e,t){var a=t.filter((function(t){if(t.key==e)return t.name}));return console.log(a),a[0]?a[0].name:""}},methods:{handleSizeChange:function(e){this.pagesize=e,this.getTableData()},handleCurrentChange:function(e){this.currentPage=e,this.getTableData()},getTableData:function(){var e=this;this.loading=!0,this.axios({method:"post",url:"/api/mch_notify/list",data:{body:{orderId:this.searchTable.orderId,orderType:this.searchTable.orderType,status:this.searchTable.status,pageIndex:this.currentPage,pageSize:this.pagesize},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.loading=!1,200==t.data.code?(e.tableData=t.data.body.mchNotifyLists,e.pageTotal=t.data.body.count):e.messageInfo(t)})).catch((function(e){console.log(e)}))},searchAmount:function(){this.currentPage=1,this.getTableData()},searchDetail:function(e){this.$router.push({name:"notify_detail",query:{id:e.orderId}})},send:function(e){var t=this;this.axios({method:"post",url:"/api/mch_notify/resend",data:{body:{orderId:e.orderId},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(e){t.messageInfo(e)})).catch((function(e){console.log(e)}))}},created:function(){this.getTableData()},mounted:function(){var e=this.$refs.table.$refs.bodyWrapper;this.mouseEventFun(e)}}),n=r,o=a("2877"),i=Object(o["a"])(n,l,s,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d22d002.40753772.js.map