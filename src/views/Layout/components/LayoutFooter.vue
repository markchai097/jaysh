<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_items row">
        <div class="footer_logo col-md-3">
          <img src="@/assets/images/footer_logo.png" alt="" />
        </div>
        <div class="col-md-8 col-12">
          <div class="connect_item d-flex">
            <div class="phone">電話:(02)2776-3386</div>
            <div class="add">地址:台北市大安區忠孝東路四段221號12樓</div>
            <div class="mail">聯絡信箱:service@lifenews.com.tw</div>
          </div>
          <div class="copyright">
            ©Copyright JieXuan Enterprise Co, Ltd. 2024 傑炫企業社 版權所有
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.footer {
  padding: 32px 0;
  background-color: $xtxColor;
  .footer_logo {
    img {
      width: 100%;
    }
  }
  .footer_items {
    background-color: rgba($color: #19342c, $alpha: 0.3);
    padding: 2.5em;
    .connect_item {
      & > div {
        margin-right: 20px;
        color: #fff;
        &:not(:last-child) {
          &:after {
            content: "";
            position: absolute;
            right: -10px;
            top: 0;
            display: block;
            width: 2px;
            height: 100%;
            background: #fff;
          }
        }
      }
    }
    .copyright {
      color: #fff;
    }
  }
}
@media (max-width: 520px) {
  .footer_logo {
    margin-bottom: 20px;
  }
  .footer {
    padding: 0;
    background-color: $xtxColor;
    .footer_items {
      padding: 2.5em 0;
      .connect_item {
        flex-direction: column;
        & > div {
          font-size: 1.1em;
          &:not(:last-child) {
            &:after {
              display: none;
            }
          }
        }
      }
      .copyright {
        color: #fff;
        margin-top: 20px;
        font-size: 1.2em;
      }
    }
  }
}
</style>
