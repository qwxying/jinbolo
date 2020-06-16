<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="logo">
      <span class="name">金菠萝科技</span>
    </div>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/products">产品案例</router-link>
      </li>
      <li>
        <router-link to="/news">企业资讯</router-link>
      </li>
      <li>
        <router-link to="/contact_us">联系我们</router-link>
      </li>
      <li>
        <router-link to="/join_us">加入我们</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: 72px;
    /*width: 96px;*/
    margin-left: 96px;
    display: flex;
    align-items: center;

    > img {
      width: 144px;
    }

    > .name {
      padding: 8px;
      margin-left: 8px;
      font-size: 24px;
    }
  }

  ul {
    display: flex;
    margin-right: 96px;
    padding: 8px 12px;

    > li {
      padding: 10px 15px;
      font-size: 14px;
      border-radius: 12px;
    }

    > li:hover {
      color: #fff;
      background-color: #05aec7;
    }
  }
</style>