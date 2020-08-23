<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/role_list' }">角色管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>权限列表</span>
          </div>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-tree
                :data="data"
                ref="tree"
                @check="getTreeDate"
                node-key="resourceId"
                :show-checkbox="true"
                default-expand-all
                :props="defaultProps"
              >
                <span class="custom-tree-node" slot-scope="{ data }">
                  <span>{{ data.title }}</span>
                </span>
              </el-tree>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align:center;">
              <el-button type="info" class="green" @click="submitChange()">保存</el-button>
              <el-button plain @click="toPayList">返回</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeMecFrom: {
        roleId: "",
        roleName: "",
      },
      detailList: null,
      tableData: [],
      list: [],
      currentList: [],
      search: "",
      dataList: null,
      payAccountList: [],
      data: [],
      defaultProps: {
        children: "data",
        label: "title",
      },
    };
  },
  methods: {
    getUserDetail() {
      this.axios({
        method: "post",
        url: "/api/sys/role/permission_view",
        data: {
          body: {
            roleId: this.$route.query.id,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.data = res.data.body;
            let _this = this;
            this.$nextTick(() => {
              this.list = [];
              this.data.forEach((fatherItem) => {
                fatherItem.data.forEach((sonItem) => {
                  if (sonItem.checked == true) {
                    this.list.push(sonItem.resourceId);
                  }
                });
              });
              this.$refs.tree.setCheckedKeys(this.list);
            });
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitChange() {
      if (this.currentList.length < 1) {
        this.$message({
          message: "数据没变更",
          type: "warning",
        });
        return;
      }
      this.axios({
        method: "post",
        url: "/api/sys/role/permission_save",
        data: {
          body: {
            roleId: this.$route.query.id,
            resourceIds: this.currentList.join(","),
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
            this.getUserDetail();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTreeDate(a, b) {
      let fatherCheck = b.halfCheckedKeys;
      let sonCheck = b.checkedKeys;
      this.currentList = fatherCheck.concat(sonCheck);
    },
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/sys/role/update",
        data: {
          body: {
            roleId: this.$route.query.id,
            roleName: this.changeMecFrom.roleName,
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
            this.getUserDetail();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPayList() {
      this.$router.push("role_list");
    },
  },
  created() {
    this.getUserDetail();
  },
};
</script>

<style>
</style>