<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/pay_product_list' }">支付产品</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>支付产品</span>
          </div>
          <p>
            <el-button
              size="small"
              class="green"
              type="info"
              @click="addType"
            >新增支付产品</el-button>
          </p>
          <el-table ref="table" :data="tableData" style="width: 100%;" v-loading="loading" border>
            <el-table-column prop="id" label="产品ID" min-width="170"></el-table-column>
            <el-table-column prop="productName" label="产品名称" min-width="150"></el-table-column>
            <el-table-column prop="productType" label="产品类型" min-width="110">
                <template slot-scope="scope">
                    {{ scope.row.productType == 1 ? '收款' : '充值' }}
                </template>
            </el-table-column>
            <el-table-column prop="payTypeName" label="支付类型" min-width="110"></el-table-column>
            <el-table-column prop="agentRate" label="代理商费率" min-width="110">
                <template slot-scope="scope">
                <span
                  :style="{'color': (scope.row.agentRate  ? 'blue':'')}"
                >{{scope.row.agentRate ? scope.row.agentRate+'%' : '未设置'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="mchRate" label="商户费率" min-width="110">
                <template slot-scope="scope">
                <span
                  :style="{'color': (scope.row.mchRate  ? 'blue':'')}"
                >{{scope.row.mchRate ? scope.row.mchRate+'%' : '未设置'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="ifMode" label="接口模式" min-width="110">
                <template slot-scope="scope">
                    {{ scope.row.productType == 1 ? '单独' : '轮询' }}
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" min-width="100">
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
            <el-table-column label="操作" style="text-align: center;" width="80">
                    <template slot-scope="scope">
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
        url: "/api/config/pay_product/list",
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
    changeSwitch(row) {
      this.axios({
        method: "post",
        url: "/api/config/pay_product/update",
        data: {
          body: {
            status: row.status,
            id: row.id,
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
      this.$router.push("add_pay_product");
    },
    modify(row) {
      this.$router.push({ name: "modify_pay_product", query: { id: row.id } });
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