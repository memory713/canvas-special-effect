<template>
  <div class="md:flex p-4">
    <Card size="small" :loading="loading" title="css  animation" class="w-full" :canExpan="false">
      <div class="py-4 px-4">
        <img src="./../../../assets/images/animation.png" alt="" />
      </div>
      <div class="py-4 px-4">
        <pre>
animation-name ：xx   （设置关键帧的名称为xx）
animation-duration：5s  （动画持续时间为5s）
animation-timing-function： linear （动画时间曲线 也叫做运行速度为匀速）
                            取值：linear 匀速、 ​ 
                                  ease （默认）低速开始—>加速—>结束前减速   、
                                  ease-in 以低速开始、
                                  ease-out 以低速结束、
                                  ease-in-out 以低速开始和结束。
                                  cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
animation-delay:5s  (动画等待5后开始)
animatiom-iteration-count：1   （动画播放次数为1次）
                            取值：xx数字，定义应该播放xx次动画、 infinite-无限次执行
animation-direction： alternate（设置动画为反向播放 ）
                      取值：
                      nomal（默认）-执行完一次之后回到起点继续执行下一次
                      alternate-往返动画，执行完一次之后往回执行下一次
                      reverse-反向执行
animation-fill-mode： （动画结束的最后一帧）
                      取值：
                      none-不做任何改变
                      forwards-让元素结束状态保持动画最后一帧的样式
                      backwards-让元素等待状态的时候显示动画第一帧的样式
                      both-等待状态显示第一帧，结束状态保持最后一帧
animation-play-state：  （设置动画是否暂停）
                      取值：running-执行动画 、paused-暂停动画

简写:  animation：动画名称 动画时长 动画运动速度 延迟时间 执行次数 往返动画
    </pre
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
