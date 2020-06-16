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
      <div class="img">
        <img src="../assets/img/introduction/img01.jpg" alt="">
      </div>
      <div class="article">
        <h1>曲靖金菠萝简介</h1>
        <p><b>金菠萝科技信息有限公司</b>创建于2019年3月，是一家集互联网软件研发、科技创新与新媒体为一体的综合型企业，致力于为中小型企业搭建社会化自营销服务平台，提供基于场景的自营销闭环服务，方便中小企业的营销场景展示、数据收集及二次营销等服务。
        </p>
        <p>
          公司拥有专业的技术团队及自主研发的智慧零售系统、理念先进的新媒体运营团队及专业的运作体系。公司秉持让天下实体零售不在难“售”的使命，坚持以用户为中心，以服务为核心，盘活实体，赋能实体门店，为企业打造私域流量。
        </p>
      </div>


    </section>
    <!--企业文化-->
    <section class="culture">

      <div class="img">
        <img src="../assets/img/introduction/img03.jpg" alt="">
      </div>
      <div class="article">
        <h1>企业文化</h1>
        <p><b>企业使命：</b>让天下实体零售不再难“售”！</p>
        <p><b>企业愿景：</b>用心孵化创业者梦想，打造与创业者共赢的孵化平台。</p>
        <p><b>企业价值观：</b>
          没有完美的个人，只有完美的团队。
          将简单的方法练到极致就是绝招。
          认真生活，快乐工作；充分信任，相互尊重。
          不忘初心，方得始终。</p>
      </div>


    </section>
    <!--公司结构-->
    <section class="structure">
      <div class="img"><img src="../assets/img/introduction/img02.jpg" alt=""></div>
      <div class="article">
        <h1>公司架构</h1>
        <p>
          公司目前拥有运营部、教育部、技术部、行政部、财务部，各部门有全能的机制建设和完善运作体系。
        </p>
      </div>

    </section>
    <!--底部栏-->
    <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src

  import NavBar from "../components/NavBar"
  import Footer from "../components/Footer"

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
    components: {Footer, NavBar}
  }

</script>

<style scoped lang="scss">
  .banner {
    height: 350px;
    width: 1120px;
  }

  section {
    margin: 96px 96px;

    &.introduction {
      border: 1px solid red;
      display: flex;

      > .img {
        border: 1px solid black;
        display: flex;

        align-items: center;

        > img {
          width: 400px;
        }
      }
    }

    &.culture {
      border: 1px solid red;
      display: flex;

      > .img {
        border: 1px solid black;
        display: flex;

        align-items: center;

        > img {
          width: 400px;
        }
      }
    }

    &.structure {
      border: 1px solid red;
      display: flex;

      > .img {
        border: 1px solid black;
        display: flex;

        align-items: center;

        > img {
          width: 400px;
        }
      }
    }

  }

  p {
    text-align: start;
    padding: 8px;
  }
</style>
