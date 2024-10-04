<template>
  <div class="toTop">
    <!-- 其他页面内容 -->
    <button @click="scrollToTop" :class="{show:y >= 30}">
      <i class="fas fa-angle-up"></i>
    </button>
  </div>
</template>

<script setup>
// import { onMounted } from "vue";
import { useScroll } from '@vueuse/core';

const {y} =useScroll(window)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
}

  scrollToTop();



</script>

<style scoped lang="scss">
@import '@/style/var.scss';
.toTop {
  position: fixed;
  bottom: 2%;
  right: 2%;
  z-index: 999;
  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: $sucColor;
    border: none;
    opacity: 0;
    &.show{
      transition: all 0.3s linear;
    transform: none;
    opacity: 1;
    }
    i {
      font-size: 2rem;
      color: #0763a1;
    }
  }
}
</style>
