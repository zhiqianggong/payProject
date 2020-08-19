<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/telephone_order_list' }">代付通道列表</el-breadcrumb-item>
      <el-breadcrumb-item>新增代付通道</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>新增代付通道</span>
            <span style="color: red;font-size: 13px;padding-left:15px;">带 * 选项为必填项</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="addTypeFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="通道名称" label-width="130px" class="start">
                  <el-input v-model="addTypeFrom.passageName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="支付接口" label-width="130px" class="reset-select">
                  <el-select v-model="addTypeFrom.ifCode" placeholder="请选择">
                    <el-option
                      v-for="item in payPort"
                      :key="item.ifCode"
                      :label="item.ifName"
                      :value="item.ifCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="手续费类型" label-width="130px">
                  <el-radio-group v-model="addTypeFrom.feeType">
                    <el-radio border label="1">百分比收费</el-radio>
                    <el-radio border label="2">固定收费</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col
                :xs="24"
                :sm="24"
                :md="12"
                :lg="12"
                :xl="12"
                class="start"
                v-if="addTypeFrom.feeType == 1"
              >
                <el-form-item label="手续费费率(%)" label-width="130px">
                  <el-input v-model="addTypeFrom.feeRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start" v-else>
                <el-form-item label="每笔手续费(元)" label-width="130px">
                  <el-input v-model="addTypeFrom.feeEvery"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="通道状态" label-width="130px">
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
        feeType: "1",
        passageName: "",
        feeRate: "",
        feeEvery: "",
        status: "1",
        ifCode: "",
        remark: "",
      },
      payPort: null,
    };
  },
  methods: {
    toPayList() {
      this.$router.push("telephone_order_list");
    },
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/config/agentpay_passage/add",
        data: {
          body: {
            feeType: this.addTypeFrom.feeType,
            passageName: this.addTypeFrom.passageName,
            feeRate: this.addTypeFrom.feeType == 1 ? this.addTypeFrom.feeRate : null,
            feeEvery: this.addTypeFrom.feeType == 2 ? this.addTypeFrom.feeEvery * 100 : null,
            status: this.addTypeFrom.status,
            ifCode: this.addTypeFrom.ifCode,
            remark: this.addTypeFrom.remark,
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
              feeType: "1",
              passageName: "",
              feeRate: "",
              feeEvery: "",
              status: "1",
              ifCode: "",
              remark: "",
            };
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPayPort() {
      this.axios({
        method: "post",
        url: "/api/config/common/pay_interface_all",
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
            this.payPort = res.data.body;
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
    this.getPayPort();
  },
};
</script>

<style>
</style>