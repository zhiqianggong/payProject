<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/appManage' }">应用列表</el-breadcrumb-item>
      <el-breadcrumb-item>应用详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>应用详情</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="addMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item class="reset-disabled" label="应用ID" label-width="130px">
                  <el-input v-model="appId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="应用名称" label-width="130px">
                  <el-input v-model="appName" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="应用状态" label-width="130px">
                  <el-input v-model="status" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="备注" label-width="130px">
                  <el-input v-model="remark" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="创建时间" label-width="130px">
                  <el-input v-model="createTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="修改时间" label-width="130px">
                  <el-input v-model="updateTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button plain @click="$router.push('/appManage')">返回</el-button>
                </el-form-item>
              </el-col>
            </el-form>
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
      appId: "",
      appName: "",
      createTime: "",
      mchId: 0,
      remark: "",
      status: "",
      updateTime: "",
    };
  },
  methods: {
    getAppDetail() {
      this.axios({
        method: "post",
        url: "/api/app/get",
        data: {
          body: {
            appId: this.$route.query.id,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.appId = res.data.body.appId;
            this.appName = res.data.body.appName;
            this.createTime = this.getLocalTime(res.data.body.createTime);
            this.mchId = res.data.body.mchId;
            this.remark = res.data.body.remark;
            this.status = res.data.body.status == 1 ? "启用" : "禁用";
            this.updateTime = this.getLocalTime(res.data.body.updateTime);
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
    this.getAppDetail();
  },
};
</script>

<style>
</style>