<template>
  <div> 
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>

      <!-- TapBar -->
      <div class="tapBar">
          <div class="tapBar-Item">
              <router-link class='tapBar-a' to="/message">
                 <span>
                    <img src="http://st.360buyimg.com/m/images/index/n-cart.png">
                    <i></i>
                 </span>
              </router-link>
          </div>
          <div class="tapBar-Item">
               <router-link class='tapBar-a' to="/home">
                 <span>
                    <img src="./statics/imgs/tapBar-yabo.png" class="tap-Img">
                    <!-- <i></i> -->
                 </span>
               </router-link>
          </div>
          <div class="tapBar-Item">
               <router-link class='tapBar-a' to="/myInfo">
                  <span>
                    <img src="http://st.360buyimg.com/m/images/index/n-cart.png">
                    <i></i>
                  </span>
               </router-link>
          </div>
      </div>
  </div>
</template>


<style scoped>
.tapBar {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  background-color: black;
}

.tapBar-Item {
  width: calc(100%/3);
  height: 100%;
  float: left;
}

.tapBar-a {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tapBar-a>span {
  position: relative;
  width: 0.4rem;
  height: 0.4rem;
}

img {
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
}

.tap-Img {
  width: 0.6rem;
  height: 0.6rem;
  top:-0.18rem;
}

i {
   position: absolute;
   width: 0.1rem;
   height: 0.1rem;
   background-color: red;
   right: -0.05rem;
   top:-0.05rem;
   border-radius: 50%;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  created() {
    //只会执行一次
  },
  updated() {},
  methods: {},
  watch: {}
};
</script>


