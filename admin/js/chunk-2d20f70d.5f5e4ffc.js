(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f70d"],{b449:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/payment_audit"}}},[e._v("代付审核列表")])],1),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t("el-card",{staticClass:"box-card reset-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("代付审核列表")])]),t("p",[t("el-date-picker",{staticStyle:{margin:"0 5px 5px 0"},attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH-mm-ss",format:"yyyy 年 MM 月 dd 日",size:"small","picker-options":e.pickerOptions},model:{value:e.data,callback:function(a){e.data=a},expression:"data"}}),t("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"商户ID","prefix-icon":"el-icon-search"},model:{value:e.searchTable.mchId,callback:function(a){e.$set(e.searchTable,"mchId",a)},expression:"searchTable.mchId"}}),t("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"账户名","prefix-icon":"el-icon-search"},model:{value:e.searchTable.accountName,callback:function(a){e.$set(e.searchTable,"accountName",a)},expression:"searchTable.accountName"}}),t("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"商户单号","prefix-icon":"el-icon-search"},model:{value:e.searchTable.mchOrderNo,callback:function(a){e.$set(e.searchTable,"mchOrderNo",a)},expression:"searchTable.mchOrderNo"}}),t("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"代付单号","prefix-icon":"el-icon-search"},model:{value:e.searchTable.agentpayOrderId,callback:function(a){e.$set(e.searchTable,"agentpayOrderId",a)},expression:"searchTable.agentpayOrderId"}}),t("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"转账单号","prefix-icon":"el-icon-search"},model:{value:e.searchTable.transOrderId,callback:function(a){e.$set(e.searchTable,"transOrderId",a)},expression:"searchTable.transOrderId"}}),t("el-select",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"代付渠道"},model:{value:e.searchTable.agentpayChannel,callback:function(a){e.$set(e.searchTable,"agentpayChannel",a)},expression:"searchTable.agentpayChannel"}},[t("el-option",{attrs:{label:"代付渠道",value:""}}),t("el-option",{attrs:{label:"商户后台",value:"1"}}),t("el-option",{attrs:{label:"API接口",value:"2"}})],1),t("el-button",{staticClass:"green",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"info"},on:{click:e.searchAmount}},[t("i",{staticClass:"el-icon-search"}),e._v(" 搜索 ")])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"mchId",label:"商户ID","min-width":"100"}}),t("el-table-column",{attrs:{prop:"agentpayOrderId",label:"代付单号","min-width":"220"}}),t("el-table-column",{attrs:{prop:"mchOrderNo",label:"商户单号","min-width":"240"}}),t("el-table-column",{attrs:{prop:"accountName",label:"账户名","min-width":"120"}}),t("el-table-column",{attrs:{prop:"accountNo",label:"账户","min-width":"120"}}),t("el-table-column",{attrs:{prop:"amount",label:"代付金额(元)","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v(e._s(e.amountFormat(a.row.amount)))]}}])}),t("el-table-column",{attrs:{prop:"fee",label:"手续费(元)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v(e._s(e.amountFormat(a.row.fee)))]}}])}),t("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(e._f("typeFilter")(a.row.status,e.typeBox)))])]}}])}),t("el-table-column",{attrs:{prop:"agentpayChannel",label:"代付渠道","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(1==a.row.agentpayChannel?"商户后台":"API接口"))])]}}])}),t("el-table-column",{attrs:{prop:"createTime",label:"时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(e.getLocalTime(a.row.createTime)))])]}}])}),t("el-table-column",{staticStyle:{"text-align":"center"},attrs:{label:"操作","min-width":"240"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{staticClass:"reset-button green",attrs:{size:"warning"},on:{click:function(t){return e.searchDetail(a.row)}}},[e._v("查看")]),t("el-button",{staticClass:"reset-button yellow",attrs:{size:"warning"},on:{click:function(t){return e.success(a.row)}}},[e._v("审核成功")]),t("el-button",{staticClass:"reset-button red",attrs:{size:"warning"},on:{click:function(t){return e.shibai(a.row)}}},[e._v("审核失败")])]}}])})],1),t("el-pagination",{staticClass:"paginationStyle",attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},s=[],r=(t("4de4"),t("b0c0"),{data:function(){return{tableData:[],currentPage:1,pagesize:10,mchId:null,pageTotal:null,searchTable:{accountName:null,agentpayChannel:null,agentpayOrderId:null,mchId:null,mchOrderNo:null,status:null,transOrderId:null},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",[t,a])}},{text:"最近一个月",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-2592e6),e.$emit("pick",[t,a])}},{text:"最近三个月",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-7776e6),e.$emit("pick",[t,a])}}]},search:"",data:[],typeBox:[{key:0,name:"待审核"},{key:1,name:"转账中"},{key:2,name:"转账成功"},{key:3,name:"转账失败"},{key:4,name:"审核失败"}]}},filters:{typeFilter:function(e,a){var t=a.filter((function(a){if(a.key==e)return a.name}));return t[0].name}},methods:{handleSizeChange:function(e){this.pagesize=e,this.getTableData()},handleCurrentChange:function(e){this.currentPage=e,this.getTableData()},getTableData:function(){var e=this;this.loading=!0,this.axios({method:"post",url:"/api/agentpay/audit_list",data:{body:{accountName:this.searchTable.accountName,agentpayChannel:this.searchTable.agentpayChannel,agentpayOrderId:this.searchTable.agentpayOrderId,mchId:this.searchTable.mchId,mchOrderNo:this.searchTable.mchOrderNo,status:this.searchTable.status,transOrderId:this.searchTable.transOrderId,pageIndex:this.currentPage,pageSize:this.pagesize,createTimeEnd:this.data[1]?this.data[1]:null,createTimeStart:this.data[0]?this.data[0]:null},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(a){e.loading=!1,200==a.data.code?(console.log(a.data.body.agentPayRecordLists),e.tableData=a.data.body.agentPayRecordLists,e.pageTotal=a.data.body.count):e.messageInfo(a)})).catch((function(e){console.log(e)}))},searchAmount:function(){this.currentPage=1,this.getTableData()},searchDetail:function(e){this.$router.push({name:"audit_detail",query:{id:e.agentpayOrderId}})},success:function(e){var a=this;this.$confirm("审核单号".concat(e.agentpayOrderId),"提交审核成功",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then((function(){a.axios({method:"post",url:"/api/agentpay/audit_success",data:{body:{agentpayOrderId:e.agentpayOrderId},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(e){200==e.data.code?(a.$message({showClose:!0,message:e.data.message,type:"success"}),a.getTableData()):a.$message({showClose:!0,message:e.data.message,type:"warning"})})).catch((function(e){console.log(e)}))})).catch((function(){a.$message({type:"info",message:"已取消审核"})}))},shibai:function(e){var a=this;this.$confirm("审核单号".concat(e.agentpayOrderId),"提交审核失败",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.axios({method:"post",url:"/api/agentpay/audit_failed",data:{body:{agentpayOrderId:e.agentpayOrderId},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(e){200==e.data.code?(a.$message({showClose:!0,message:e.data.message,type:"success"}),a.getTableData()):a.$message({showClose:!0,message:e.data.message,type:"warning"})})).catch((function(e){console.log(e)}))})).catch((function(){a.$message({type:"info",message:"已取消审核"})}))}},created:function(){this.getTableData()},mounted:function(){var e=this.$refs.table.$refs.bodyWrapper;this.mouseEventFun(e)}}),l=r,i=t("2877"),o=Object(i["a"])(l,n,s,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d20f70d.5f5e4ffc.js.map