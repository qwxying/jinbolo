<template>
  <div class="footer">
    <footer>
      <!--      <h1>底部栏</h1>-->

      <p>
        联系地址：云南省曲靖市麒麟区麒麟东路延长线（东江花园）103A幢第1-2层商铺14号
      </p>
      <p>联系电话：0874-12345678 手机号码：13769539832 晏总</p>
      <p>Copyright 2020 金菠萝科技</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  footer {
    color: #666666;
    height: 160px;
    background-color: #171717;
    padding:32px 16px;
    >p{
      margin-top: 8px;
    }
  }
</style>