<template>
  <div class="body">
    <div class="title2" style="position:relative;z-index:3;">
      <router-link to="/" class="left"><</router-link>
      <div>我是一个标题 (高40px)</div>
      <router-link to="/about" class="right">></router-link>
    </div>
    <div class="tab flex" style="position:relative;z-index:3;">
      <div class="tab-item" v-for="(item,index) in 4" @click="tab">tab{{index}}</div>
    </div>
    <div class="tab-nei" v-show="mengShow" style="position:relative;z-index:3;">
      我是tab的内容 整体高度大于可视高度
      <div class="tab-height">
        <div v-for="(item,index) in 8" class="tab-nei-item">{{index}}</div>
      </div>
      <div style="height:38px;width:100%;"></div>
      <div class="flex tab-bottom" @click="xiaoshi">
        <div class="tab-nei-bottom">取消</div>
        <div class="tab-nei-bottom" style="background-color: rgba(26, 43, 122, 1);">确定</div>
      </div>
    </div>
    <div class="neirong">
      我是列表页，高不限margin-top: 10px;
      <div class="list-item" v-for="(item,index) in 100">list{{index}}</div>
    </div>

    <div class="meng" v-show="mengShow" @click="xiaoshi"></div>
  </div>
</template>
<script>
/* eslint-disable */
import $ from "jquery";

export default {
  data() {
    return {
      mengShow: false
    };
  },
  watch: {
    mengShow(val) {
      if (val) {
        $(".body").height($(window).height());
        $(".body").css("overflow", "hidden");
      } else {
        $(".body").css("height", "auto");
        $(".body").css("overflow", "scroll");
      }
    }
  },
  mounted() {
    $(".meng").height($(window).height());
  },
  methods: {
    tab() {
      if (this.mengShow) {
        this.mengShow = false;
      } else {
        this.mengShow = true;
        // 计算最大高度
        var height_most = $(window).height() - 40 - 37 - 37 - 18;
        setTimeout(function() {
          if ($(".tab-height").height() < height_most) {
            console.log("小于");
          } else {
            console.log("大于");
            $(".tab-height").height(height_most);
            $(".tab-height").css("overflow", "scroll");
          }
        }, 300);
      }
    },
    xiaoshi() {
      this.mengShow = false;
    }
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
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
  padding: 10px;
}
.left {
  position: absolute;
  left: 20px;
  top: 0;
  font-size: 18px;
}
.right {
  position: absolute;
  right: 20px;
  top: 0;
  font-size: 18px;
}
.title2 {
  background-color: #fff;
  width: 100%;
  position: relative;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.neirong {
  margin-top: 10px;
  background-color: #fff;
}
.tab {
  position: relative;
  background-color: rgba(26, 43, 122, 0.4);
}
.tab-item {
  padding: 10px;
  text-align: center;
  width: 25%;
  position: relative;
  color: #fff;
}
.tab-item::after {
  content: "";
  height: 20px;
  width: 1px;
  background-color: #000;
  position: absolute;
  right: 0;
}
.list-item {
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.meng {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.tab-nei {
  position: relative;
  background-color: #fff;
  width: 100%;
}
.tab-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.tab-nei-bottom {
  padding: 10px;
  color: #fff;
  text-align: center;
  width: 50%;
  background-color: rgba(26, 43, 122, 0.4);
}
.tab-nei-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: rgba(254, 227, 193, 0.6);
}
.tab-height {
  height: auto;
}
</style>
