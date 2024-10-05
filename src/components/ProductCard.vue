<template>
  <div class="col-md-6 col-12">
    <div class="product_card">
      <div class="card_intro">
        <div class="card_para">
          <h3>1.車體校正台</h3>
          <p>
            瑞典血統、荷蘭創新1970 年代，Uno Liner 由企業家 Uno Johansson
            創立，他設計了最初的 Car-O-Liner
            車體校正台和拉力臂系統。這位瑞典發明家後來創辦了自己
          </p>
        </div>
        <div class="card_img">
          <img src="@/assets/images/列表圖統一用這個.jpg" alt="" />
        </div>
        <a class="card_arrow" href="/productItem"
          ><i class="fas fa-long-arrow-alt-up"></i
        ></a>
      </div>
      <!-- <a href="javascript:;"></a> -->
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.product_card {
  background-color: #fff;
  border-radius: 50px;
  height: 550px;
  overflow: hidden;
  box-shadow: 3px 3px 10px #606060;
  margin-bottom: 2em;
  .card_intro {
    .card_para {
      padding: 1.5em 2.5em;
      h3 {
        font-size: 2em;
        color: #19342c;
      }
      p {
        font-size: 1.12em;
        color: #606060;
        margin-bottom: 0;
      }
    }
    .card_img {
      position: relative;
      bottom: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
    .card_arrow {
      width: 3.5em;
      height: 3.5em;
      background-color: #fff;
      position: absolute;
      bottom: 20%;
      right: 5%;
      border-radius: 50%;
      transform: rotate(45deg);
      i{
        color: #196164;
        font-size: 1.8em;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
}
@media (max-width: 520px) {
  .product_card {
    height: 420px;
    margin-bottom: 2em;
    .card_intro {
      .card_para {
        padding: 1.5em 2.5em;
        h3 {
          font-size: 2em;
        }
        p {
          font-size: 1em;
        }
      }
      .card_img {
        position: relative;
        bottom: 0;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
