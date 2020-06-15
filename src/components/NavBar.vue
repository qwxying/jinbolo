<template>
  <div>
    <div class="nav">
      <div class="logo">
        <img src="" alt="logo">
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
    border: 1px solid black;
  }

  .logo {
    height: 48px;
    width: 144px;
    border: 1px solid red;
    margin-left: 96px;
  }

  ul {
    /*border: 1px solid red;*/
    display: flex;
    margin-right: 96px;
    padding: 8px 12px;
    > li {
      /*border: 1px solid blue;*/
      padding: 10px 15px;
      font-size: 14px;
    }

    > li:hover {
      color: #3884c0;
      border-bottom: 3px solid #05aec7;
    }
  }
</style>