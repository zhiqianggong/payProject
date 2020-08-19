<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/port_type_list' }">接口类型列表</el-breadcrumb-item>
      <el-breadcrumb-item>新增支付接口类型</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>新增支付接口类型</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="addTypeFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="支付类型代码" label-width="130px">
                  <el-input v-model="addTypeFrom.ifTypeCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="支付类型名称" label-width="130px">
                  <el-input v-model="addTypeFrom.ifTypeName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="状态" label-width="130px">
                  <el-radio-group v-model="addTypeFrom.status">
                    <el-radio border label="1">开启</el-radio>
                    <el-radio border label="0">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="备注信息" label-width="130px">
                  <el-input v-model="addTypeFrom.remark"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="回调IP白名单" label-width="130px">
                  <el-input v-model="addTypeFrom.whiteIp"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="配置定义描述" label-width="130px">
                  <el-input type="textarea"  :autosize="{ minRows: 4, maxRows: 6}" v-model="addTypeFrom.param"></el-input>
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
        ifTypeCode: "",
        ifTypeName: "",
        param: "",
        remark: "",
        status: "1",
        whiteIp: "",
      },
    };
  },
  methods: {
    toPayList() {
      this.$router.push("port_type_list");
    },
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/config/pay_interface_type/add",
        data: {
          body: {
            ifTypeCode: this.addTypeFrom.ifTypeCode,
            ifTypeName: this.addTypeFrom.ifTypeName,
            param: this.addTypeFrom.param,
            remark: this.addTypeFrom.remark,
            status: this.addTypeFrom.status,
            whiteIp: this.addTypeFrom.whiteIp,
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
            this.addTypeFrom = {
              ifTypeCode: "",
              ifTypeName: "",
              param: "",
              remark: "",
              status: "1",
              whiteIp: "",
            };
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