(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55e55c45"],{"159b":function(e,t,a){var s=a("da84"),i=a("fdbc"),n=a("17c2"),o=a("9112");for(var r in i){var c=s[r],l=c&&c.prototype;if(l&&l.forEach!==n)try{o(l,"forEach",n)}catch(d){l.forEach=n}}},"17c2":function(e,t,a){"use strict";var s=a("b727").forEach,i=a("a640"),n=a("ae40"),o=i("forEach"),r=n("forEach");e.exports=o&&r?[].forEach:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,t,a){"use strict";var s=a("23e7"),i=a("17c2");s({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},a066:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-card",{staticClass:"box-card reset-card"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"按天统计成功率",name:"first"}}),a("el-tab-pane",{attrs:{label:"按小时统计成功率",name:"second"}})],1),a("p",[a("el-date-picker",{staticStyle:{margin:"0 5px 5px 0"},attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH-mm-ss",format:"yyyy 年 MM 月 dd 日",size:"small","picker-options":e.pickerOptions},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),a("el-input",{staticStyle:{width:"150px",margin:"0 5px 5px 0"},attrs:{size:"small",placeholder:"商户ID","prefix-icon":"el-icon-search"},model:{value:e.searchTable.mchId,callback:function(t){e.$set(e.searchTable,"mchId",t)},expression:"searchTable.mchId"}}),a("el-button",{staticClass:"green",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"info"},on:{click:e.searchAmount}},[a("i",{staticClass:"el-icon-search"}),e._v(" 搜索 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"dateType",label:"日期/时间","min-width":"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.getLocalTime(t.row.dateType)))])]}}])}),a("el-table-column",{attrs:{prop:"successCount",label:"成功订单数","min-width":"120"}}),a("el-table-column",{attrs:{prop:"totalCount",label:"总订单数","min-width":"120"}}),a("el-table-column",{attrs:{prop:"successRate",label:"订单成功率","min-width":"150"}})],1),a("el-pagination",{staticClass:"paginationStyle",attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"main"}})],1)],1)],1)],1)},i=[],n=(a("4160"),a("b0c0"),a("a9e3"),a("159b"),{data:function(){return{data:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},tableData:[],currentPage:1,pagesize:10,mchId:"",pageTotal:null,searchTable:{mchId:""},activeName:"first",myChart:null,chartTitle:"近七日订单成功率",xBox:[],serverBox:[]}},methods:{handleSizeChange:function(e){this.pagesize=e,this.getTableData()},handleCurrentChange:function(e){this.currentPage=e,this.getTableData()},getTableData:function(){var e=this;this.loading=!0,this.axios({method:"post",url:"/api/data/selectSuccessRate",data:{body:{createTimeEnd:this.data[1]?this.data[1]:"",createTimeStart:this.data[0]?this.data[0]:"",mchId:this.searchTable.mchId,pageIndex:this.currentPage,pageSize:this.pagesize},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.loading=!1,200==t.data.code?(e.tableData=t.data.body.successRateList,e.pageTotal=t.data.body.count):e.messageInfo(t)})).catch((function(e){console.log(e)}))},sevenDay:function(){var e=this;this.axios({method:"post",url:"/api/data/dateRate",data:{body:{},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){if(e.loading=!1,200==t.data.code){e.xBox=[],e.serverBox=[];var a=0;t.data.body=t.data.body.sort((function(e,t){return console.log(e.day),e.day-t.day?1:-1})),t.data.body.forEach((function(t){a++,a<=7&&(e.xBox.push(t.day),e.serverBox.push(t.successRate?Number(t.successRate.substring(0,t.successRate.length-1)):0))})),console.log(e.xBox,e.serverBox),e.eChartsFun()}else e.messageInfo(t)})).catch((function(e){console.log(e)}))},hourRate:function(){var e=this;this.axios({method:"post",url:"/api/data/hourRate",data:{body:{},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){if(e.loading=!1,200==t.data.code){e.xBox=[],e.serverBox=[];var a=0;t.data.body=t.data.body.sort((function(e,t){return console.log(e.time),e.time-t.time?1:-1})),t.data.body.forEach((function(t){a++,a<=12&&(e.xBox.push(t.time),e.serverBox.push(t.successRate?Number(t.successRate.substring(0,t.successRate.length-1)):0))})),console.log(e.xBox,e.serverBox),e.eChartsFun()}else e.messageInfo(t)})).catch((function(e){console.log(e)}))},searchAmount:function(){this.currentPage=1,this.getTableData()},searchDetail:function(e){this.$router.push({name:"settlement_audit_detail",query:{id:e.id}})},audit:function(e){this.$router.push({name:"audit",query:{id:e.infoId}})},eChartsFun:function(){this.myChart=this.$echarts.init(document.getElementById("main"));var e={title:{text:this.chartTitle},tooltip:{trigger:"axis",axisPointer:{type:"line"}},xAxis:{type:"category",data:this.xBox},yAxis:{type:"value"},series:[{name:"订单成功率(%)",type:"line",data:this.serverBox}]};this.myChart.setOption(e)},handleClick:function(e,t){"first"==e.name?(this.sevenDay(),this.chartTitle="近七日订单成功率"):(this.hourRate(),this.chartTitle="近十二小时订单成功率"),this.eChartsFun()},dayData:function(){var e=this;this.axios({method:"post",url:"/api/data/selectSuccessRate",data:{body:{createTimeEnd:this.data[1]?this.data[1]:"",createTimeStart:this.data[0]?this.data[0]:"",mchId:this.searchTable.mchId,pageIndex:this.currentPage,pageSize:this.pagesize},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){e.loading=!1,200==t.data.code?(e.tableData=t.data.body.successRateList,e.pageTotal=t.data.body.count):e.messageInfo(t)})).catch((function(e){console.log(e)}))}},created:function(){this.getTableData(),this.sevenDay()},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.myChart.resize()})),this.eChartsFun()}}),o=n,r=a("2877"),c=Object(r["a"])(o,s,i,!1,null,null,null);t["default"]=c.exports},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-55e55c45.468a1cc5.js.map