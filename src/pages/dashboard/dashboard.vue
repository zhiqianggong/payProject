<template>
  <div>
    <el-row :gutter="10" style="    margin-top: -50px;">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="margin-top:20px;">
        <el-alert class="reset-hint dashboard" type="success" :closable="false">
          <span style="margin-right:10px;">
            <span>今/昨日订单</span>
          </span>
        </el-alert>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">今日收款订单</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{accountOrder.todayPayOrder}}
            <span style="font-size: 14px;">个</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">今日收款总额</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{accountOrder.todayPayAmount}}
            <span style="font-size: 14px;">元</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">今日代付订单</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{accountOrder.todayAgentPayOrder}}
            <span style="font-size: 14px;">个</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">今日代付总额</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{accountOrder.todayAgentPayAmount}}
            <span style="font-size: 14px;">元</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">昨日收款订单</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{accountOrder.yesterdayPayOrder}}
            <span style="font-size: 14px;">个</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">昨日收款总额</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{accountOrder.yesterdayPayAmount}}
            <span style="font-size: 14px;">元</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">昨日代付订单</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{accountOrder.yesterdayAgentPayOrder}}
            <span style="font-size: 14px;">个</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">昨日代付总额</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{accountOrder.yesterdayAgentPayAmount}}
            <span style="font-size: 14px;">元</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="margin-top:20px;">
        <el-alert class="reset-hint dashboard" type="success" :closable="false">
          <span style="margin-right:10px;">
            <span>平台</span>
          </span>
        </el-alert>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">代理商总数</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{dailiCount}}
            <span style="font-size: 14px;">个</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">商户总数</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{shanghuCount}}
            <span style="font-size: 14px;">个</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">收款订单</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{pingtaiData.payOrderCount}}
            <span style="font-size: 14px;">个</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">收款总额</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{pingtaiData.payAmount}}
            <span style="font-size: 14px;">元</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"></el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">总利润</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{pingtaiData.totalProfit}}
            <span style="font-size: 14px;">元</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">收款利润</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{pingtaiData.payProfit}}
            <span style="font-size: 14px;">元</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">代付利润</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{pingtaiData.agentpayProfit}}
            <span style="font-size: 14px;">元</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"></el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">代付订单</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{pingtaiData.agentpayOrderCount}}
            <span style="font-size: 14px;">个</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom: 10px">
        <el-card class="box-card">
          <p style="font-size: 12px;color:#999">代付总额</p>
          <h3 style="margin: 0;font-size: 30px;font-weight: 300;color: #009688;">
            {{pingtaiData.agentpayAmount}}
            <span style="font-size: 14px;">元</span>
          </h3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div id="main" style="width: 100%;height:400px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import menu from "@/components/menu";
import header from "@/components/header";
export default {
  data() {
    return {
      pingtaiData: {
        agentpayAmount: "",
        agentpayOrderCount: "",
        agentpayProfit: "",
        payAmount: "",
        payOrderCount: "",
        payProfit: "",
        totalProfit: "",
      },
      accountOrder: {
        todayAgentPayAmount: 0,
        todayAgentPayOrder: 0,
        todayPayAmount: 0,
        todayPayOrder: 0,
        yesterdayAgentPayAmount: 0,
        yesterdayAgentPayOrder: 0,
        yesterdayPayAmount: 0,
        yesterdayPayOrder: 0,
      },
      shanghuCount: 0,
      dailiCount: 0,
      myChart: null,
      xBox: [],
      serverBox: [],
    };
  },
  methods: {
    geteCharts() {
      this.axios({
        method: "post",
        url: "/api/statistics/orderDayAmount",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.xBox = [];
            this.serverBox = [];
            for (let wai = 0; wai < res.data.body.length; wai++) {
              for (var key in res.data.body[wai]) {
                this.xBox.push(key);
                let amount = res.data.body[wai][key] ? res.data.body[wai][key] : 0
                this.serverBox.push(amount)
              }
            }
            this.eChartsFun();
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    eChartsFun() {
      this.myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "近七日平台交易金额",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          type: "category",
          data: this.xBox,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "交易金额",
            type: "line",
            data: this.serverBox,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option);
    },
    getShang() {
      this.axios({
        method: "post",
        url: "/api/statistics/count4mch",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.shanghuCount = res.data.body.mchCount
              ? res.data.body.mchCount
              : 0;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDaili() {
      this.axios({
        method: "post",
        url: "/api/statistics/count4agent",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.dailiCount = res.data.body.agentCount
              ? res.data.body.agentCount
              : 0;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getData() {
      this.axios({
        method: "post",
        url: "/api/statistics/count4dayIncome",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.accountOrder = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAccount() {
      this.axios({
        method: "post",
        url: "/api/statistics/count4plat",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.pingtaiData = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.geteCharts();
    this.getAccount();
    this.getData();
    this.getShang();
    this.getDaili();
  },
  mounted() {
    let that = this;
    window.addEventListener("resize", () => {
      that.myChart.resize();
    });
    this.eChartsFun();
  },
};
</script>

<style >
</style>