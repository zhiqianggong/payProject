<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/agentList' }">代理商列表</el-breadcrumb-item>
      <el-breadcrumb-item>代付通道</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>代付通道</span>
          </div>
          <el-table ref="table" :data="tableData" style="width: 100%" v-loading="loading" border>
            <el-table-column prop="agentpayPassageId" label="通道ID" min-width="100"></el-table-column>
            <el-table-column prop="passageName" label="通道名称" min-width="100"></el-table-column>-->
            <el-table-column prop="agentFeeEvery" label="代理商费率" min-width="110">
              <template slot-scope="scope">
                <span
                  :style="{'color': (scope.row.agentFeeEvery  ? 'blue':'')}"
                >{{ scope.row.mchFeeType == 1 ? scope.row.agentFeeEvery+'%' : amountFormat(scope.row.agentFeeEvery)+'元/笔'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="mchFeeEvery" label="代付费率" min-width="100">
              <template slot-scope="scope">
                <span
                  :style="{'color': (scope.row.mchFeeEvery  ? 'blue':'')}"
                >{{ scope.row.mchFeeType == 1 ? scope.row.feeRate+'%' : amountFormat(scope.row.mchFeeEvery)+'元/笔'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="maxEveryAmount" label="单笔限额" min-width="100">
              <template slot-scope="scope">
                <span>{{scope.row.maxEveryAmount ? amountFormat(scope.row.maxEveryAmount) : '未设置'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" min-width="65">
              <template slot-scope="scope">
                <span
                  :style="{'background': (scope.row.status == 0  ? '#eee':'#FF5722'),'color': (scope.row.status == 0  ? '#666':'#fff'),'padding': '3px'}"
                >{{scope.row.status == 0 ? '关闭' : '开启'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="isDefault" label="默认" min-width="120">
              <template slot-scope="scope">
                <span
                  :style="{'background': (scope.row.isDefault == 0 ? '#eee':'#FF5722'),'color': (scope.row.isDefault == 0 ? '#666':'#fff'),'padding': '3px'}"
                >{{scope.row.isDefault == 0 ? '否' : '是'}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="80">
              <template slot-scope="scope">
                <el-button class="reset-button green" size="warning" @click="toConfig(scope.row)">配置</el-button>
              </template>
            </el-table-column>
          </el-table>
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
      tableData: [],
      mchId: "",
      searchTable: {
        appId: "",
      },
    };
  },
  filters: {
    typeFilter(val) {
      if (val == 0) {
        return "禁用";
      } else {
        return "启用";
      }
    },
  },
  methods: {
    getTableData() {
      this.loading = true;
      this.axios({
        method: "post",
        url: "/api/mch_agentpay_passage/list",
        data: {
          body: {
            mchId: this.$route.query.id,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          this.loading = false;
          if (res.data.code == 200) {
            this.tableData = res.data.body;
            this.pageTotal = res.data.body.count;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toConfig(row) {
      this.$router.push({
        name: "agent_payment_config",
        query: { id: row.mchId, productId: row.agentpayPassageId },
      });
    },
  },
  created() {
    this.getTableData();
  },
  mounted() {
    var outDiv = this.$refs.table.$refs.bodyWrapper;
    this.mouseEventFun(outDiv);
  },
};
</script>

<style>
</style>