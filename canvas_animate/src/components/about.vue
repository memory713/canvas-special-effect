<template>
  <div style="padding:20px;">
    <!-- title -->
    <div class="title">
      <router-link to="/meng" class="left"><</router-link>
      <div>about</div>
      <router-link to="/" class="right">></router-link>
    </div>
    <div>地图组建</div>
    <div id="allmap" style="width:100%;height:400px;"></div>
    <h1>一、定位position和浮动</h1>
    <div>
      <img src="../assets/1.jpg" style="width:100%;">
    </div>
    <h1>例子 父元素不设定宽高</h1>
    <div style="width:100%;padding:20px;background-color:#fff;">
      <div class="lizi">
        <h3>1.正常定位</h3>
        <div style="display:inline-block;border:1px solid #000;position:relative">
          父
          <div style="width:50px;height:50px;border:1px solid blue;">子</div>
        </div>
        <div class="bg_blue">其他元素</div>
      </div>
      <div class="lizi">
        <h3>2.absolute定位</h3>
        <div style="display:inline-block;border:1px solid #000;position:relative">
          父
          <div style="width:50px;height:50px;border:1px solid blue;position:absolute;">子</div>
        </div>
        <div class="bg_blue">其他元素</div>
      </div>
      <div class="lizi">
        <h3>3.fixed定位</h3>
        <div style="display:inline-block;border:1px solid #000;position:relative">
          父
          <div
            style="width:50px;height:50px;border:1px solid blue;position:fixed;right:20px;bottom:70px;"
          >子1</div>
        </div>
        <div class="bg_blue">其他元素</div>
      </div>
      <h1>布局</h1>
      <img src="../assets/5.png" alt>
      <h3></h3>
      <div class="flex">
        <ol>
          大div:
          <li>width:200px;</li>
          <li>background-color:rgba(0,0,0,0.3);</li>
          <li>height:100px;</li>
          <li>padding:10px;</li>
          <li>overflow:scroll;</li>
        </ol>
        <ol>
          小div:
          <li>width:500px;</li>
          <li>background-color:rgba(240,140,40,0.3);</li>
          <li>height:80px;</li>
          <li>padding:10px;</li>
        </ol>
        <ol>
          小卡片:
          <li>width:30px;</li>
          <li>background-color:blue;</li>
          <li>height:50px;</li>
          <li>margin-right:20px;</li>
          <li>display:inline-block;</li>
        </ol>
      </div>

      <div class="flex-center">
        <div
          style="width:200px;background-color:rgba(0,0,0,0.3);height:100px;padding:10px;overflow:scroll;"
        >
          <div style="width:500px;height:80px;background-color:rgba(240,140,40,0.3);padding:10px;">
            <div
              style="background-color:blue;width:30px;height:50px;margin-right:20px;display:inline-block;"
              v-for="item in 3"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <h1>二、flex布局</h1>
    <a href="http://www.runoob.com/w3cnote/flex-grammar.html">菜鸟教程关于flex详解</a>
    <h1>三、蒙层布局</h1>
    <router-link to="/meng">蒙层布局</router-link>
    <img src="../assets/6.png" alt style="width:100%;">
    <img src="../assets/7.png" alt style="width:100%;">
    <img src="../assets/8.jpeg" alt style="width:100%;">

    <h1>四、其他</h1>
    <h2>display属性和换行</h2>
    <img src="../assets/9.png" alt style="width:100%;">
    <ol>
      强制不换行，并且多行文字溢出显示省略号：
      <li>white-space:nowrap;</li>
      <li>overflow:hidden;</li>
      <li>text-overflow:ellipsis;</li>
    </ol>
    <h2>例子</h2>
    <div
      style="background-color:blue;display:block;padding:10px;color:#fff;"
      class
    >block元素 块级元素 独占一行 比如div</div>
    <div class="display display-block0">inline-block 内联块元素 可以设定宽高 比如img</div>
    <div class="display display-block0">inline-block/inline 之间会有空隙</div>
    <div class="display display-block0">inline-block 对于图片 在父元素用font-size：0；</div>
    <div class="display display-block0">inline-block 用float: left;</div>
    <div style>
      <img src="../assets/10.png" class="img-0">
      <img src="../assets/10.png" class="img-0">
      <img src="../assets/10.png" class="img-0">
      <img src="../assets/10.png" class="img-0">
    </div>
    <div style="font-size:14px;margin-top:20px;">
      <span class="display-inline display">inline 行内元素或者内联元素 比如span</span>
      <span class="display-inline display">inline 没有宽高！</span>
    </div>
    <h2>垂直居中和line-height</h2>
    <div
      style="border:1px solid;height:50px;line-height:50px;text-align:center;"
    >文字的垂直居中：如果是一行文字 就用line-height=元素高度</div>
    <div
      style="border:1px solid;text-align:center;width:100%;padding:20px;"
    >文字的垂直居中：如果是多行文字 去掉高度和行高 用padding制造垂直居中的效果 上下给个数值 左右随便</div>
    <h2>box-sizing：border-box；</h2>
    <div>举个例子：</div>
    <h4>父元素 宽500px 高200px padding:20px;box-sizing:border-box;</h4>
    <div style="width:500px;border:1px solid;height:200px;padding:20px;">
      <div style="background-color:rgba(0,0,0,0.2);width:100%;height:100%;">我是儿子 宽500px 高200px</div>
    </div>
    <h4>父元素 宽500px 高200px padding:20px box-sizing:content-box;</h4>
    <div style="width:500px;border:1px solid;height:200px;padding:20px;box-sizing:content-box;">
      <div style="background-color:rgba(0,0,0,0.2);width:100%;height:100%;">我是儿子 宽100% 高100%</div>
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
  mounted() {
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(121.36835, 31.141154);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    map.centerAndZoom(point, 15);
    var opts = {
      width: 200, // 信息窗口宽度
      height: 50, // 信息窗口高度
      title: "上海霍卫工艺设备有限公司" // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(
      "地址：上海市闵行区七莘路1839号北楼1202室",
      opts
    ); // 创建信息窗口对象

    map.openInfoWindow(infoWindow, point); //开启信息窗口
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  },
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
  top: 5px;
  font-size: 18px;
}
.right {
  position: absolute;
  right: 20px;
  top: 5px;
  font-size: 18px;
}

.lizi {
  display: inline-block;
  width: 30%;
}
.bg_blue {
  background-color: rgba(230, 30, 80, 0.4);
  width: 50px;
  height: 50px;
}
.display {
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
}
.display-inline {
  background-color: yellow;
  color: blue;
  font-size: 14px;
  width: 50px;
  height: 50px;
}
.display-block0 {
  background-color: green;
  display: inline-block;
}
.img-0 {
  width: 100px;
}
</style>
