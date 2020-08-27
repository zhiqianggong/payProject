<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/pay_type' }">支付类型列表</el-breadcrumb-item>
      <el-breadcrumb-item>新增支付类型</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>新增支付类型</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="addTypeFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="支付类型代码" label-width="130px">
                  <el-input v-model="addTypeFrom.payTypeCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="支付类型名称" label-width="130px">
                  <el-input v-model="addTypeFrom.payTypeName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="类别" label-width="130px">
                  <el-radio-group v-model="addTypeFrom.status">
                    <el-radio border label="1">开启</el-radio>
                    <el-radio border label="0">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="状态" label-width="130px">
                  <el-radio-group v-model="addTypeFrom.type">
                    <el-radio border label="0">支付</el-radio>
                    <el-radio border label="1">代付</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button type="info" class="green" @click="submitForm()">保存</el-button>
                  <el-button plain @click="toPayList">返回</el-button>
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
      addTypeFrom: {
        payTypeCode: "",
        payTypeName: "",
        status: "1",
        type: "0",
      },
    };
  },
  methods: {
    toPayList() {
      this.$router.push("pay_type");
    },
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/config/pay_type/add",
        data: {
          body: {
            payTypeCode: this.addTypeFrom.payTypeCode,
            payTypeName: this.addTypeFrom.payTypeName,
            status: this.addTypeFrom.status,
            type: this.addTypeFrom.type,
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
            // this.addTypeFrom = {
            //   payTypeCode: "",
            //   payTypeName: "",
            //   status: "1",
            //   type: "0",
            // };
            this.$router.push("pay_type");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>