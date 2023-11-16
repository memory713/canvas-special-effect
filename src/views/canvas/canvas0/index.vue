<template>
  <div>
    <div class="py-4 px-4">
      <Card size="small" :loading="loading" title="画笔" class="w-full" :canExpan="false">
        <div class="py-4 px-4 md:flex">
          <pre>
画笔属性
lineWidth:线宽，默认1px  若想细且清晰 +-0.5
lineCap:线末端类型  butt默认、round、square
lineJoin:相交线的拐点  miter默认、round、bevel
miterLimit:默认为10，只有在lineJoin为miter时有效果，表示尖角的长度（简单理解），在需要特别显示出尖角的时候适用
strokeStyle:线的颜色
fillStyle:填充颜色
setLineDash:设置虚线 setLineDash([5,10,15])虚实交替
getDashOffset:设置虚线偏移量（负值向右）getDashOffset=-20
      </pre
          >
        </div>
      </Card>
    </div>
    <div class="py-4 px-4">
      <Card size="small" :loading="loading" title="画笔" class="w-full" :canExpan="false">
        <div class="py-4 px-4">
          <canvas id="canvas0" :height="200" :width="1400"></canvas>
        </div>
        <div class="py-4 px-4 md:flex">
          <pre>
    // 画布填充颜色
    ctx.fillStyle = '#A9D4AC';
    // 绘制一个填充的长方形  x y 宽 高
    ctx.strokeStyle = '#FFAA25';
    ctx.fillRect(0, 0, 1200, 200);
    // 绘制一个矩形的边框  x y 宽 高
    ctx.strokeRect(0, 0, 1200, 200);
    ctx.lineJoin = 'round'; //拐角圆润
    ctx.lineCap = 'round'; //末尾圆润
    ctx.lineWidth = 6; //画笔宽度

    ctx.beginPath(); //划线开始
      </pre
          >
          <pre>
    //|
    ctx.moveTo(20, 30); //画线开始的坐标 横坐标  纵坐标
    ctx.lineTo(20, 170); //线条画到哪里的坐标
    //-
    ctx.moveTo(20, 100);
    ctx.lineTo(80, 100);
    //|
    ctx.moveTo(80, 30);
    ctx.lineTo(80, 170);
    //-
    ctx.moveTo(100, 30);
    ctx.lineTo(160, 30);
    //L
    ctx.moveTo(100, 30);
    ctx.lineTo(100, 170);
    ctx.lineTo(160, 170);
    //-
    ctx.moveTo(100, 100);
    ctx.lineTo(160, 100);
    //L
    ctx.moveTo(180, 30);
    ctx.lineTo(180, 170);
    ctx.lineTo(240, 170);
    //L
    ctx.moveTo(260, 30);
    ctx.lineTo(260, 170);
    ctx.lineTo(320, 170);
    //O
    ctx.moveTo(340, 60);
    ctx.lineTo(340, 140);
    ctx.arc(370, 140, 30, Math.PI, 0, true);
    ctx.moveTo(400, 140);
    ctx.lineTo(400, 60);
    ctx.arc(370, 60, 30, 0, Math.PI, true);
      </pre
          >
          <pre>
    //W
    ctx.moveTo(460, 30);
    ctx.lineTo(485, 170);
    ctx.lineTo(510, 30);
    ctx.lineTo(535, 170);
    ctx.lineTo(560, 30);
    //O
    ctx.moveTo(580, 60);
    ctx.lineTo(580, 140);
    ctx.arc(610, 140, 30, Math.PI, 0, true);
    ctx.moveTo(640, 140);
    ctx.lineTo(640, 60);
    ctx.arc(610, 60, 30, 0, Math.PI, true);
    //R
    ctx.moveTo(660, 30);
    ctx.lineTo(660, 170);
    ctx.moveTo(660, 30);
    ctx.arc(690, 70, 40, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.lineTo(660, 110);
    ctx.moveTo(660, 110);
    ctx.lineTo(740, 170);
    //L
    ctx.moveTo(760, 30);
    ctx.lineTo(760, 170);
    ctx.lineTo(820, 170);
    //D
    ctx.moveTo(840, 30);
    ctx.arc(860, 100, 70, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.lineTo(840, 170);
    ctx.lineTo(840, 30);
    ctx.strokeStyle = '#fff';
    ctx.stroke(); //执行 描边
      </pre
          >
        </div>
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
    var ctx = document.getElementById('canvas0')?.getContext('2d');
    initAll(ctx);
  });
  const initAll = (ctx) => {
    /*hsla(Hue,Saturation,Lightness,alpha) 色调、饱和度、亮度、透明度*/
    // 画布填充颜色
    ctx.fillStyle = '#A9D4AC';
    // 绘制一个填充的长方形  x y 宽 高
    ctx.strokeStyle = '#FFAA25';
    ctx.fillRect(0, 0, 1200, 200);
    // 绘制一个矩形的边框  x y 宽 高
    ctx.strokeRect(0, 0, 1200, 200);
    ctx.lineJoin = 'round'; //拐角圆润
    ctx.lineCap = 'round'; //末尾圆润
    ctx.lineWidth = 6; //画笔宽度

    ctx.beginPath(); //划线开始
    ctx.moveTo(20, 30); //画线开始的坐标 横坐标  纵坐标
    ctx.lineTo(20, 170); //线条画到哪里的坐标
    //-
    ctx.moveTo(20, 100);
    ctx.lineTo(80, 100);
    //|
    ctx.moveTo(80, 30);
    ctx.lineTo(80, 170);
    //-
    ctx.moveTo(100, 30);
    ctx.lineTo(160, 30);
    //L
    ctx.moveTo(100, 30);
    ctx.lineTo(100, 170);
    ctx.lineTo(160, 170);
    //-
    ctx.moveTo(100, 100);
    ctx.lineTo(160, 100);
    //L
    ctx.moveTo(180, 30);
    ctx.lineTo(180, 170);
    ctx.lineTo(240, 170);
    //L
    ctx.moveTo(260, 30);
    ctx.lineTo(260, 170);
    ctx.lineTo(320, 170);
    //O
    ctx.moveTo(340, 60);
    ctx.lineTo(340, 140);
    ctx.arc(370, 140, 30, Math.PI, 0, true);
    ctx.moveTo(400, 140);
    ctx.lineTo(400, 60);
    ctx.arc(370, 60, 30, 0, Math.PI, true);
    //W
    ctx.moveTo(460, 30);
    ctx.lineTo(485, 170);
    ctx.lineTo(510, 30);
    ctx.lineTo(535, 170);
    ctx.lineTo(560, 30);
    //O
    ctx.moveTo(580, 60);
    ctx.lineTo(580, 140);
    ctx.arc(610, 140, 30, Math.PI, 0, true);
    ctx.moveTo(640, 140);
    ctx.lineTo(640, 60);
    ctx.arc(610, 60, 30, 0, Math.PI, true);
    //R
    ctx.moveTo(660, 30);
    ctx.lineTo(660, 170);
    ctx.moveTo(660, 30);
    ctx.arc(690, 70, 40, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.lineTo(660, 110);
    ctx.moveTo(660, 110);
    ctx.lineTo(740, 170);
    //L
    ctx.moveTo(760, 30);
    ctx.lineTo(760, 170);
    ctx.lineTo(820, 170);
    //D
    ctx.moveTo(840, 30);
    ctx.arc(860, 100, 70, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.lineTo(840, 170);
    ctx.lineTo(840, 30);
    ctx.strokeStyle = '#fff';
    ctx.stroke(); //执行 描边
  };
</script>
<style lang="less" scoped>
  .music {
    .music-ul {
      li {
        list-style-type: none;
        color: #fff;
        font-size: 30px;
        text-shadow: 1px 1px 5px #f00;
        /*左右 上下 模糊  颜色*/
        transition: all 0.5s;
      }
      li:hover {
        /*字符间的空隙*/
        letter-spacing: 50px;
        /*投影叠加*/
        text-shadow: 0 0 0px #369cea, 0 0 5px #f1b7d2, 0 0 10px #231816, 0 0 15px #7c449a,
          0 0 20px #99a8b5, 0 0 25px #ff9900, 0 0 30px #accf00;
      }
    }
  }
</style>
