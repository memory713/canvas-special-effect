<template>
  <div class="md:flex p-4">
    <Card
      size="small"
      :loading="loading"
      title="createLinearGradient"
      class="md:w-2/3 w-full !md:mt-0"
      :canExpan="false"
    >
      <img src="./../../../assets/images/jianbian.png" alt="" />
    </Card>
    <Card size="small" :loading="loading" title="渐变" class="md:w-1/3 w-full" :canExpan="false">
      <canvas id="canvasJB" height="200" width="400" ></canvas>
      <pre>
const ctxJB =  document.getElementById('canvasJB').getContext('2d');
ctxJB.lineWidth = 30;
for (var i = 0; i &lt; 255; i++) {
  ctxJB.beginPath();
  ctxJB.moveTo(100 + i - 1, 100);
  ctxJB.lineTo(100 + i, 100);<template>
<div>

 <div class="md:flex p-4">
    <Card
      size="small"
      :loading="loading"
      title="createLinearGradient"
      class="md:w-2/3 w-full !md:mt-0"
      :canExpan="false"
    >
      <img src="./../../../assets/images/jianbian.png" alt="" />
    </Card>
    <Card size="small" :loading="loading" title="渐变" class="md:w-1/3 w-full" :canExpan="false">
      <canvas id="canvasJB" height="200" width="400" ></canvas>
      <pre>
const ctxJB =  document.getElementById('canvasJB').getContext('2d');
ctxJB.lineWidth = 30;
for (var i = 0; i &lt; 255; i++) {
  ctxJB.beginPath();
  ctxJB.moveTo(100 + i - 1, 100);
  ctxJB.lineTo(100 + i, 100);
  ctxJB.strokeStyle = 'rgb(' + i + ',' + i + ',' + i + ')';
  ctxJB.stroke();
}
      </pre>
    </Card>
  </div>
  <div class="md:flex p-4">
    <Card
      size="small"
      :loading="loading"
      title="背景图"
      class="md:w-1/3 w-full !md:mt-0"
      :canExpan="false"
    >
      <pre>
    const canvas1 = document.getElementById('canvas1');
    canvas1.width = 600;
    canvas1.height = 400;
    var ctx1 = document.getElementById('canvas1').getContext('2d');
    // 采用渐变色背景
    var skyStyle = ctx1.createLinearGradient(0, 0, 0, canvas1.height);
    skyStyle.addColorStop(0, 'black');
    skyStyle.addColorStop(1.0, '#035');
    ctx1.fillStyle = skyStyle;
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
    </pre
      >
    </Card>
    <Card size="small" :loading="loading" title="效果" class="md:w-2/3 w-full" :canExpan="false">
      <canvas id="canvas1" style="border: 1px solid #000; margin: 0 auto"></canvas>
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
    jianbianDM(); //渐变demo
    step1();
  });
  const jianbianDM = () => {
   const ctxJB =  document.getElementById('canvasJB').getContext('2d');
    ctxJB.lineWidth = 30;
    for (var i = 0; i < 255; i++) {
      ctxJB.beginPath();
      ctxJB.moveTo(100 + i - 1, 100);
      ctxJB.lineTo(100 + i, 100);
      ctxJB.strokeStyle = 'rgb(' + i + ',' + i + ',' + i + ')';
      ctxJB.stroke();
    }
  };
  //背景图
  const step1 = () => {
    const canvas1 = document.getElementById('canvas1');
    canvas1.width = 600;
    canvas1.height = 400;
    var ctx1 = document.getElementById('canvas1').getContext('2d');
    // 采用渐变色背景
    var skyStyle = ctx1.createLinearGradient(0, 0, 0, canvas1.height);
    skyStyle.addColorStop(0, 'black');
    skyStyle.addColorStop(1.0, '#035');
    ctx1.fillStyle = skyStyle;
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
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

  ctxJB.strokeStyle = 'rgb(' + i + ',' + i + ',' + i + ')';
  ctxJB.stroke();
}
      </pre>
    </Card>
  </div>
  <div class="md:flex p-4">
    <Card
      size="small"
      :loading="loading"
      title="背景图"
      class="md:w-1/3 w-full !md:mt-0"
      :canExpan="false"
    >
      <pre>
    const canvas1 = document.getElementById('canvas1');
    canvas1.width = 600;
    canvas1.height = 400;
    var ctx1 = document.getElementById('canvas1').getContext('2d');
    // 采用渐变色背景
    var skyStyle = ctx1.createLinearGradient(0, 0, 0, canvas1.height);
    skyStyle.addColorStop(0, 'black');
    skyStyle.addColorStop(1.0, '#035');
    ctx1.fillStyle = skyStyle;
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
    </pre
      >
    </Card>
    <Card size="small" :loading="loading" title="效果" class="md:w-2/3 w-full" :canExpan="false">
      <canvas id="canvas1" style="border: 1px solid #000; margin: 0 auto"></canvas>
    </Card>
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
    jianbianDM(); //渐变demo
    step1();
  });
  const jianbianDM = () => {
   const ctxJB =  document.getElementById('canvasJB').getContext('2d');
    ctxJB.lineWidth = 30;
    for (var i = 0; i < 255; i++) {
      ctxJB.beginPath();
      ctxJB.moveTo(100 + i - 1, 100);
      ctxJB.lineTo(100 + i, 100);
      ctxJB.strokeStyle = 'rgb(' + i + ',' + i + ',' + i + ')';
      ctxJB.stroke();
    }
  };
  //背景图
  const step1 = () => {
    const canvas1 = document.getElementById('canvas1');
    canvas1.width = 600;
    canvas1.height = 400;
    var ctx1 = document.getElementById('canvas1').getContext('2d');
    // 采用渐变色背景
    var skyStyle = ctx1.createLinearGradient(0, 0, 0, canvas1.height);
    skyStyle.addColorStop(0, 'black');
    skyStyle.addColorStop(1.0, '#035');
    ctx1.fillStyle = skyStyle;
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
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
