(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215fa8"],{c104:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[l("el-breadcrumb-item",{attrs:{to:{path:"/payOrder"}}},[e._v("支付订单")]),l("el-breadcrumb-item",{attrs:{to:{path:"/pay_order_detail"}}},[e._v("支付订单详情")])],1),l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("支付订单详情")])]),l("el-row",{attrs:{gutter:10}},[l("el-form",{attrs:{model:e.detaliFrom}},[l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"支付订单号","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.payOrderId,callback:function(t){e.$set(e.detaliFrom,"payOrderId",t)},expression:"detaliFrom.payOrderId"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"商户订单号","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.mchOrderNo,callback:function(t){e.$set(e.detaliFrom,"mchOrderNo",t)},expression:"detaliFrom.mchOrderNo"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"代理商ID","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.agentId,callback:function(t){e.$set(e.detaliFrom,"agentId",t)},expression:"detaliFrom.agentId"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"商户ID","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.mchId,callback:function(t){e.$set(e.detaliFrom,"mchId",t)},expression:"detaliFrom.mchId"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"应用ID","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.appId,callback:function(t){e.$set(e.detaliFrom,"appId",t)},expression:"detaliFrom.appId"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"支付金额","label-width":"130px"}},[l("el-input",{model:{value:e.detaliFrom.amount,callback:function(t){e.$set(e.detaliFrom,"amount",t)},expression:"detaliFrom.amount"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"商品标题","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.subject,callback:function(t){e.$set(e.detaliFrom,"subject",t)},expression:"detaliFrom.subject"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"商品描述","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.body,callback:function(t){e.$set(e.detaliFrom,"body",t)},expression:"detaliFrom.body"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"设备","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.device,callback:function(t){e.$set(e.detaliFrom,"device",t)},expression:"detaliFrom.device"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"客户端IP","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.clientIp,callback:function(t){e.$set(e.detaliFrom,"clientIp",t)},expression:"detaliFrom.clientIp"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"支付接口类型","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.channelType,callback:function(t){e.$set(e.detaliFrom,"channelType",t)},expression:"detaliFrom.channelType"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"支付接口","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.channelId,callback:function(t){e.$set(e.detaliFrom,"channelId",t)},expression:"detaliFrom.channelId"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"支付产品ID","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.productId,callback:function(t){e.$set(e.detaliFrom,"productId",t)},expression:"detaliFrom.productId"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"支付通道ID","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.status,callback:function(t){e.$set(e.detaliFrom,"status",t)},expression:"detaliFrom.status"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"支付通道账户ID","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.passageId,callback:function(t){e.$set(e.detaliFrom,"passageId",t)},expression:"detaliFrom.passageId"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"支付状态","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.status,callback:function(t){e.$set(e.detaliFrom,"status",t)},expression:"detaliFrom.status"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"渠道商户ID","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.mchId,callback:function(t){e.$set(e.detaliFrom,"mchId",t)},expression:"detaliFrom.mchId"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"渠道用户","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.channelUser,callback:function(t){e.$set(e.detaliFrom,"channelUser",t)},expression:"detaliFrom.channelUser"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"渠道订单号","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.channelOrderNo,callback:function(t){e.$set(e.detaliFrom,"channelOrderNo",t)},expression:"detaliFrom.channelOrderNo"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"渠道数据包","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.channelAttach,callback:function(t){e.$set(e.detaliFrom,"channelAttach",t)},expression:"detaliFrom.channelAttach"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"商户费率","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.mchRate,callback:function(t){e.$set(e.detaliFrom,"mchRate",t)},expression:"detaliFrom.mchRate"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"商户入账","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.mchIncome,callback:function(t){e.$set(e.detaliFrom,"mchIncome",t)},expression:"detaliFrom.mchIncome"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"商户代理费率","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.agentRate,callback:function(t){e.$set(e.detaliFrom,"agentRate",t)},expression:"detaliFrom.agentRate"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"商户代理利润","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.agentProfit,callback:function(t){e.$set(e.detaliFrom,"agentProfit",t)},expression:"detaliFrom.agentProfit"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"总代理商费率","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.parentAgentRate,callback:function(t){e.$set(e.detaliFrom,"parentAgentRate",t)},expression:"detaliFrom.parentAgentRate"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"总代理商利润","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.parentAgentProfit,callback:function(t){e.$set(e.detaliFrom,"parentAgentProfit",t)},expression:"detaliFrom.parentAgentProfit"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"上游通道费率","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.channelRate,callback:function(t){e.$set(e.detaliFrom,"channelRate",t)},expression:"detaliFrom.channelRate"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"上游通道成本","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.channelCost,callback:function(t){e.$set(e.detaliFrom,"channelCost",t)},expression:"detaliFrom.channelCost"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"平台利润","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.platProfit,callback:function(t){e.$set(e.detaliFrom,"platProfit",t)},expression:"detaliFrom.platProfit"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"是否退款","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.isRefund,callback:function(t){e.$set(e.detaliFrom,"isRefund",t)},expression:"detaliFrom.isRefund"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"退款金额","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.successRefundAmount,callback:function(t){e.$set(e.detaliFrom,"successRefundAmount",t)},expression:"detaliFrom.successRefundAmount"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"退款次数","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.refundTimes,callback:function(t){e.$set(e.detaliFrom,"refundTimes",t)},expression:"detaliFrom.refundTimes"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"上游渠道错误码","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.errCode,callback:function(t){e.$set(e.detaliFrom,"errCode",t)},expression:"detaliFrom.errCode"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"上游渠道错误描述","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.errMsg,callback:function(t){e.$set(e.detaliFrom,"errMsg",t)},expression:"detaliFrom.errMsg"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"上游渠道扩展参数","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.extra,callback:function(t){e.$set(e.detaliFrom,"extra",t)},expression:"detaliFrom.extra"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"产品类型","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.productType,callback:function(t){e.$set(e.detaliFrom,"productType",t)},expression:"detaliFrom.productType"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"扩展参数1","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.param1,callback:function(t){e.$set(e.detaliFrom,"param1",t)},expression:"detaliFrom.param1"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"扩展参数2","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.param2,callback:function(t){e.$set(e.detaliFrom,"param2",t)},expression:"detaliFrom.param2"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"通知地址","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.notifyUrl,callback:function(t){e.$set(e.detaliFrom,"notifyUrl",t)},expression:"detaliFrom.notifyUrl"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"跳转地址","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.returnUrl,callback:function(t){e.$set(e.detaliFrom,"returnUrl",t)},expression:"detaliFrom.returnUrl"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"订单成功时间","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.paySuccTime,callback:function(t){e.$set(e.detaliFrom,"paySuccTime",t)},expression:"detaliFrom.paySuccTime"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"订单失效时间","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.expireTime,callback:function(t){e.$set(e.detaliFrom,"expireTime",t)},expression:"detaliFrom.expireTime"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"创建时间","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.createTime,callback:function(t){e.$set(e.detaliFrom,"createTime",t)},expression:"detaliFrom.createTime"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[l("el-form-item",{attrs:{label:"更新时间","label-width":"130px"}},[l("el-input",{attrs:{disabled:""},model:{value:e.detaliFrom.updateTime,callback:function(t){e.$set(e.detaliFrom,"updateTime",t)},expression:"detaliFrom.updateTime"}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{plain:""},on:{click:function(t){return e.$router.push("/payOrder")}}},[e._v("返回")])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],s={data:function(){return{detaliFrom:{agentId:0,agentProfit:0,agentRate:0,amount:0,appId:"",body:"",channelAttach:"",channelCost:0,channelId:"",channelMchId:"",channelOrderNo:"",channelRate:0,channelType:"",channelUser:"",clientIp:"",createTime:"",currency:"",device:"",errCode:"",errMsg:"",expireTime:"",extra:"",isRefund:"",mchId:0,mchIncome:0,mchOrderNo:"",mchRate:0,mchType:"",notifyUrl:"",param1:"",param2:"",parentAgentId:0,parentAgentProfit:0,parentAgentRate:0,passageAccountId:0,passageId:0,payOrderId:"",paySuccTime:"",platProfit:0,productId:0,productType:"",refundTimes:0,returnUrl:"",status:"",subject:"",successRefundAmount:0,updateTime:""},bizItem:[{name:"余额",key:"10"},{name:"代付余额",key:"11"},{name:"冻结金额",key:"12"},{name:"保证金",key:"13"},{name:"支付",key:"20"},{name:"代付",key:"21"},{name:"线下充值",key:"22"},{name:"线上充值",key:"23"}],bizType:[{name:"支付",key:"1"},{name:"提现",key:"2"},{name:"调账",key:"3"},{name:"充值",key:"4"},{name:"差错处理",key:"5"},{name:"代付",key:"6"}]}},methods:{getAppDetail:function(){var e=this;this.axios({method:"post",url:"/api/pay_order/get",data:{body:{payOrderId:this.$route.query.id},header:{token:sessionStorage.token,userName:sessionStorage.userName}}}).then((function(t){if(200==t.data.code){var l=t.data.body;0==l.isRefund?l.isRefund="未退款":l.isRefund="退款",1==l.mchType?l.mchType="平台账户":l.mchType="私有账户",1==l.productType?l.productType="收款":l.productType="充值",0==l.status?l.status="订单生成":1==l.status?l.status="支付中":2==l.status?l.status="支付成功":3==l.status?l.status="业务处理完成":l.status="已退款",e.detaliFrom={agentId:l.agentId,agentProfit:l.agentProfit,agentRate:l.agentRate,amount:l.amount,appId:l.appId,body:l.body,channelAttach:l.channelAttach,channelCost:l.channelCost,channelId:l.channelId,channelMchId:l.channelMchId,channelOrderNo:l.channelOrderNo,channelRate:l.channelRate,channelType:l.channelType,channelUser:l.channelUser,clientIp:l.clientIp,createTime:e.getLocalTime(l.createTime),currency:l.currency,device:l.device,errCode:l.errCode,errMsg:l.errMsg,expireTime:e.getLocalTime(l.expireTime),extra:l.extra,isRefund:l.isRefund,mchId:l.mchId,mchIncome:l.mchIncome,mchOrderNo:l.mchOrderNo,mchRate:l.mchRate,mchType:l.mchType,notifyUrl:l.notifyUrl,param1:l.param1,param2:l.param2,parentAgentId:l.parentAgentId,parentAgentProfit:l.parentAgentProfit,parentAgentRate:l.parentAgentRate,passageAccountId:l.passageAccountId,passageId:l.passageId,payOrderId:l.payOrderId,paySuccTime:e.getLocalTime(l.paySuccTime),platProfit:l.platProfit,productId:l.productId,productType:l.productType,refundTimes:e.getLocalTime(l.refundTimes),returnUrl:l.returnUrl,status:l.status,subject:l.subject,successRefundAmount:l.successRefundAmount,updateTime:e.getLocalTime(l.updateTime)}}else e.messageInfo(t)})).catch((function(e){console.log(e)}))}},created:function(){this.getAppDetail()}},i=s,d=l("2877"),o=Object(d["a"])(i,a,r,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d215fa8.89b169f8.js.map