<template>
  <div id="page">
      <!-- 头部导航 -->
     <div style="height:30px"></div>
      <div class="nav_waitao">
    <div id="nav">
      <div style="flex:1"></div>
       <router-link :to="{name:'indexIndex'}">首页</router-link>
      <router-link :to="{name:'login'}">登录</router-link>
      <router-link :to="{name:'register'}">免费注册</router-link>
      <span class="fenGe">|</span>
      <router-link :to="{name:'Mydd'}">我的订单</router-link> 
      <div style="display: flex;">
         <i class="iconfont icon-xiexiangbao"></i>
          <router-link class="carts" :to="{name:'Obligation'}">购物袋</router-link> 
      </div>
       <span class="fenGe">|</span>
      <a href=" http://localhost:9528/">商家中心</a>
      </div>
    </div>
    <div class="border1px"></div>
    <!-- <index></index> -->
    <!-- 主体内容 -->
    <router-view></router-view>
    <!-- 尾部信息 -->
    <footers></footers>
  </div>
</template>
<script>
import footers from "./components/footer.vue";
import index from "./views/index.vue";
export default {
  data() {
    return {
      indexAdemin: "登录",
      tuiChu: ""
    };
  },
  name: "app",
  components: {
    footers
  },
  created() {
    // 取token值++++++++++++++++==
    let indexToken = localStorage.getItem("token");
    if (indexToken) {
      this.indexAdemin = indexToken;
      this.tuiChu = true;
    } else {
      this.tuiChu = false;
    }
  },
  methods: {
    tuiChuClick() {
      console.log("退出");
      localStorage.removeItem("token");
    }
  }
};
</script>


<style scoped>
/* 以下是页头NAV */
.nav_waitao {
  width: 100%;
  background: #000;
  position: fixed;
  z-index: 55;
  top: 0
}
#nav {
  height: 30px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  font-size: 12px;
  line-height: 30px;
}
#nav a {
  margin: 0 10px;
  color: #fff;
}
#nav a:hover {
  color: pink;
}
#nav .carts {
  margin-left: 0;
}
#nav .iconfont {
  margin-left: 20px;
  margin-right: 5px;
  color: #fff;
  font-size: 20px;
}
#navPreductCount {
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  color: #fff;
  margin: 5px;
}
.border1px {
  width: 100%;
  height: 1px;
  background: black;
}
#nav .fenGe {
  color: #666;
  margin: 0 5px;
}
</style>

