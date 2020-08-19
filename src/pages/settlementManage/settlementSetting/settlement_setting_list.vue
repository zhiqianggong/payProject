<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <el-tabs v-model="activeName">
            <el-tab-pane label="商户继承结算设置" name="first">
              <el-row :gutter="10">
                <el-form :model="settlementMap">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="提现开关" label-width="150px">
                      <el-radio-group v-model="settlementMap.drawFlag">
                        <el-radio border label="0">关闭</el-radio>
                        <el-radio border label="1">开启</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="允许星期几提现" label-width="150px">
                      <el-checkbox-group v-model="settlementMap.allowDrawWeekDay">
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
                        v-model="settlementMap.drawDayStartTime"
                        value-format="HH:mm:ss"
                        placeholder="开始时间"
                      ></el-time-picker>
                      <el-time-picker
                        arrow-control
                        v-model="settlementMap.drawDayEndTime"
                        value-format="HH:mm:ss"
                        placeholder="结束时间"
                      ></el-time-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="每日提现次数" label-width="150px">
                      <el-input v-model="settlementMap.dayDrawTimes"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="每日提现最大金额(元)" label-width="150px">
                      <el-input v-model="settlementMap.drawMaxDayAmount"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="单笔最大提现金额(元)" label-width="150px">
                      <el-input v-model="settlementMap.maxDrawAmount"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="单笔最小提现金额(元)" label-width="150px">
                      <el-input v-model="settlementMap.minDrawAmount"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="结算手续费类型(元)" label-width="150px">
                      <el-radio-group v-model="settlementMap.feeType">
                        <el-radio border label="1">百分比收费</el-radio>
                        <el-radio border label="2">固定收费</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="每笔手续费(元)" label-width="150px">
                      <el-input v-model="settlementMap.feeRate"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="单笔手续费上限(元)" label-width="150px">
                      <el-input v-model="settlementMap.drawFeeLimit"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="结算类型" label-width="150px">
                      <el-radio-group v-model="settlementMap.settType" disabled>
                        <el-radio border label="0">手动提现</el-radio>
                        <el-radio border label="1">自动结算</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="结算方式" label-width="150px">
                      <el-radio-group v-model="settlementMap.settMode">
                        <el-radio border label="1">D0到账</el-radio>
                        <el-radio border label="2">D1到账</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item style="text-align:center">
                      <el-button type="info" class="green" @click="submit(1)">确定保存</el-button>
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="代付设置" name="second">
              <el-row :gutter="10">
                <el-form :model="settlementMap">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="代付出款账户" label-width="150px">
                      <el-radio-group v-model="settlementMap.agentpayOutBalance">
                        <el-radio border label="1">收款账户余额</el-radio>
                        <el-radio border label="2">代付账户余额</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item style="text-align:center">
                      <el-button type="info" class="green" @click="submit(2)">确定保存</el-button>
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      settlementMap: {
        agentpayOutBalance: "",
        allowDrawWeekDay: [],
        dayDrawTimes: "",
        drawDayEndTime: new Date(2016, 9, 10, 18, 40),
        drawDayStartTime: new Date(2016, 9, 10, 18, 40),
        drawFeeLimit: "",
        drawFlag: "",
        drawMaxDayAmount: "",
        feeLevel: "",
        feeRate: "",
        feeType: "",
        maxDrawAmount: "",
        minDrawAmount: "",
        settMode: "",
        settType: "",
        type: "",
      },
    };
  },
  methods: {
    submit(val) {
      if(val == 1) {
        this.settlementMap.type = "sett";
      } else {
        this.settlementMap.type = "agentpay";
      }
      let curSelect = "";
      curSelect = this.settlementMap.allowDrawWeekDay.join("");
      curSelect = curSelect.substring(0, curSelect.length - 1);

      this.axios({
        method: "post",
        url: "/api/sys/config/update",
        data: {
          body: {
            agentpayOutBalance: this.settlementMap.agentpayOutBalance,
            allowDrawWeekDay: curSelect,
            dayDrawTimes: this.settlementMap.dayDrawTimes,
            drawDayEndTime: this.settlementMap.drawDayEndTime,
            drawDayStartTime: this.settlementMap.drawDayStartTime,
            drawFeeLimit: this.settlementMap.drawFeeLimit,
            drawFlag: this.settlementMap.drawFlag,
            drawMaxDayAmount: this.settlementMap.drawMaxDayAmount,
            feeLevel: this.settlementMap.feeLevel,
            feeRate: this.settlementMap.feeRate,
            feeType: this.settlementMap.feeType,
            maxDrawAmount: this.settlementMap.maxDrawAmount,
            minDrawAmount: this.settlementMap.minDrawAmount,
            settMode: this.settlementMap.settMode,
            settType: this.settlementMap.settType,
            type: this.settlementMap.type,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          this.messageInfo(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDetail() {
      this.axios({
        method: "post",
        url: "/api/sys/config/get",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          this.loading = false;
          if (res.data.code == 200) {
            let dataList = res.data.body;
            let arr = dataList.allowDrawWeekDay.split(",");
            dataList.allowDrawWeekDay = [];
            arr.forEach((element) => {
              dataList.allowDrawWeekDay.push(element + ",");
            });
            this.settlementMap = {
              agentpayOutBalance: dataList.agentpayOutBalance,
              allowDrawWeekDay: dataList.allowDrawWeekDay,
              dayDrawTimes: dataList.dayDrawTimes,
              drawDayEndTime: dataList.drawDayEndTime,
              drawDayStartTime: dataList.drawDayStartTime,
              drawFeeLimit: dataList.drawFeeLimit,
              drawFlag: dataList.drawFlag,
              drawMaxDayAmount: dataList.drawMaxDayAmount,
              feeLevel: dataList.feeLevel,
              feeRate: dataList.feeRate,
              feeType: String(dataList.feeType),
              maxDrawAmount: dataList.maxDrawAmount,
              minDrawAmount: dataList.minDrawAmount,
              settMode: String(dataList.settMode),
              settType: String(dataList.settType),
              type: String(dataList.type),
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
    this.getDetail();
  },
};
</script>

<style>
</style>