<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/pay_product_list' }">支付产品</el-breadcrumb-item>
      <el-breadcrumb-item>新增支付产品</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>新增支付产品</span>
            <span style="color: red;font-size: 13px;padding-left:15px;">带 * 选项为必填项</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="addTypeFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="产品名称" label-width="130px" class="start">
                  <el-input v-model="addTypeFrom.productName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="产品类型" label-width="130px">
                  <el-radio-group v-model="addTypeFrom.productType">
                    <el-radio border label="1">收款</el-radio>
                    <el-radio border label="0">充值</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="支付类型" label-width="130px" class="reset-select">
                  <el-select v-model="addTypeFrom.payType" placeholder="请选择">
                    <el-option
                      v-for="item in payType"
                      :key="item.payTypeCode"
                      :label="item.payTypeName"
                      :value="item.payTypeCode"
                    ></el-option>
                  </el-select>
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
        payType: "",
        productName: "",
        productType: "1",
        status: "1",
      },
      payType: null,
    };
  },
  methods: {
    toPayList() {
      this.$router.push("pay_product_list");
    },
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/config/pay_product/add",
        data: {
          body: {
            payType: this.addTypeFrom.payType,
            productName: this.addTypeFrom.productName,
            productType: this.addTypeFrom.productType,
            status: this.addTypeFrom.status,
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
            //   payType: "",
            //   productName: "",
            //   productType: "1",
            //   status: "1",
            // };
            this.$router.push("pay_product_list");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPayType() {
      this.axios({
        method: "post",
        url: "/api/config/common/pay_type_all",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.payType = res.data.body;
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
    this.getPayType();
  },
};
</script>

<style>
</style>