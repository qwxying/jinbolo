<template>
  <div class="home">
    <!--导航栏-->
    <NavBar/>
    <!--轮播图-->
    <el-carousel height="350px">
      <el-carousel-item v-for="item in img_list" :key="item.url">
        <img class="banner" :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
    <!--企业简介-->
    <section class="introduction">
      <h1>曲靖金菠萝简介</h1>
      <p><b>金菠萝科技信息有限公司</b>成立于2019年3月，是家以信息咨询服务为中心，科技与金融相融合的企业。立足于现代化发展需求，公司拥有自主研发的小程序、强大的技术团队、先进创新理念的运营团队及专业运作体系的现代化企业。公司目前有两大模块的业务，一是利用小程序为商家进行引流推广和营销策划，二是个人及企业的信用资产管理。
      </p>
      <p>
        公司打破传统的企业用人模式，德才兼备的现代化用人标准。在这里你能收获的不仅是高薪，还有技能、知识和家人!青春不度，这里有梦想，收拾行李，寻找新的自己，加入我们吧!
      </p>
    </section>
    <!--企业文化-->
    <section class="culture">
      <h1>企业文化</h1>

    </section>
    <!--发展历程-->
    <section class="development">
      <h1>发展历程</h1>
    </section>

  </div>
</template>

<script>
  // @ is an alias to /src

  import NavBar from "../components/NavBar"

  export default {
    name: "Home",
    data() {
      return {
        img_list: [
          {url: require("../assets/img/banner01.jpg")},
          {url: require("../assets/img/banner02.jpg")},
          {url: require("../assets/img/banner01.jpg")},
          {url: require("../assets/img/banner02.jpg")}
        ]
      }
    },
    components: {NavBar}
  }

</script>

<style scoped lang="scss">
  .banner {
    height: 350px;
    width: 1120px;
  }

  section {
    margin: 96px 96px;
  }

  p {
    text-align: start;
    padding: 8px;
  }
</style>
