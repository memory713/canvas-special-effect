<template>
  <div class="md:flex">
    <Card
      size="small"
      :loading="loading"
      title="动画"
      class="md:w-4/4 w-full !md:mt-0"
      :canExpan="false"
    >
      <div class="py-4 px-4">
        <div id="my3dspace">
          <div id="pagegroup">
            <div class="page" id="page1">1</div>
            <div class="page" id="page2">2</div>
            <div class="page" id="page3">3</div>
            <div class="page" id="page4">4</div>
            <div class="page" id="page5">5</div>
            <div class="page" id="page6">6</div>
          </div>
        </div>
        <div class="op">
          <span @click="next()" class="button">next</span>
          <span @click="prev()" class="button">prev</span>
        </div>
      </div>
       <div class="py-4 px-4">
        <div class="music">
          <img src="./../../../assets/images/transform-style.png" alt="" />
          <img src="./../../../assets/images/transform1.png" alt="" />
          <img src="./../../../assets/images/transform2.png" alt="" />
          <pre>
  #page1 {
    transition: transform 1s ease;
    transform-origin: bottom;
  }

  #page2,
  #page3,
  #page4,
  #page5,
  #page6 {
    transition: transform 1s ease;
    transform-origin: bottom;
    transform: rotateX(90deg);
  }

   const next = () => {
    if (indexPage == 6) return;
    let curPage = document.getElementById('page' + indexPage);
    curPage.style.webkitTransform = 'rotateX(-90deg)';

    indexPage++;
    let nextPage = document.getElementById('page' + indexPage);
    nextPage.style.webkitTransform = 'rotateX(0deg)';
  };
  const prev = () => {
    if (indexPage == 1) return;

    let curPage = document.getElementById('page' + indexPage);
    curPage.style.webkitTransform = 'rotateX(90deg)';

    indexPage--;
    let nextPage = document.getElementById('page' + indexPage);
    nextPage.style.webkitTransform = 'rotateX(0deg)';
  };
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
  let indexPage = 1;
  const next = () => {
    if (indexPage == 6) return;
    let curPage = document.getElementById('page' + indexPage);
    curPage.style.webkitTransform = 'rotateX(-90deg)';

    indexPage++;
    let nextPage = document.getElementById('page' + indexPage);
    nextPage.style.webkitTransform = 'rotateX(0deg)';
  };
  const prev = () => {
    if (indexPage == 1) return;

    let curPage = document.getElementById('page' + indexPage);
    curPage.style.webkitTransform = 'rotateX(90deg)';

    indexPage--;
    let nextPage = document.getElementById('page' + indexPage);
    nextPage.style.webkitTransform = 'rotateX(0deg)';
  };
</script>
<style lang="less" scoped>
  #my3dspace {
    -webkit-perspective: 800;
    -webkit-perspective-origin: 50% 50%;
    overflow: hidden;
  }

  #pagegroup {
    position: relative;
    width: 400px;
    height: 480px;
    margin: 0px auto;
    -webkit-transform-style: preserve-3d;
  }
  .page {
    position: absolute;
    width: 360px;
    height: 360px;
    padding: 20px;
    background-color: black;
    color: #fff;
    font-weight: bold;
    font-size: 360px;
    line-height: 360px;
    text-align: center;
  }

  #page1 {
    transition: transform 1s ease;
    transform-origin: bottom;
  }

  #page2,
  #page3,
  #page4,
  #page5,
  #page6 {
    transition: transform 1s ease;
    transform-origin: bottom;
    transform: rotateX(90deg);
  }

  .op {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .button {
    display: inline-block;
    height: 40px;
    width: 100px;
    line-height: 40px;
    background-color: #69c;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    margin-right: 40px;
    cursor: pointer;
  }
</style>
