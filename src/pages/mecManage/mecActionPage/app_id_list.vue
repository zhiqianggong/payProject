<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>应用列表</span>
          </div>
          <el-table ref="table" :data="tableData" style="width: 100%" v-loading="loading" border>
            <el-table-column prop="mchId" label="商户Id" min-width="100"></el-table-column>
            <el-table-column prop="appName" label="商户应用名称" min-width="130"></el-table-column>
            <el-table-column prop="remark" label="备注" min-width="100"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="150">
              <template slot-scope="scope">{{getLocalTime(scope.row.createTime)}}</template>
            </el-table-column>
            <el-table-column prop="updateTime" label="修改时间" min-width="150">
              <template slot-scope="scope">{{getLocalTime(scope.row.updateTime)}}</template>
            </el-table-column>
            <el-table-column prop="status" label="状态" min-width="65">
              <template slot-scope="scope">
                <span
                  :style="{'background': (scope.row.status == 0  ? '#eee':'#FF5722'),'color': (scope.row.status == 0  ? '#666':'#fff'),'padding': '3px'}"
                >{{scope.row.status == 0 ? '关闭' : '开启'}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" min-width="80">
              <template slot-scope="scope">
                <el-button class="reset-button green" size="warning" @click="search(scope.row)">查看</el-button>
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
    <!-- 弹窗 -->
    <el-dialog title="应用详情" :visible.sync="dialogAppDetail" min-width="250px">
      <el-row :gutter="10">
        <el-form :model="appDetailFrom">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="应用ID" label-width="100px">
              <el-input v-model="appDetailFrom.appId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="应用名称" label-width="100px">
              <el-input v-model="appDetailFrom.appName"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogAppDetail = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      pageTotal: null,
      dialogAppDetail: false,
      mchId: "",
      searchTable: {
        appId: "",
      },
      appDetailFrom: {
        appId: "",
        appName: "",
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
            mchId: this.$route.query.id,
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
    search(row) {
      this.dialogAppDetail = true;
      this.appDetailFrom = {
        appId: row.appId,
        appName: row.appName,
      };
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