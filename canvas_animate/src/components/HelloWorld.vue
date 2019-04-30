<template>
  <div>
    <!-- title -->
    <div class="title">
      <div class="left">
        <router-link to="/about"><</router-link>
      </div>外汇金管家
    </div>
    <!-- part1 -->
    <div class="page-top">
      <div class="card-all">
        <div class="card-all-in flex">
          <!-- 卡片1 -->
          <div class="card card1">
            <div class="card-top flex-between">
              <div class="card-top-left">6226 4816 2576 9082</div>
              <div class="card-top-right">总行营业部</div>
            </div>
            <div class="card-yu">账户余额（美元）</div>
            <div class="card-money1">8,030,188.00</div>
            <div class="card-yu">可用余额（美元）</div>
            <div class="card-money2">2,888,990.00</div>
            <div class="card-button">账户详情</div>
          </div>
          <!-- 卡片2 -->
          <div class="card card2">
            <div class="card-top flex-between">
              <div class="card-top-left">6226 4816 2576 9082</div>
              <div class="card-top-right">总行营业部</div>
            </div>
            <div class="card-yu">账户余额（美元）</div>
            <div class="card-money1">8,030,188.00</div>
            <div class="card-yu">可用余额（美元）</div>
            <div class="card-money2">2,888,990.00</div>
            <div class="card-button">账户详情</div>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="box-item" v-for="item in 4">
          <div class="flex-center">
            <img src="../assets/jiqi.jpg" class="item-img">
          </div>
          <div>即期</div>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="list-all">
      <div class="list-top flex-between">
        <div class="list-top-left">外汇查询</div>
        <div class="flex list-top-right">
          <img src="../assets/shua.png" class="shuaxin">
          <span>2019-02-25 09:30:51</span>
        </div>
      </div>
      <div class="list-item flex" v-for="item in 4">
        <div class="list-item-left">
          <div class="item-left-top flex">
            <img src="../assets/mei.png">
            <span>美元(USD)</span>
          </div>
          <div class="item-box">
            <div class="item-box-top">现汇买入价</div>
            <div class="item-box-bottom">{{item.qian}}668.17</div>
          </div>
        </div>
        <div class="list-item-right">
          <div class="item-right-box">
            <div class="item-box-top">当日涨幅</div>
            <div class="item-box-bottom" style="color:#D32A2A;">+0.07%</div>
          </div>
          <div class="item-right-box">
            <div class="item-box-top">近三个月涨幅</div>
            <div class="item-box-bottom" style="color:#42C029;">-3.45%</div>
          </div>
          <div class="item-right-box">
            <div class="item-box-top">现汇卖出价</div>
            <div class="item-box-bottom">671.04</div>
          </div>
          <div class="item-right-box">
            <div class="item-box-top">现钞买入价</div>
            <div class="item-box-bottom">662.61</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  name: "css",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    route_goto() {}
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.flex {
  display: flex;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
.flex-around {
  display: flex;
  justify-content: space-around;
}
.flex-center {
  display: flex;
  justify-content: center;
}
div {
  box-sizing: border-box;
}

.title {
  width: 100%;
  position: relative;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
  padding: 10px;
}
.left {
  position: absolute;
  left: 20px;
  top: 10px;
  font-size: 18px;
}

.page-top {
  background-color: #fff;
  margin-top: 2px;
}
.card-all {
  position: relative;
  overflow-x: scroll;
  width: 100%;
  height: 180px;
}
.card-all-in {
  position: absolute;
  width: 640px;
  top: 0;
  left: 0;
  padding: 5px 10px;
}
.card-all::-webkit-scrollbar {
  display: none;
}
.card {
  width: 310px;
  height: 160px;
  box-shadow: 0 1px 6px 0 rgba(13, 53, 190, 0.2),
    0 1px 12px 0 rgba(0, 27, 120, 0.2);
  border-radius: 8px;
  display: inline-block;
  margin: 5px;
  padding: 10px;
  position: relative;
}
.card1 {
  background-image: linear-gradient(-135deg, #1b458d 0%, #6992ce 100%);
}
.card2 {
  background-image: linear-gradient(-134deg, #105c60 0%, #5c9b9c 100%);
}
.card-top {
  margin-bottom: 10px;
}
.card-top-left {
  font-family: AndaleMono;
  color: #334768;
}
.card-top-right {
  color: rgba(255, 255, 255, 0.8);
}
.card-yu {
  color: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
}
.card-money1 {
  font-family: SFProText-Medium;
  font-size: 24px;
  color: #ffffff;
}
.card-money2 {
  font-family: SFProText-Medium;
  font-size: 18px;
  color: #ffffff;
}
.card-button {
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: #fff;
  border-radius: 14px;
  padding: 5px 15px;
  color: #254f95;
  text-align: center;
}
.card1-bg1 {
  position: absolute;
  right: 0;
  top: 0;
  height: 110px;
  width: 110px;
}
.card1-bg2 {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 57px;
  width: 100%;
}

.box {
  color: #2c2c2c;
  padding-bottom: 10px;
}
.box-item {
  text-align: center;
  display: inline-block;
  width: 25%;
  padding: 10px;
}
.item-img {
  width: 35px;
  height: 35px;
}

.list-all {
  margin-top: 15px;
  background-color: #fff;
  padding: 15px;
}
.list-top {
  padding: 0;
}
.list-top-left {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #2c2c2c;
}
.list-top-right {
  color: #4f5fce;
}
.shuaxin {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}
.list-item {
  border-bottom: 1px dashed #f1f1f1;
  padding: 10px 0;
}
.list-item-left {
  width: 40%;
}
.list-item-right {
  width: 60%;
}
.item-left-top {
  padding: 5px 0 20px 0;
}
.item-left-top img {
  width: 22px;
  height: 14px;
  margin: 3px 5px 0 0;
}
.item-left-top span {
  font-size: 14px;
}
.item-box-top {
  color: #999999;
}
.item-box-bottom {
  font-family: SFProText-Medium;
  line-height: 28px;
}
.item-right-box {
  width: 48%;
  display: inline-block;
}

/* 票据好管家 */
.card3 {
  width: 100%;
  height: 160px;
  box-shadow: 0 1px 6px 0 rgba(13, 53, 190, 0.2),
    0 1px 12px 0 rgba(0, 27, 120, 0.2);
  border-radius: 8px;
  display: inline-block;
  padding: 10px;
  position: relative;
  background-image: linear-gradient(-135deg, #1b458d 0%, #6992ce 100%);
  color: rgba(255, 255, 255, 0.7);
}
.card-button2 {
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 14px;
  padding: 3px 10px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.7);
}
.card-top-img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.card3-money {
  font-size: 30px;
  font-family: SFProText-Medium;
  line-height: 60px;
  color: #fff;
}
.card3-bottom {
  width: 50%;
}
.card3-bottom-word {
  font-size: 18px;
  font-family: SFProText-Medium;
  line-height: 30px;
  color: #fff;
}
.tab {
  margin: 10px 0;
  background-color: #fff;
  padding: 10px 0;
}
.tab-item {
  text-align: center;
  width: 50%;
  position: relative;
}
.checked:after {
  content: "";
  position: absolute;
  height: 3px;
  background-color: #ff8d00;
  width: 20%;
  bottom: -8px;
  left: 40%;
  border-radius: 10px;
}

.page2-list-top {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 10px;
}
.page2-top-left {
  font-family: PingFangSC-Medium;
  font-size: 16px;
}
.page2-top-right {
  color: #cccccc;
  margin-top: 2px;
}
.page2-list {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.page2-color1 {
  font-size: 14px;
  color: #6b739f;
  display: inline-block;
  width: 40px;
}
.page2-color2 {
  font-size: 16px;
  color: #d32a2a;
  width: 82%;
  word-wrap: break-word;
}
.page2-color3 {
  font-size: 12px;
  color: #333333;
  width: 82%;
  word-wrap: break-word;
  margin-top: 2px;
}
.page2-list-buttom {
  height: 28px;
  width: 20%;
  line-height: 28px;
  border: 1px solid #4055cb;
  color: #4055cb;
  border-radius: 2px;
  margin-right: 10px;
  text-align: center;
  margin-top: 5px;
}
</style>
