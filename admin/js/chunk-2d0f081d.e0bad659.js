(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f081d"],{"9d51":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/transOrder"}}},[e._v("转账订单")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card reset-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("转账订单")])]),a("p",[a("el-date-picker",{staticStyle:{margin:"0 5px 5px 0"},attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH-mm-ss",format:"yyyy 年 MM 月 dd 日",size:"small","picker-options":e.pickerOptions},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),a("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"商户ID","prefix-icon":"el-icon-search"},model:{value:e.mchId,callback:function(t){e.mchId=t},expression:"mchId"}}),a("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"转账订单号","prefix-icon":"el-icon-search"},model:{value:e.searchTable.appId,callback:function(t){e.$set(e.searchTable,"appId",t)},expression:"searchTable.appId"}}),a("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"商户订单号","prefix-icon":"el-icon-search"},model:{value:e.searchTable.appId,callback:function(t){e.$set(e.searchTable,"appId",t)},expression:"searchTable.appId"}}),a("el-select",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"转账状态"},model:{value:e.searchTable.status,callback:function(t){e.$set(e.searchTable,"status",t)},expression:"searchTable.status"}},[a("el-option",{attrs:{label:"转账状态",value:""}}),a("el-option",{attrs:{label:"订单生成",value:"0"}}),a("el-option",{attrs:{label:"转账中",value:"1"}}),a("el-option",{attrs:{label:"转账成功",value:"2"}}),a("el-option",{attrs:{label:"转账失败",value:"3"}}),a("el-option",{attrs:{label:"处理完成",value:"4"}})],1),a("el-button",{staticClass:"green",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"info"},on:{click:e.searchAmount}},[a("i",{staticClass:"el-icon-search"}),e._v(" 搜索 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"transOrderId",label:"转账单号","min-width":"240"}}),a("el-table-column",{attrs:{prop:"mchTransNo",label:"商户单号","min-width":"240"}}),a("el-table-column",{attrs:{prop:"mchId",label:"商户ID","min-width":"120"}}),a("el-table-column",{attrs:{prop:"amount",label:"转账金额","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.amountFormat(t.row.amount)))]}}])}),a("el-table-column",{attrs:{prop:"result",label:"转账状态","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{style:"color:"+e.typeBox[t.row.result].color},[e._v(e._s(e._f("typeFilter")(t.row.result,e.typeBox)))])]}}])}),a("el-table-column",{attrs:{prop:"status",label:"转账结果","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{style:"color:"+e.statusBox[t.row.status].color},[e._v(e._s(e._f("typeFilter")(t.row.status,e.statusBox)))])]}}])}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.getLocalTime(t.row.createTime)))])]}}])}),a("el-table-column",{staticStyle:{"text-align":"center"},attrs:{label:"操作","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"reset-button green",attrs:{size:"warning"},on:{click:function(a){return e.searchDetail(t.row)}}},[e._v("查看")])]}}])})],1),a("el-pagination",{staticClass:"paginationStyle",attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},l=[],s=(a("4de4"),a("b0c0"),{data:function(){return{data:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},tableData:[],currentPage:1,pagesize:10,mchId:"",pageTotal:null,searchTable:{mchId:"",mchTransNo:"",status:"",transOrderId:""},typeBox:[{color:"blue",key:0,name:"不确认结果"},{color:"orangered",key:1,name:"等待手动处理"},{color:"green",key:2,name:"确认成功"},{color:"red",key:3,name:"确认失败"}],statusBox:[{color:"blue",key:0,name:"订单生成"},{color:"orangered",key:1,name:"转账中"},{color:"green",key:2,name:"转账成功"},{color:"red",key:3,name:"转账失败"},{color:"darkgreen",key:4,name:"处理完成"}]}},filters:{typeFilter:function(e,t){var a=t.filter((function(t){if(t.key==e)return t.name}));return a[0].name}},methods:{handleSizeChange:function(e){this.pagesize=e,this.getTableData()},handleCurrentChange:function(e){this.currentPage=e,this.getTableData()},getTableData:function(){var e=this;this.loading=!0,this.axios({method:"post",url:"/api/trans_order/list",data:{body:{createTimeEnd:this.data[1]?this.data[1]:"",createTimeStart:this.data[0]?this.data[0]:"",mchId:this.searchTable.mchId,mchTransNo:this.searchTable.mchTransNo,status:this.searchTable.status,transOrderId:this.searchTable.transOrderId,pageIndex:this.currentPage,pageSize:this.pagesize},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.loading=!1,200==t.data.code?(e.tableData=t.data.body.transOrderLists,e.pageTotal=t.data.body.count):e.messageInfo(t)})).catch((function(e){console.log(e)}))},searchAmount:function(){this.currentPage=1,this.getTableData()},searchDetail:function(e){this.$router.push({name:"trans_order_detail",query:{id:e.transOrderId}})}},created:function(){this.getTableData()},mounted:function(){var e=this.$refs.table.$refs.bodyWrapper;this.mouseEventFun(e)}}),n=s,o=a("2877"),i=Object(o["a"])(n,r,l,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0f081d.e0bad659.js.map