<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/notify' }">商户通知</el-breadcrumb-item>
      <el-breadcrumb-item>通知详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>通知详情</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="detaliFrom">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="订单号" label-width="130px">
                  <el-input v-model="detaliFrom.orderId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户ID" label-width="130px">
                  <el-input v-model="detaliFrom.mchId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户订单号" label-width="130px">
                  <el-input v-model="detaliFrom.mchOrderNo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="应用ID" label-width="130px">
                  <el-input v-model="detaliFrom.appId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="订单类型" label-width="130px">
                  <el-input v-model="detaliFrom.orderType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="通知次数" label-width="130px">
                  <el-input v-model="detaliFrom.notifyCount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="通知状态" label-width="130px">
                  <el-input v-model="detaliFrom.status" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="响应结果" label-width="130px">
                  <el-input v-model="detaliFrom.result" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="创建时间" label-width="130px">
                  <el-input v-model="detaliFrom.createTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="修改时间" label-width="130px">
                  <el-input v-model="detaliFrom.updateTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="最后通知" label-width="130px">
                  <el-input v-model="detaliFrom.lastNotifyTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="通知地址" label-width="130px">
                  <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="detaliFrom.notifyUrl" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button plain @click="$router.push('/notify')">返回</el-button>
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
      detaliFrom: {
        appId: "",
        createTime: "",
        lastNotifyTime: "",
        mchId: "",
        mchOrderNo: "",
        notifyCount: "",
        notifyUrl: "",
        orderId: "",
        orderType: "",
        result: "",
        status: "",
        updateTime: "",
      },
    };
  },
  methods: {
    getAppDetail() {
      this.axios({
        method: "post",
        url: "/api/mch_notify/get",
        data: {
          body: {
            orderId: this.$route.query.id,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            let dataList = res.data.body;
            if(dataList.orderType == 1) {
                dataList.orderType = "支付"
            } else if (dataList.orderType == 2) {
                dataList.orderType = "转账"
            } else {
                dataList.orderType = "退款"
            }
            if(dataList.status == 1) {
                dataList.status = "通知中"
            } else if (dataList.status == 2) {
                dataList.status = "通知成功"
            } else {
                dataList.status = "通知失败"
            }
            this.detaliFrom = {
              appId: dataList.appId,
              createTime: this.getLocalTime(dataList.createTime),
              lastNotifyTime: this.getLocalTime(dataList.lastNotifyTime),
              mchId: dataList.mchId,
              mchOrderNo: dataList.mchOrderNo,
              notifyCount: dataList.notifyCount,
              notifyUrl: dataList.notifyUrl,
              orderId: dataList.orderId,
              orderType: dataList.orderType,
              result: dataList.result,
              status: dataList.status,
              updateTime: this.getLocalTime(dataList.updateTime),
            };
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