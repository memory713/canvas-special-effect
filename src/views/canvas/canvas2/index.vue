<template>
  <div class="md:flex p-4">
    <Card
      size="small"
      :loading="loading"
      title="字符动画"
      class="md:w-1/2 w-full !md:mt-0"
      :canExpan="false"
    >
      <div class="py-4 px-4">
        <div class="music">
          <ul class="music-ul">
            <li>hello<div class="line"></div> </li>
            <li>world<div class="line"></div> </li>
            <li>emmmmmm<div class="line"></div> </li>
            <li>beautiful<div class="line"></div> </li>
          </ul>
        </div>
      </div>
    </Card>
    <Card size="small" :loading="loading" title="text-shadow" class="md:w-1/2 w-full" :canExpan="false">
      <div class="py-4 px-4">
        <div class="music">
          <img src="./../../../../assets/images/box-shadow.png" alt="" />
          <pre>
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
        text-shadow: 0 0 0px #369CEA, 
                     0 0 5px #F1B7D2, 
                     0 0 10px #231816, 
                     0 0 15px #7C449A, 
                     0 0 20px #99A8B5,
                     0 0 25px #ff9900, 
                     0 0 30px #ACCF00;
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
