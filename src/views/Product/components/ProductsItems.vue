<template>
  <div id="products" class="section">
    <div class="container">
      <div class="page_tit">
        <h2>產品介紹</h2>
        <p>根據客戶需求量身定制最佳工作流程，確保每個維修環節順暢無阻，助力業務發展。</p>   
      </div>
      <div class="row">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
#products{
  background-image: linear-gradient(to bottom, #eaf3ed 10%, #fff 90%);
  .page_tit{
    text-align: center;
    margin-bottom: 4em;
    h2{
      color: #19342c;
      font-size: 2.5em;
      margin-bottom: 20px;
    }
    p {
      color: #606060;
      font-size: 1em;
      letter-spacing: 4px;
    }
  }
  
}

</style>
