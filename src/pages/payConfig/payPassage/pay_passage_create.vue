<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/pay_passage_config' }">支付通道列表</el-breadcrumb-item>
      <el-breadcrumb-item>新增支付通道</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>新增支付通道</span>
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
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="通道费率(%)" label-width="130px">
                  <el-input v-model="addTypeFrom.passageRate"></el-input>
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
        ifCode: "",
        passageName: "",
        passageRate: 0,
        payType: "",
        remark: "",
        status: "1",
      },
      payPort: null,
      payType: null,
    };
  },
  methods: {
    toPayList() {
      this.$router.push("pay_passage_config");
    },
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/config/pay_passage/add",
        data: {
          body: {
            ifCode: this.addTypeFrom.ifCode,
            passageName: this.addTypeFrom.passageName,
            passageRate: Number(this.addTypeFrom.passageRate),
            payType: this.addTypeFrom.payType,
            remark: this.addTypeFrom.remark,
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
            this.addTypeFrom = {
              ifCode: "",
              passageName: "",
              passageRate: 0,
              payType: "",
              remark: "",
              status: "1",
            };
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
    this.getPayType();
  },
};
</script>

<style>
</style>