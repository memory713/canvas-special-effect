<template>
  <div>
    <div class="py-4 px-4">
      <Card size="small" :loading="loading" title="矩形" class="w-full" :canExpan="false">
        <div class="py-4 px-4 md:flex">
          <pre>
绘制矩形
rect(x,y,w,h)无独立路经
strokeRect(x,y,w,h)有独立路经，不影响别的绘制
fillRect(x,y,w,h)有独立路经，不影响别的绘制
clearRect(x,y,w,h)擦除矩形区域
      </pre
          >
        </div>
      </Card>
    </div>
    <div class="py-4 px-4">
      <Card size="small" :loading="loading" title="七巧板" class="w-full" :canExpan="false">
        <div class="py-4 px-4">
          <canvas id="canvas0" width="800" height="800" style="margin: 0 auto"></canvas>
        </div>
        <div class="py-4 px-4 md:flex">
          <pre>
   // 七巧板参数
var tangram = [
	{p:[{x:0,y:0},{x:800,y:0},{x:400,y:400}],color:'#caff67'},
	{p:[{x:0,y:0},{x:400,y:400},{x:0,y:800}],color:'#67becf'},
	{p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],color:'#ef3d61'},
	{p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],color:'#f9f51a'},
	{p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],color:'#a594c0'},
	{p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],color:'#fa8ecc'},
	{p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],color:'#f6ca29'},
]
      </pre
          >
          <pre>
   onMounted(() => {
    var ctx = document.getElementById('canvas0').getContext('2d');
    for (var i = 0; i &lt; tangram.length; i++) {
      draw2(tangram[i], ctx);
    }
  });
  // 划线七巧板
  const draw2 = (piece, cxt) => {
    cxt.beginPath();
    cxt.moveTo(piece.p[0].x, piece.p[0].y);
    for (var i = 0; i &lt; piece.p.length; i++) {
      cxt.lineTo(piece.p[i].x, piece.p[i].y);
    }
    cxt.closePath();
    cxt.fillStyle = piece.color;
    cxt.fill();
    cxt.strokeStyle = 'black';
    cxt.lineWidth = 3;
    cxt.stroke(); //执行
  };
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
  // 七巧板参数
  const tangram = [
    {
      p: [
        { x: 0, y: 0 },
        { x: 800, y: 0 },
        { x: 400, y: 400 },
      ],
      color: '#caff67',
    },
    {
      p: [
        { x: 0, y: 0 },
        { x: 400, y: 400 },
        { x: 0, y: 800 },
      ],
      color: '#67becf',
    },
    {
      p: [
        { x: 800, y: 0 },
        { x: 800, y: 400 },
        { x: 600, y: 600 },
        { x: 600, y: 200 },
      ],
      color: '#ef3d61',
    },
    {
      p: [
        { x: 600, y: 200 },
        { x: 600, y: 600 },
        { x: 400, y: 400 },
      ],
      color: '#f9f51a',
    },
    {
      p: [
        { x: 400, y: 400 },
        { x: 600, y: 600 },
        { x: 400, y: 800 },
        { x: 200, y: 600 },
      ],
      color: '#a594c0',
    },
    {
      p: [
        { x: 200, y: 600 },
        { x: 400, y: 800 },
        { x: 0, y: 800 },
      ],
      color: '#fa8ecc',
    },
    {
      p: [
        { x: 800, y: 400 },
        { x: 800, y: 800 },
        { x: 400, y: 800 },
      ],
      color: '#f6ca29',
    },
  ];
  onMounted(() => {
    var ctx = document.getElementById('canvas0').getContext('2d');
    for (var i = 0; i < tangram.length; i++) {
      draw2(tangram[i], ctx);
    }
  });

  // 划线七巧板
  const draw2 = (piece, cxt) => {
    cxt.beginPath();
    cxt.moveTo(piece.p[0].x, piece.p[0].y);
    for (var i = 0; i < piece.p.length; i++) {
      cxt.lineTo(piece.p[i].x, piece.p[i].y);
    }
    cxt.closePath();
    cxt.fillStyle = piece.color;
    cxt.fill();
    cxt.strokeStyle = 'black';
    cxt.lineWidth = 3;
    cxt.stroke(); //执行
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
