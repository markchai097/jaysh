<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container d-flex align-content-center">
      <h1 class="logo">
        <RouterLink to="/">傑炫企業社</RouterLink>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active"
              >首頁</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="about" active-class="active"
              >公司簡介</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="javascript:;"
              active-class="active"
              >最新消息</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/product"
              active-class="active"
              >產品項目</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="javascript:;"
              active-class="active"
              >法令參考</router-link
            >
          </li>
          <div class="language_item_sm">
            <a href="javascript:;">中文</a> ｜ <a href="javascript:;">E N</a>
          </div>
        </ul>
      </div>
      <div class="language_item">
        <a href="javascript:;">中文</a> ｜ <a href="javascript:;">E N</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/style/var.scss";

.language_item_sm {
  display: none;
}
.navbar {
  position: absolute;
  width: 100%;
  background-color: transparent;
  // border-bottom: 1px solid#ccc;
  display: flex;
  align-items: end;
  z-index: 88888;
  .logo {
    width: 250px;
    a {
      display: block;
      width: 100%;
      height: 80px;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .navbar-nav {
    width: 100%;
    display: flex;
    padding: 20px 40px;
    position: relative;
    z-index: 998;
    justify-content: center;

    li {
      padding: 0 35px;
      // width: 38px;
      width: auto;
      text-align: center;

      a {
        // width: 100%;
        font-size: 18px;
        font-weight: 600;
        display: inline-block;
        color: #fff;

        &:hover {
          // color: $xtxColor;
        }
      }

      .active {
        // color: $xtxColor;
      }
    }
  }
  .language_item {
    color: #fff;
    background-color: $xtxColor;
    padding: 5px 20px;
    border-radius: 20px;
    a {
      color: #fff;
      font-size: 18px;
    }
  }
}
@media (min-width: 1300px) {
  .navbar .container {
    max-width: 1600px !important;
  }
}
@media (max-width: 1024px) {
  .navbar[data-v-2e95f5e9] {
    height: auto;
  }
}
@media (max-width: 520px) {
  .navbar {
    height: auto;
    .navbar-toggler {
      border: none;
      padding: 0;
      &:focus {
        box-shadow: none;
      }
    }
    .navbar-toggler-icon {
      width: 2em;
      height: 2em;
      background-image: url("@/assets/images/top_menu.png");
    }
    .logo {
      width: 200px;
      a {
        display: block;
        width: 100%;
        height: 80px;
        text-indent: -9999px;
        background: url("@/assets/images/logo.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .navbar-nav {
      padding: 20px 0px;
      background: rgba($color: #19342c, $alpha: 0.8);
    }
  }
  .language_item_sm {
    margin-top: 1.5em;
    display: flex;
    color: #fff;
    justify-content: center;
    a {
      color: #fff;
    }
  }
  .language_item {
    display: none;
  }
}
</style>
