(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207ed9"],{a32c:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card reset-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("商户充值排行")])]),a("p",[a("el-date-picker",{staticStyle:{margin:"0 5px 5px 0"},attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH-mm-ss",format:"yyyy 年 MM 月 dd 日",size:"small","picker-options":e.pickerOptions},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),a("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"代理商ID","prefix-icon":"el-icon-search"},model:{value:e.searchTable.agentId,callback:function(t){e.$set(e.searchTable,"agentId",t)},expression:"searchTable.agentId"}}),a("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"商户ID","prefix-icon":"el-icon-search"},model:{value:e.searchTable.mchId,callback:function(t){e.$set(e.searchTable,"mchId",t)},expression:"searchTable.mchId"}}),a("el-select",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"产品类型"},model:{value:e.searchTable.productType,callback:function(t){e.$set(e.searchTable,"productType",t)},expression:"searchTable.productType"}},[a("el-option",{attrs:{label:"产品类型",value:""}}),a("el-option",{attrs:{label:"收款",value:"2"}}),a("el-option",{attrs:{label:"充值",value:"3"}})],1),a("el-button",{staticClass:"green",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"info"},on:{click:e.searchAmount}},[a("i",{staticClass:"el-icon-search"}),e._v(" 搜索 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"mchId",label:"商户ID","min-width":"240"}}),a("el-table-column",{attrs:{prop:"mchName",label:"商户名称","min-width":"120"}}),a("el-table-column",{attrs:{prop:"totalAmount",label:"充值金额","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.amountFormat(t.row.totalAmount)))]}}])}),a("el-table-column",{attrs:{prop:"totalMchIncome",label:"入账金额","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.amountFormat(t.row.totalMchIncome)))]}}])}),a("el-table-column",{attrs:{prop:"totalCount",label:"充值笔数","min-width":"150"}})],1)],1)],1)],1)],1)},n=[],o={data:function(){return{data:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},tableData:[],mchId:"",pageTotal:null,searchTable:{agentId:"",mchId:"",productType:""}}},methods:{getTableData:function(){var e=this;this.loading=!0,this.axios({method:"post",url:"/api/data/count4MchTop",data:{body:{createTimeEnd:this.data[1]?this.data[1]:"",createTimeStart:this.data[0]?this.data[0]:"",agentId:"",mchId:"",productType:""},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.loading=!1,200==t.data.code?(e.tableData=t.data.body,e.pageTotal=t.data.body.count):e.messageInfo(t)})).catch((function(e){console.log(e)}))},searchAmount:function(){this.getTableData()}},created:function(){this.getTableData()},mounted:function(){var e=this.$refs.table.$refs.bodyWrapper;this.mouseEventFun(e)}},s=o,i=a("2877"),r=Object(i["a"])(s,l,n,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d207ed9.23e0890e.js.map