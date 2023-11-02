<template>
  <div class="md:flex">
    <Card
      size="small"
      :loading="loading"
      title="跳动的纸片"
      class="md:w-1/2 w-full !md:mt-0"
      :canExpan="false"
    >
      <div class="py-4 px-4">
        <div class="tiao">
          <div class="zhi"></div>
        </div>
      </div>
    </Card>
    <Card size="small" :loading="loading" title="@keyframes" class="md:w-1/2 w-full" :canExpan="false">
      <div class="py-4 px-4">
          <pre>
.zhi:after {
      content: '';
      height: 8px;
      width: 50px;
      background-color: #000;
      opacity: 0.2;
      position: absolute;
      border-radius: 50%;
      top: 100px;
      animation: shadow 0.5s infinite linear;
    }

    .zhi:before {
      content: '';
      height: 50px;
      width: 50px;
      background-color: #fff;
      opacity: 0.9;
      position: absolute;
      border-radius: 5px;
      top: 20px;
      animation: zhuanShow 0.5s infinite linear;
    }

    @keyframes shadow {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes zhuanShow {
      0% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(10px) rotate(22.5deg);
      }
      50% {
        transform: translateY(30px) rotate(45deg) scale(1.1, 0.9);
        border-bottom-right-radius: 50px;
      }
      75% {
        transform: translateY(10px) rotate(67.5deg);
      }
      100% {
        transform: translateY(0) rotate(90deg);
      }
    }
  }
    </pre
          >
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
  .tiao {
    background-color: #bbd149;
    height: 500px;
    width: 80%;
    margin: 0;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .zhi {
      position: relative;
    }

    .zhi:after {
      content: '';
      height: 8px;
      width: 50px;
      background-color: #000;
      opacity: 0.2;
      position: absolute;
      border-radius: 50%;
      top: 100px;
      animation: shadow 0.5s infinite linear;
    }

    .zhi:before {
      content: '';
      height: 50px;
      width: 50px;
      background-color: #fff;
      opacity: 0.9;
      position: absolute;
      border-radius: 5px;
      top: 20px;
      animation: zhuanShow 0.5s infinite linear;
    }

    @keyframes shadow {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes zhuanShow {
      0% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(10px) rotate(22.5deg);
      }
      50% {
        transform: translateY(30px) rotate(45deg) scale(1.1, 0.9);
        border-bottom-right-radius: 50px;
      }
      75% {
        transform: translateY(10px) rotate(67.5deg);
      }
      100% {
        transform: translateY(0) rotate(90deg);
      }
    }
  }
</style>
