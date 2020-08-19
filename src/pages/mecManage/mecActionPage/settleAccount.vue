<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/allMec' }">商户列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/settleAccount' }">结算设置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>结算设置</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="modifyMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="商户名称" label-width="150px">
                  <el-input v-model="modifyMecFrom.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="结算配置" label-width="150px" class="reset-select">
                  <el-radio-group v-model="modifyMecFrom.settConfigMode">
                    <el-radio border label="1">继承系统</el-radio>
                    <el-radio border label="2">自定义</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <div v-show="this.modifyMecFrom.settConfigMode == 2">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="提现开关" label-width="150px">
                    <el-radio-group v-model="modifyMecFrom.drawFlag">
                      <el-radio border label="0">关闭</el-radio>
                      <el-radio border label="1">开启</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="允许星期几提现" label-width="150px">
                    <el-checkbox-group v-model="modifyMecFrom.allowDrawWeekDay">
                      <el-checkbox label="1," name="type">星期一</el-checkbox>
                      <el-checkbox label="2," name="type">星期二</el-checkbox>
                      <el-checkbox label="3," name="type">星期三</el-checkbox>
                      <el-checkbox label="4," name="type">星期四</el-checkbox>
                      <el-checkbox label="5," name="type">星期五</el-checkbox>
                      <el-checkbox label="6," name="type">星期六</el-checkbox>
                      <el-checkbox label="7," name="type">星期日</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item class="reset-data" label="每日提现时间" label-width="150px">
                    <el-time-picker
                      v-model="modifyMecFrom.drawDayStartTime"
                      :picker-options="{
                                selectableRange: '00:00:00 - 23:59:59'
                            }"
                      placeholder="开始时间"
                    ></el-time-picker>
                    <el-time-picker
                      arrow-control
                      v-model="modifyMecFrom.drawDayEndTime"
                      :picker-options="{
                                selectableRange: '00:00:00 - 23:59:59',
                                minTime: modifyMecFrom.drawDayStartTime
                            }"
                      placeholder="结束时间"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="每日提现次数" label-width="150px">
                    <el-input v-model="modifyMecFrom.dayDrawTimes"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="每日提现最大金额(元)" label-width="150px">
                    <el-input v-model="modifyMecFrom.drawMaxDayAmount"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="单笔最大提现金额(元)" label-width="150px">
                    <el-input v-model="modifyMecFrom.maxDrawAmount"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="单笔最小提现金额(元)" label-width="150px">
                    <el-input v-model="modifyMecFrom.minDrawAmount"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="结算手续费类型(元)" label-width="150px">
                    <el-radio-group v-model="modifyMecFrom.feeType">
                      <el-radio border label="1">百分比收费</el-radio>
                      <el-radio border label="2">固定收费</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="每笔手续费(元)" label-width="150px">
                    <el-input v-model="modifyMecFrom.feeRate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="单笔手续费上限(元)" label-width="150px">
                    <el-input v-model="modifyMecFrom.drawFeeLimit"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="结算类型" label-width="150px">
                    <el-radio-group v-model="modifyMecFrom.settType" disabled>
                      <el-radio border label="0">手动提现</el-radio>
                      <el-radio border label="1">自动结算</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="结算方式" label-width="150px">
                    <el-radio-group v-model="modifyMecFrom.settMode">
                      <el-radio border label="1">D0到账</el-radio>
                      <el-radio border label="2">D1到账</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </div>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button type="info" class="green" @click="submitForm()">添加</el-button>
                  <el-button plain @click="$router.push('/allMec')">返回</el-button>
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
      modifyMecFrom: {
        allowDrawWeekDay: [],
        dayDrawTimes: 10,
        drawDayEndTime: new Date(2016, 9, 10, 18, 40),
        drawDayStartTime: new Date(2016, 9, 10, 18, 40),
        drawFeeLimit: 0,
        drawFlag: "1",
        drawMaxDayAmount: 0,
        feeLevel: "",
        feeRate: 0,
        feeType: "2",
        maxDrawAmount: 0,
        mchId: 0,
        minDrawAmount: 0,
        name: "",
        settConfigMode: "1",
        settMode: "2",
        settType: "0",
      },
      detailList: null,
      tableData: [],
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    submitForm() {
      let curSelect = "";
      curSelect = this.modifyMecFrom.allowDrawWeekDay.join("");
      curSelect = curSelect.substring(0, curSelect.length - 1);
      this.axios({
        method: "post",
        url: "/api/mch_info/sett_update",
        data: {
          body: {
            allowDrawWeekDay: curSelect,
            dayDrawTimes: this.modifyMecFrom.dayDrawTimes,
            drawDayEndTime: this.modifyMecFrom.drawDayEndTime,
            drawDayStartTime: this.modifyMecFrom.drawDayStartTime,
            drawFeeLimit: this.modifyMecFrom.drawFeeLimit,
            drawFlag: this.modifyMecFrom.drawFlag,
            drawMaxDayAmount: this.modifyMecFrom.drawMaxDayAmount,
            feeLevel: this.modifyMecFrom.feeLevel,
            feeRate: this.modifyMecFrom.feeRate,
            feeType: this.modifyMecFrom.feeType,
            maxDrawAmount: this.modifyMecFrom.maxDrawAmount,
            mchId: this.$route.query.id,
            minDrawAmount: this.modifyMecFrom.minDrawAmount,
            name: this.modifyMecFrom.allowDrawWnameeekDay,
            settConfigMode: this.modifyMecFrom.allosettConfigModeDrawWeekDay,
            settMode: this.modifyMecFrom.settMode,
            settType: this.modifyMecFrom.settType,
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
            this.modifyMecFrom = {
              allowDrawWeekDay: [],
              dayDrawTimes: 10,
              drawDayEndTime: new Date(2016, 9, 10, 18, 40),
              drawDayStartTime: new Date(2016, 9, 10, 18, 40),
              drawFeeLimit: 0,
              drawFlag: "1",
              drawMaxDayAmount: 0,
              feeLevel: "",
              feeRate: 0,
              feeType: "2",
              maxDrawAmount: 0,
              mchId: 0,
              minDrawAmount: 0,
              name: "",
              settConfigMode: "1",
              settMode: "2",
              settType: "0",
            };
            this.getUserDetail();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUserDetail() {
      this.axios({
        method: "post",
        url: "/api/mch_info/get",
        data: {
          body: {
            mchId: this.$route.query.id,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.detailList = res.data.body;
            this.modifyMecFrom.name = this.detailList.name;
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
    this.getUserDetail();
  },
};
</script>

<style>
</style>