<template>
  <div>
    <div class="py-4 px-4 md:flex">
      <Card size="small" :loading="loading" title="圆/圆弧" class="md:w-1/2" :canExpan="false">
        <pre>
绘制圆弧
arc( centerx,centery,radius,startingAngle,
endingAngle,anticlockwise=false)
strokeRect(x,y,w,h)有独立路经，不影响别的绘制
fillRect(x,y,w,h)有独立路经，不影响别的绘制
clearRect(x,y,w,h)擦除矩形区域
arcTo( x1,y1,x2,y2,radius)
step1:moveTo(x0,y0)

beginPath() 方法开始一条路径，或重置当前的路径
closePath() 方法不是结束路径，而是关闭路径，它会试图从当前路径的终点连一条路径到起点，让整个路径闭合起来
          注意：这并不意味着它之后的路径就是新路径了，如果需要绘制不同路径内容，还是需要结合 beginPath

save(): 用来保存canvas的状态。
restore(): 用来恢复Canvas旋转、缩放等之后的状态，当和canvas.save( )一起使用时，恢复到canvas.save( )保存时的状态。

translate(x,y)方法重新映射画布上的 (0,0) 位置。也就是画布的平移
      </pre
        >
      </Card>
      <Card
        size="small"
        :loading="loading"
        title="arc() arcTo()"
        class="md:w-1/2"
        :canExpan="false"
      >
        <img src="./../../../assets/images/arc.png" alt="" />
        <img src="./../../../assets/images/arcTo1.png" width="300" alt="" />
        <img src="./../../../assets/images/arcTo.png" alt="" />
      </Card>
    </div>
    <div class="py-4 px-4">
      <Card size="small" :loading="loading" title="圆" class="w-full" :canExpan="false">
        <div class="py-4 px-4 md:flex">
          <div class="md:w-4/7">
            <canvas id="canvas0" width="600" height="350" style="border: 1px solid #000"></canvas>
          </div>
          <div class="md:w-3/7">
            <pre>
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#005588';
    for (var i = 0; i &lt; 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 60, 20, 0, (2 * Math.PI * (i + 1)) / 10);
      ctx.closePath();
      ctx.stroke();
    }
    for (var i = 0; i &lt; 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 120, 20, 0, (2 * Math.PI * (i + 1)) / 10);
      ctx.stroke();
    }
    for (var i = 0; i &lt; 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 180, 20, 0, (2 * Math.PI * (i + 1)) / 10, true);
      ctx.closePath();
      ctx.stroke();
    }
    for (var i = 0; i &lt; 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 240, 20, 0, (2 * Math.PI * (i + 1)) / 10, true);
      ctx.stroke();
    }
    ctx.fillStyle = '#005588';
    for (var i = 0; i &lt; 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 300, 20, 0, (2 * Math.PI * (i + 1)) / 10, true);
      ctx.closePath();
      ctx.fill();
    }
      </pre
            >
          </div>
        </div>
      </Card>
    </div>
    <div class="py-4 px-4">
      <Card size="small" :loading="loading" title="圆角矩形" class="w-full" :canExpan="false">
        <div class="py-4 px-4 md:flex">
          <div class="md:w-4/7">
            <canvas
              id="canvas1"
              width="540"
              height="540"
              style="border: 1px solid #000; margin-left: 20px"
            ></canvas>
          </div>
          <div class="md:w-3/7">
            <pre>
  var ctx1 = document.getElementById('canvas1').getContext('2d');
  //绘制底色的大圆角矩形
  fillRoundRect(ctx1, 20, 20, 500, 500, 10, '#bbada0');
  //16个小格子
  for (var i = 0; i &lt; 4; i++) {
    for (var j = 0; j &lt; 4; j++) {
      fillRoundRect(ctx1, 40 + i * 120, 40 + j * 120, 100, 100, 6, '#ccc0b3');
    }
  }

  const fillRoundRect = (cxt, x, y, width, height, radius,  fillColor) => {
    if (2 * radius > width || 2 * radius > height) {
      return;
    }
    cxt.save();
    cxt.translate(x, y); //平移
    pathRoundRect(cxt, width, height, radius);
    cxt.fillStyle = fillColor || 'black';
    cxt.fill(); //填充颜色
    cxt.restore(); //结束
  };

  const pathRoundRect = (cxt, width, height, radius) => {
    cxt.beginPath();

    cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2); //右下小圆角
    cxt.lineTo(radius, height); //移到左下
    cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI); //左下小圆角
    cxt.lineTo(0, radius); //移到左上
    cxt.arc(radius, radius, radius, Math.PI, (Math.PI * 3) / 2); //左上小圆角
    cxt.lineTo(width - radius, 0); //右上
    cxt.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2); //右上小圆角

    cxt.closePath();
  };
      </pre
            >
          </div>
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
    var ctx = document.getElementById('canvas0').getContext('2d');
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#005588';
    for (var i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 60, 20, 0, (2 * Math.PI * (i + 1)) / 10);
      ctx.closePath();
      ctx.stroke();
    }
    for (var i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 120, 20, 0, (2 * Math.PI * (i + 1)) / 10);
      ctx.stroke();
    }
    for (var i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 180, 20, 0, (2 * Math.PI * (i + 1)) / 10, true);
      ctx.closePath();
      ctx.stroke();
    }
    for (var i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 240, 20, 0, (2 * Math.PI * (i + 1)) / 10, true);
      ctx.stroke();
    }
    ctx.fillStyle = '#005588';
    for (var i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.arc(25 + i * 60, 300, 20, 0, (2 * Math.PI * (i + 1)) / 10, true);
      ctx.closePath();
      ctx.fill();
    }

    var ctx1 = document.getElementById('canvas1').getContext('2d');
    fillRoundRect(ctx1, 20, 20, 500, 500, 10, '#bbada0');
    //16个小格子
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        fillRoundRect(ctx1, 40 + i * 120, 40 + j * 120, 100, 100, 6, '#ccc0b3');
      }
    }
  });

  const fillRoundRect = (cxt, x, y, width, height, radius, fillColor) => {
    if (2 * radius > width || 2 * radius > height) {
      return;
    }
    cxt.save();
    cxt.translate(x, y); //平移
    pathRoundRect(cxt, width, height, radius);
    cxt.fillStyle = fillColor || 'black';
    cxt.fill(); //填充颜色
    cxt.restore(); //结束
  };

  const pathRoundRect = (cxt, width, height, radius) => {
    cxt.beginPath();

    cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2); //右下小圆角
    cxt.lineTo(radius, height); //移到左下
    cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI); //左下小圆角
    cxt.lineTo(0, radius); //移到左上
    cxt.arc(radius, radius, radius, Math.PI, (Math.PI * 3) / 2); //左上小圆角
    cxt.lineTo(width - radius, 0); //右上
    cxt.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2); //右上小圆角

    cxt.closePath();
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
