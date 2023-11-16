<template>
  <div>
    <div class="md:flex p-4">
      <Card
        size="small"
        :loading="loading"
        title="css渐变"
        class="md:w-3/3 w-full !md:mt-0"
        :canExpan="false"
      >
        <div class="css-top">这是一个css渐变</div>
        <pre>
.css-top{
  width: 100%;
  height: 100px;
  background-image: linear-gradient(to right,pink,blue);
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
  line-height: 100px;
}
      </pre
        >
      </Card>
    </div>
    <div class="md:flex p-4">
      <Card
        size="small"
        :loading="loading"
        title="fillStyle 填充"
        class="md:w-1/3 w-full !md:mt-0"
        :canExpan="false"
      >
        <pre>
fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。
fillStyle赋值场景(strokeStyle)
  color （颜色作为背景色）
  gradient (渐变)
  img
  canvas （其他动画作为背景色）
  video
        </pre>
        <h1>color填充</h1>
        <canvas id="canvasFill1" height="50" width="300"></canvas>
        <pre>
const ctxFill1 = document.getElementById('canvasFill1').getContext('2d');
ctxFill1.lineWidth = 30;
for (var i = 0; i &lt; 255; i++) {
  ctxFill1.beginPath();
  ctxFill1.moveTo(10 + i - 1, 10);
  ctxFill1.lineTo(10 + i, 10);
  ctxFill1.strokeStyle = 'rgb(' + i + ',' + i + ',' + i + ')';
  ctxFill1.stroke();
}
        </pre>
      </Card>
      <Card
        size="small"
        :loading="loading"
        title="图片填充"
        class="md:w-2/3 w-full"
        :canExpan="false"
      >
        <div class="con">
          <canvas id="canvasFill2" width="800" height="500"></canvas>
        </div>
        <pre>
 var W = 1000,H = 500,ctxFill2,angle = -5,len = 10,count = 850;
ctxFill2 = document.getElementById('canvasFill2').getContext('2d');
ctxFill2.strokeStyle = 'rgba(255,255,250,0.3)';

setInterval(draw, 100);

function draw() {
  ctxFill2.clearRect(0, 0, W, H); //先清除  再重复画线
  for (var i = 0; i &lt;= count; i++) {
    xiayu(Math.random() * W, Math.random() * H, angle, len); //Math.random() 0~1随机数
  }
}
function xiayu(x, y) {
  ctxFill2.beginPath();
  ctxFill2.moveTo(x, y);
  ctxFill2.lineTo(x + angle, y + len);
  ctxFill2.lineWidth = 0.5;
  ctxFill2.stroke();
}
      </pre
        >
      </Card>
    </div>
    <div class="md:flex p-4">
      <Card
        size="small"
        :loading="loading"
        title="canvas渐变  createLinearGradient"
        class="md:w-1/2 w-full !md:mt-0"
        :canExpan="false"
      >
        <img src="./../../../assets/images/jianbian.png" alt="" />
        <pre>
fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。
fillStyle赋值场景(strokeStyle)
  color （颜色作为背景色）
  gradient (渐变)
  img
  canvas （其他动画作为背景色）
  video
        </pre>
      </Card>
      <Card
        size="small"
        :loading="loading"
        title="createLinearGradient"
        class="md:w-1/2 w-full"
        :canExpan="false"
      >
        <canvas id="canvasJB1" width="300" height="300" style="margin: 0 auto"></canvas>
        <pre>
var linearGradient = ctxJB1.createLinearGradient(0, 0, 300, 300);
linearGradient.addColorStop(0, 'white');
linearGradient.addColorStop(0.25, 'yellow');
linearGradient.addColorStop(0.5, 'green');
linearGradient.addColorStop(0.75, 'blue');
linearGradient.addColorStop(1, 'black');

ctxJB1.fillStyle = linearGradient;

ctxJB1.fillRect(0, 0, 300, 300);//填充
      </pre
        >
      </Card>
    </div>
    <div class="md:flex p-4">
      <Card
        size="small"
        :loading="loading"
        title="canvas渐变  createRadialGradient"
        class="md:w-1/2 w-full !md:mt-0"
        :canExpan="false"
      >
        <img src="./../../../assets/images/jianbian2.png" alt="" />
      </Card>
      <Card
        size="small"
        :loading="loading"
        title="createRadialGradient"
        class="md:w-1/2 w-full"
        :canExpan="false"
      >
        <canvas id="canvasJB2" width="300" height="300" style="margin: 0 auto"></canvas>
        <pre>
var ctxJB2 = document.getElementById('canvasJB2').getContext('2d');
var linearGradient2 = ctxJB2.createRadialGradient(150, 150, 50, 150, 150, 250);
linearGradient2.addColorStop(0, 'white');
linearGradient2.addColorStop(0.25, 'yellow');
linearGradient2.addColorStop(0.5, 'green');
linearGradient2.addColorStop(0.75, 'blue');
linearGradient2.addColorStop(1, 'black');

ctxJB2.fillStyle = linearGradient2;

ctxJB2.fillRect(0, 0, 300, 300);
      </pre
        >
      </Card>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { Card } from 'ant-design-vue';
  defineProps({
    loading: {
      type: Boolean,
    },
  });

  onMounted(() => {
    fill1();
    fill2();
    jianbian1();
    jianbian2();
    step1();
  });
  const fill1 = () => {
    const ctxFill1 = document.getElementById('canvasFill1').getContext('2d');
    ctxFill1.lineWidth = 30;
    for (var i = 0; i < 255; i++) {
      ctxFill1.beginPath();
      ctxFill1.moveTo(10 + i - 1, 10);
      ctxFill1.lineTo(10 + i, 10);
      ctxFill1.strokeStyle = 'rgb(' + i + ',' + i + ',' + i + ')';
      ctxFill1.stroke();
    }
  };
  const fill2 = () => {
    var W = 1000,
      H = 500,
      ctxFill2,
      angle = -5,
      len = 10,
      count = 850;
    ctxFill2 = document.getElementById('canvasFill2').getContext('2d');
    ctxFill2.strokeStyle = 'rgba(255,255,250,0.3)';

    setInterval(draw, 100);

    function draw() {
      ctxFill2.clearRect(0, 0, W, H); //先清除  再重复画线
      for (var i = 0; i <= count; i++) {
        xiayu(Math.random() * W, Math.random() * H, angle, len); //Math.random() 0~1随机数
      }
    }
    function xiayu(x, y) {
      ctxFill2.beginPath();
      ctxFill2.moveTo(x, y);
      ctxFill2.lineTo(x + angle, y + len);
      ctxFill2.lineWidth = 0.5;
      ctxFill2.stroke();
    }
  };
  const jianbian1 = () => {
    const ctxJB1 = document.getElementById('canvasJB1').getContext('2d');
    var linearGradient = ctxJB1.createLinearGradient(0, 0, 300, 300);
    linearGradient.addColorStop(0, 'white');
    linearGradient.addColorStop(0.25, 'yellow');
    linearGradient.addColorStop(0.5, 'green');
    linearGradient.addColorStop(0.75, 'blue');
    linearGradient.addColorStop(1, 'black');

    ctxJB1.fillStyle = linearGradient;

    ctxJB1.fillRect(0, 0, 300, 300);
  };
  const jianbian2 = () => {
    var ctxJB2 = document.getElementById('canvasJB2').getContext('2d');
    var linearGradient2 = ctxJB2.createRadialGradient(150, 150, 50, 150, 150, 250);
    linearGradient2.addColorStop(0, 'white');
    linearGradient2.addColorStop(0.25, 'yellow');
    linearGradient2.addColorStop(0.5, 'green');
    linearGradient2.addColorStop(0.75, 'blue');
    linearGradient2.addColorStop(1, 'black');

    ctxJB2.fillStyle = linearGradient2;

    ctxJB2.fillRect(0, 0, 300, 300);
  };
  //背景图
  const step1 = () => {
    // const canvas1 = document.getElementById('canvas1');
    // canvas1.width = 600;
    // canvas1.height = 400;
    // var ctx1 = document.getElementById('canvas1').getContext('2d');
    // // 采用渐变色背景
    // var skyStyle = ctx1.createLinearGradient(0, 0, 0, canvas1.height);
    // skyStyle.addColorStop(0, 'black');
    // skyStyle.addColorStop(1.0, '#035');
    // ctx1.fillStyle = skyStyle;
    // ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
  };
</script>
<style lang="less" scoped>
  .css-top {
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to right, pink, blue);
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
    line-height: 100px;
  }
  .con {
    display: inline-block;
    height: 500px;
    width: 800px;
    background-image: url(./../../../assets/images/aaa.jpg);
    background-repeat: no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position: relative;
  }
  #canvasFill2 {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
