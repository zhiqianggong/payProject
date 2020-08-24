<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/oilCard_order_list' }">油卡通道列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>油卡通道列表</span>
          </div>
          <p>
            <el-button
              size="small"
              class="green"
              style="margin-left:10px;"
              type="info"
              @click="addType"
            >新增油卡通道</el-button>
          </p>
          <el-table
            ref="table"
            :data="tableData"
            style="width: 100%;"
            v-loading="loading"
            border
          >
            <el-table-column prop="id" label="通道ID" min-width="100"></el-table-column>
            <el-table-column prop="passageName" label="通道名称" min-width="180"></el-table-column>
            <el-table-column prop="ifCode" label="接口代码" min-width="180"></el-table-column>
            <el-table-column prop="ifName" label="接口名称" min-width="150"></el-table-column>
            <el-table-column prop="ifTypeName" label="接口类型名称" min-width="110"></el-table-column>
            <el-table-column prop="ifTypeCode" label="接口类型代码" min-width="110"></el-table-column>
            <el-table-column prop="feeRate" label="手续费费率" min-width="100">
              <template slot-scope="scope">
                <span
                  :style="{'color': (scope.row.feeRate || scope.row.feeEvery  ? 'blue':'')}"
                >{{ scope.row.feeType == 1 ? scope.row.feeRate+'%' : amountFormat(scope.row.feeEvery)+'元/笔'}}</span>
              </template>
            </el-table-column>

            <el-table-column prop="status" label="通道状态" min-width="100">
              <template slot-scope="scope">
                <el-switch
                  class="switchStyle"
                  active-text="启用"
                  inactive-text="关闭"
                  v-model="scope.row.status"
                  :active-value="1"
                  :inactive-value="0"
                  active-color="#1ab394"
                  inactive-color="#f56c6c"
                  :width="60"
                  @change="changeSwitch(scope.row)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="200">
              <template slot-scope="scope">
                <el-button
                  class="reset-button green"
                  size="warning"
                  @click="subAccount(scope.row)"
                >子账户</el-button>
                <el-button class="reset-button green" size="warning" @click="riskSet(scope.row)">风控</el-button>
                <el-button class="reset-button green" size="warning" @click="modify(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="paginationStyle"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageTotal"
          ></el-pagination>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      mchId: "",
      pageTotal: null,
      tableModify: false,
      curVal: "",
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTableData();
    },
    getTableData() {
      this.loading = true;
      this.axios({
        method: "post",
        url: "/api/config/agentpay_passage/list",
        data: {
          body: {
            pageIndex: this.currentPage,
            pageSize: this.pagesize,
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
            this.tableData = res.data.body.passageList;
            this.pageTotal = res.data.body.count;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeSwitch(row) {
      this.axios({
        method: "post",
        url: "/api/config/agentpay_passage/update",
        data: {
          body: {
            id: row.id,
            status: row.status,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          this.messageInfo(res);
          if (res.data.code == 200) {
            this.getTableData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addType() {
      this.$router.push("add_oilCard");
    },
    modify(row) {
      this.$router.push({ name: "oilCard_modify", query: { id: row.id } });
    },
    riskSet(row) {
      this.$router.push({ name: "oilCard_risk_set", query: { id: row.id } });
    },
    subAccount(row) {
      this.$router.push({ name: "oilCard_sub_account", query: { id: row.id } });
    }
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

<style></style>