<template>
  <div class="home_banner">
    <h2>Products</h2>
  </div>
  <div class="reserve_phone row">
    <div class="col-md-6">
      <div class="reserve_tit">
        <i class="fas fa-phone"></i>
        <p>立即預約服務</p>
      </div>
    </div>
    <div class="col-md-6">
      <div class="reserve_number">
        <p>+886 2 8888 8888</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.home_banner {
  width: 100vw;
  height: 350px;
  background-image: url("@/assets/images/page_bn1.jpg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    position: absolute;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4em;
    letter-spacing: 5px;
    font-weight: 400;
  }
}
.reserve_phone {
  .col-md-6 {
    padding: 0;
  }
  .reserve_tit {
    background-color: $xtxColor;
    padding: 3em 2.5em;
    display: flex;
    justify-content: end;
    align-items: center;
    i {
      color: #c4f502;
      font-size: 2em;
    }
    p {
      padding-left: 30px;
      color: #fff;
      font-size: 2em;
      letter-spacing: 10px;
      margin: 0;
      font-weight: bolder;
    }
  }
  .reserve_number {
    background-color: #c4f502;
    padding: 3em 2.5em;
    display: flex;
    justify-content: start;
    align-items: center;
    p {
      padding-left: 30px;
      color: $xtxColor;
      font-size: 2em;
      letter-spacing: 8px;
      margin: 0;
      font-weight: bolder;
    }
  }
}

@media (max-width: 520px) {
  .home_banner {
    .banner_intro {
      width: 320px;
      height: 320px;
      right: auto;
      left: 50%;
      position: relative;
      padding: 3em 0em;
      text-align: center;
      transform: translateX(-50%);
      h2 {
        color: #fff;
        font-size: 2em;
        margin-bottom: 1em;
      }
      p {
        color: #fff;
        font-size: 1.2em;
        margin-bottom: 2em;
      }
      a {
        width: 100%;
        padding: 15px 30px;
        border: 1px solid#fff;
        color: #fff;
        border-radius: 30px;
        letter-spacing: 5px;
      }
    }
  }
  .reserve_phone {
    .reserve_number {
      background-color: #c4f502;
      padding: 3em 2.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        padding-left: 0px;
        font-size: 1.8em;
        letter-spacing: 2px;
        margin: 0;
        font-weight: bolder;
      }
    }
  }
}
</style>
