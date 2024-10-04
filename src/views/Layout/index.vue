<template>
  <div>
    <!-- <LayoutFixed /> -->
    <layoutHerder />
    <article class="wrapper">
      <RouterView />
    </article>
    <TopButton/>
    <LayoutFooter />
  </div>
</template>

<script setup>
  import LayoutHerder from './components/LayoutHerder.vue';
  // import LayoutFixed from './components/LayoutFixed.vue';
  import TopButton from './components/TopButton.vue';
  import LayoutFooter from './components/LayoutFooter.vue';
</script>

<style lang="scss" scoped>
</style>