<template>
    <div class="home_banner">
      <div class="banner_intro">
          <h2>傑炫企業社</h2>
          <p>專注於維修廠房動線設計與規劃<br>並銷售汽車車體修護工具及設備服務</p>
          <a href="javascript:;">瞭解更多 ⭢</a>
      </div>
    </div>
      <!-- <img class="home_bg" src="@/assets/images/home-bg.jpg" alt=""> -->
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home_banner{
  width: 100vw;
  height: calc(100vh - 192px);
  background-image:url('@/assets/images/banner_b1.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .banner_intro{
    width: 32em;
    height: 32em;
    background-color: rgba($color: #196164, $alpha: 0.6);
    padding: 6.5em 2em 6.5em 6.5em;
    border-radius: 100%;
    position: absolute;
    right: 8%;
    top:25%;
    h2{
      color: #fff;
      font-size: 3.5em;
      letter-spacing: 5px;
      font-weight: bolder;
      margin-bottom: 0.5em;
    }
    p{
      color: #fff;
      font-size: 1.5em;
      margin-bottom: 2em;
    }
    a{
      width: 100%;
      padding: 15px 30px;
      border: 1px solid#fff;
      color: #fff;
      border-radius: 30px;
      letter-spacing: 5px;
    }
  }
}
@media (max-width: 520px) {
  .home_banner{
  .banner_intro{
    width: 320px;
    height: 320px;
    right: auto;
    left: 50%;
    position: relative;
    padding: 3em 0em;
    text-align: center;
    transform: translateX(-50%);
    h2{
      color: #fff;
      font-size: 2em;
      margin-bottom: 1em;
    }
    p{
      color: #fff;
      font-size: 1.2em;
      margin-bottom: 2em;
    }
    a{
      width: 100%;
      padding: 15px 30px;
      border: 1px solid#fff;
      color: #fff;
      border-radius: 30px;
      letter-spacing: 5px;
    }
  }
}
}
</style>