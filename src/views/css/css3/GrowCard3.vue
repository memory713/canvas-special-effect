<template>
  <div class="md:flex">
    <Card
      size="small"
      :loading="loading"
      title="白云飘"
      class="md:w-1/2 w-full !md:mt-0"
      :canExpan="false"
    >
      <div class="py-4 px-4">
        <div class="intro">
          <div class="sky">
            <div class="cloud cloudB">
              <div class="cloud-1"></div>
              <div class="cloud-2"></div>
            </div>
            <div class="cloud cloudA">
              <div class="cloud-1"></div>
              <div class="cloud-2"></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
    <Card
      size="small"
      :loading="loading"
      title="cubic-bezier"
      class="md:w-1/2 w-full"
      :canExpan="false"
    >
      <div class="py-4 px-4">
        <div class="music">
          <strong
            >cubic-bezier()函数是三次方贝塞尔曲线函数。所有三次方贝塞尔曲线都是由起点、终点和两个控制点组成，在SVG或者Canvas中，三次方贝塞尔曲线的所有控制点都是不固定的。但是在CSS的cubic-bezier()函数中，起点和终点的坐标是固定的，分别是(0,0)和(1,1)，因此，cubic-bezier()函数支持的参数值只有4个，代表了两个控制点的坐标，语法如下：
            cubic-bezier(x1, y1, x2, y2)
          </strong>
          <br /><br />
          <strong>在线调试可使用官网 https://cubic-bezier.com/#0,.89,1,0</strong>
  <img src="./../../../assets/images/cubic.png" alt="" />
          
          <pre>
           
 .cloudA {
    top: 250px;
    left: 150px;
    animation: cloud 10s infinite ease;
  }
  .cloudB {
    top: 150px;
    left: 300px;
    animation: cloud2 10s infinite cubic-bezier(0, 0.89, 1, 0);
  }

  @keyframes cloud {
    0% {
      transform: translateX(-280px) scale(0.6);
    }
    100% {
      transform: translateX(450px) scale(0.6);
    }
  }
  @keyframes cloud2 {
    0% {
      transform: translateX(-480px) scale(1);
    }
    100% {
      transform: translateX(450px) scale(1);
    }
  }
    </pre
          >
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  defineProps({
    loading: {
      type: Boolean,
    },
  });
</script>
<style lang="less" scoped>
  .sky {
    width: 600px;
    height: 600px;
    background-color: #89dfff;
    position: relative;
    overflow: hidden;
    background: url('./../../../assets/images/caodi.jpg') no-repeat 100% 100%;
  }

  .cloud {
    position: absolute;
    top: 150px;
    left: 500px;
    height: 40px;
    width: 150px;
    background-color: #fff;
    border-radius: 20px;
  }

  .cloud-1 {
    position: absolute;
    left: 20px;
    top: -10px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: #fff;
  }

  .cloud-2 {
    position: absolute;
    left: 60px;
    top: -30px;
    border-radius: 50%;
    height: 60px;
    width: 70px;
    background-color: #fff;
  }

  .cloudA {
    top: 250px;
    left: 150px;
    animation: cloud 10s infinite ease;
  }
  .cloudB {
    top: 150px;
    left: 300px;
    animation: cloud2 10s infinite cubic-bezier(0, 0.89, 1, 0);
  }

  @keyframes cloud {
    0% {
      transform: translateX(-280px) scale(0.6);
    }
    100% {
      transform: translateX(450px) scale(0.6);
    }
  }
  @keyframes cloud2 {
    0% {
      transform: translateX(-480px) scale(1);
    }
    100% {
      transform: translateX(450px) scale(1);
    }
  }
</style>
