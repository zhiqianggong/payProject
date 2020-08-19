<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/pay_port_list' }">支付接口列表</el-breadcrumb-item>
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
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="接口类型" label-width="130px" class="reset-select">
                  <el-select v-model="addTypeFrom.ifTypeCode" placeholder="请选择">
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
                <el-form-item label="接口代码" label-width="130px">
                  <el-input v-model="addTypeFrom.ifCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="接口名称" label-width="130px">
                  <el-input v-model="addTypeFrom.ifName"></el-input>
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
                <el-form-item label="应用场景" label-width="130px">
                  <el-radio-group v-model="addTypeFrom.scene">
                    <el-radio border label="1">移动APP</el-radio>
                    <el-radio border label="2">移动网页</el-radio>
                    <el-radio border label="3">PC网页</el-radio>
                    <el-radio border label="4">微信公众号</el-radio>
                    <el-radio border label="5">手机扫码</el-radio>
                  </el-radio-group>
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
                <el-form-item label="扩展参数" label-width="130px">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 6}"
                    placeholder="当支付类型为网银支付时,可配置支持的银行列表.格式如:[{'bank':'zhonghang','code':'300008'},{'bank':'nonghang','code':'300009'}]"
                    v-model="addTypeFrom.param"
                  ></el-input>
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
        extra: "",
        ifCode: "",
        ifName: "",
        ifTypeCode: "",
        param: "",
        payType: "",
        remark: "",
        scene: "1",
        status: "1",
      },
      payPort: null,
      payType: null,
    };
  },
  methods: {
    toPayList() {
      this.$router.push("pay_port_list");
    },
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/config/pay_interface/add",
        data: {
          body: {
            extra: this.addTypeFrom.extra,
            ifCode: this.addTypeFrom.ifCode,
            ifName: this.addTypeFrom.ifName,
            ifTypeCode: this.addTypeFrom.ifTypeCode,
            param: this.addTypeFrom.param,
            payType: this.addTypeFrom.payType,
            remark: this.addTypeFrom.remark,
            scene: this.addTypeFrom.scene,
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
              extra: "",
              ifCode: "",
              ifName: "",
              ifTypeCode: "",
              param: "",
              payType: "",
              remark: "",
              scene: "",
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