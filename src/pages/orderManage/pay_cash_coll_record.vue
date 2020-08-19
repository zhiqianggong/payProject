<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>分账订单</span>
          </div>
          <p>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="应用ID"
              prefix-icon="el-icon-search"
              v-model="searchTable.appId"
            ></el-input>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="商户ID"
              prefix-icon="el-icon-search"
              v-model="mchId"
            ></el-input>
            <el-button
              size="small"
              class="green"
              style="margin-left:10px;"
              type="info"
              @click="searchAmount"
            >
              <i class="el-icon-search"></i> 搜索
            </el-button>
          </p>
          <el-table ref="table" :data="tableData" style="width: 100%" v-loading="loading" border>
            <el-table-column prop="mchId" label="商户id" min-width="100"></el-table-column>
            <el-table-column prop="appId" label="商户应用Id" min-width="110">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>{{ scope.row.appId }}</p>
                  <div
                    style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"
                    slot="reference"
                    class="name-wrapper"
                  >
                    <span>{{ scope.row.appId }}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column prop="appName" label="商户应用名称" min-width="120"></el-table-column>
            <el-table-column prop="status" label="状态" min-width="80">
              <template slot-scope="scope">
                <span>{{scope.row.status | typeFilter}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="createTimeStart" label="创建时间" min-width="150">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.createTimeStart)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="80">
              <template slot-scope="scope">
                <el-button
                  class="reset-button green"
                  size="warning"
                  @click="searchDetail(scope.row)"
                >查看</el-button>
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
        url: "/api/app/list",
        data: {
          body: {
            appId: this.searchTable.appId,
            mchId: this.mchId,
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
            this.tableData = res.data.body.mchAppQueryList;
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
      this.currentPage = 1;
      this.getTableData();
    },
    searchDetail(row) {
      this.$router.push({ name: "appDetail", query: { id: row.appId } });
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