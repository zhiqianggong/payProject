<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/pay_passage_config' }">支付通道列表</el-breadcrumb-item>
      <el-breadcrumb-item>支付通道账户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>支付通道账户</span>
          </div>
          <p>
            <el-button
              size="small"
              class="green"
              type="info"
              @click="searchAmount"
            >
              新增账户
            </el-button>
          </p>
          <el-table ref="table" :data="tableData" style="width: 100%" v-loading="loading" border>
            <el-table-column prop="id" label="账户ID" min-width="100"></el-table-column>
            <el-table-column prop="accountName" label="账户名称" min-width="120"></el-table-column>
            <el-table-column prop="ifCode" label="接口代码" min-width="150"></el-table-column>
            <el-table-column prop="ifName" label="接口名称" min-width="150"></el-table-column>
            <el-table-column prop="passageRate" label="通道费率" min-width="100">
              <template slot-scope="scope">
                <span
                  :style="{'color': (scope.row.passageRate  ? 'blue':'')}"
                >{{scope.row.passageRate ? scope.row.passageRate+'%' : '未设置'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="账户状态" min-width="100">
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
            <el-table-column label="操作" style="text-align: center;" min-width="120">
              <template slot-scope="scope">
                <el-button
                  class="reset-button green"
                  size="warning"
                  @click="riskSet(scope.row)"
                >风控</el-button>
                <el-button
                  class="reset-button green"
                  size="warning"
                  @click="modify(scope.row)"
                >编辑</el-button>
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
import menu from "@/components/menu";
import header from "@/components/header";
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      mchId: "",
      pageTotal: null,
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
        url: "/api/config/pay_passage_account/list",
        data: {
          body: {
            payPassageId: this.$route.query.id,
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
            this.tableData = res.data.body.payAccountLists;
            this.pageTotal = res.data.body.count;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchAmount() {
      this.$router.push({ name: "sub_account_add", query: { id: this.$route.query.id } });
    },
    searchDetail(row) {
      this.$router.push({ name: "appDetail", query: { id: row.appId } });
    },
    changeSwitch(row) {
      this.axios({
        method: "post",
        url: "/api/config/pay_passage/update",
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
    riskSet(row) {
      this.$router.push({ name: "sub_account_risk", query: { id: row.id, payPassageId: row.payPassageId } });
    },
    modify(row) {
      this.$router.push({ name: "sub_account_modify", query: { id: row.id, payPassageId: row.payPassageId } });
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

<style>
</style>