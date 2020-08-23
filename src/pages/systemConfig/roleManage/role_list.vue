<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user_list' }">角色管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>角色管理</span>
          </div>
          <p>
            <el-button type="success" size="small" class="green" style="margin-left:10px;" @click="dialogRolu = true">
              <i class="el-icon-plus"></i> 新增
            </el-button>
            <el-button
              size="small"
              class="red"
              style="margin-left:10px;"
              type="info"
              @click="deleteUser"
            >删除</el-button>
          </p>
          <el-table
            ref="table"
            :data="tableData"
            style="width: 100%"
            v-loading="loading"
            @selection-change="handleSelectionChange"
            border
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="roleId" label="角色ID" min-width="100"></el-table-column>
            <el-table-column prop="roleName" label="角色名称" min-width="120"></el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="230">
              <template slot-scope="scope">
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="rolu(scope.$index, scope.row)"
                >分配权限</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="modifyUser(scope.$index, scope.row)"
                >编辑</el-button>
                <el-button
                  class="reset-button red"
                  type="success"
                  @click="deleteCurUser(scope.row)"
                >删除</el-button>
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
    <el-dialog
      title="新建角色"
      :visible.sync="dialogRolu"
      min-width="250px"
      :before-close="handleClose"
      v-dialogDrag
    >
      <el-row :gutter="10">
        <el-form>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="角色名" label-width="130px">
              <el-input v-model="roleName" placeholder="请输入角色名"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="roleSubmit">保存</el-button>
        <el-button @click="closeDia">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addMec: false,
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      pageTotal: null,
      mchId: "",
      changeRolu: {},
      dialogRolu: false,
      isAdd: "",
      amountTitle: "",
      amountDetailBox: {
        balance: "",
      },
      roleName: "",
      selectUserList: "",
      manageMap: null,
    };
  },
  methods: {
    deleteCurUser(row) {
        console.log(row)
      this.selectUserList = row.roleId + ",";
      this.deleteUser();
    },
    deleteUser() {
      if (this.selectUserList == "") {
        this.$message({
          message: "请勾选需要删除的用户",
          type: "warning",
        });
        return;
      }
      this.axios({
        method: "post",
        url: "/api/sys/role/delete",
        data: {
          body: {
            roleIds: this.selectUserList.substring(
              0,
              this.selectUserList.length - 1
            ),
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
    handleSelectionChange(val) {
      if (val.length > 0) {
        val.forEach((element) => {
          this.selectUserList += element.roleId + ",";
        });
      }
    },
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
        url: "/api/sys/role/list",
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
    searchMchid() {
      this.currentPage = 1;
      this.pagesize = 10;
      this.getTableData();
    },
    changeSwitch(row) {
      this.axios({
        method: "post",
        url: "/api/sys/user/update",
        data: {
          body: {
            userId: row.userId,
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
    handleClose(done) {
      this.roleName = "";
      done();
    },
    modifyUser(index, row) {
      this.$router.push({ name: "change_role", query: { id: row.roleId } });
    },
    searchRole(row) {
      this.userId = row.userId;
      this.axios({
        method: "post",
        url: "/api/sys/user/user_role_view",
        data: {
          body: {
            userId: row.userId,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            if (res.data.body) {
              for (let i = 0; i < res.data.body.length; i++) {
                if (res.data.body[i].checked == 1) {
                  res.data.body[i].checked = true;
                } else {
                  res.data.body[i].checked = false;
                }
              }
            }
            this.manageMap = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    roleSubmit() {
      this.axios({
        method: "post",
        url: "/api/sys/role/add",
        data: {
          body: {
            roleName: this.roleName,
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
            this.dialogRolu = false;
            this.getTableData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closeDia() {
        this.dialogRolu = false;
        this.roleName = "";
    },
    rolu(index, row) {
      this.$router.push({ name: "authority_manage", query: { id: row.roleId } });
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
.el-dialog__footer {
  text-align: center;
}

.el-message-box__btns button:nth-child(1) {
  float: right;
  margin-left: 10px;
}

.tingzhi {
  position: absolute;
  left: 33px;
  font-size: 13px;
  color: #fff;
}

.qiyong {
  position: absolute;
  left: 19px;
  font-size: 13px;
  color: #fff;
}
</style>