<template>
  <div class="md:flex">
    <Card
      size="small"
      :loading="loading"
      title="太极"
      class="md:w-1/2 w-full !md:mt-0"
      :canExpan="false"
    >
      <div class="py-4 px-4">
        <div class="taiji">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
    </Card>
    <Card
      size="small"
      :loading="loading"
      title="@keyframes transform-origin"
      class="md:w-1/2 w-full"
      :canExpan="false"
    >
      <div class="py-4 px-4">
        <strong
          >css
          keyframes是CSS3的一种规则，可以用来定义CSS动画的一个周期的行为，可以创建简单的动画；keyframe规则由关键字“@keyframe”组成，后面接着是给出动画名称的标识符。</strong
        >
        <br />
        <br />
        <strong>
          transform-origin用于设置动画的基点(中心点) ， 适用于所有块级元素及某些内联元素。
          必须配合transform使用 默认情况下，元素的动作参考点为元素盒子的中心</strong
        >
        <br />
        <br />
        <pre>
可以设置九个位置的值：水平方向：  left    center      right
                                0       50%        100%
                    垂直方向：   top     center     bottom
 
    </pre
        >
        <hr />
        <pre>
.taiji {
    height: 400px;
    width: 400px;
    background: linear-gradient(black 50%, white 50%);
    border: 1px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    transform-origin: 50% bottom  ;
    animation: zhuan 30s linear; /*infinite循环进行 alternate反复 linear匀速*/
    animation-delay: -1s; /*延迟*/
    .right {
      border: 75px solid #000;
      transform-origin: 100% 50%;
      background-color: #fff;
      height: 200px;
      width: 200px;
      border-radius: 50%;
    }
    .left {
      border: 75px solid #fff;
      transform-origin: 0% 50%;
      background-color: #000;
      height: 200px;
      width: 200px;
      border-radius: 50%;
    }
    /*自定义属性*/
    @keyframes zhuan {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(3600deg);
      }
    }
  }
        </pre>
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
  .taiji {
    height: 400px;
    width: 400px;
    background: linear-gradient(black 50%, white 50%);
    border: 1px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    transform-origin: 50% bottom;
    animation: zhuan 30s infinite; /*infinite循环进行 alternate反复 linear匀速*/
    animation-delay: -1s; /*延迟*/
    .right {
      border: 75px solid #000;
      transform-origin: 100% 50%;
      background-color: #fff;
      height: 200px;
      width: 200px;
      border-radius: 50%;
    }
    .left {
      border: 75px solid #fff;
      transform-origin: 0% 50%;
      background-color: #000;
      height: 200px;
      width: 200px;
      border-radius: 50%;
    }
    /*自定义属性*/
    @keyframes zhuan {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(3600deg);
      }
    }
  }
</style>
