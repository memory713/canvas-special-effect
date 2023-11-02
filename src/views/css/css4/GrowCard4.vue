<template>
  <div class="md:flex">
    <Card
      size="small"
      :loading="loading"
      title="图片翻转"
      class="md:w-1/2 w-full !md:mt-0"
      :canExpan="false"
    >
      <div class="py-4 px-4 flex">
        <div class="card">
          <img src="./../../../assets/images/1.jpg" class="card-font" />
          <img src="./../../../assets/images/2.jpg" class="card-back" />
        </div>
        <div class="card card2">
          <img src="./../../../assets/images/3.jpg" class="card-font" />
          <img src="./../../../assets/images/4.jpg" class="card-back" />
        </div>
      </div>
    </Card>
    <Card size="small" :loading="loading" title="rotateY" class="md:w-1/2 w-full" :canExpan="false">
      <div class="py-4 px-4">
        <pre>
.card-font {
    transform: rotateY(0deg);
  }

  .card-back {
    transform: rotateY(180deg);
  }

  .card:hover .card-font {
    transform: rotateY(180deg);
  }

  .card:hover .card-back {
    transform: rotateY(0deg);
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
  .card {
    position: relative;
    margin: 10px;
    display: inline-block;
    height: 400px;
    width: 250px;
  }

  .card-font,
  .card-back {
    position: absolute;
    top: 0;
    left: 0;
    height: 400px;
    width: 250px;
    backface-visibility: hidden;
    /*背面翻转*/
    transition: all 1s;
  }

  .card-font {
    transform: rotateY(0deg);
  }

  .card-back {
    transform: rotateY(180deg);
  }

  .card:hover .card-font {
    transform: rotateY(180deg);
  }

  .card:hover .card-back {
    transform: rotateY(0deg);
  }
</style>
