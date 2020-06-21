<template>
  <div>
      <div style="background-color: #8CB7D4; height: 350px; padding-top: 32px; padding-bottom: 68px;">
          <el-container style="width: 1100px; margin: 0 auto;">
              <el-aside style="width: 500px; margin-right: 20px;">
                  <h1 class="as-title">虚拟交通测量平台 - VSensor</h1>
                  <br>
                  <p class="as-cont">虚拟交通测量平台对交通场景进行全息重构，并提供各类测量工具支持模拟交通测量
                  </p>
                  <ul class="as-desc">
                      <li>全息交通场景重构：完备个体检测 + 时空轨迹重构</li>
                      <li>主动测量式模拟交通测量：流量、车速调查，牌照法、浮动车法...</li>
                  </ul>
                  <br>
                  <div style="text-align: left">
                      <el-button type="primary" style="background-color: #117AC9; width: 250px;" @click="login">登录并体验VSensor<i class="el-icon-top-right"></i></el-button>
                  </div>
              </el-aside>
              <el-main style="width: 580px; padding: 30px 0 10px 10px;">
                  <el-carousel :interval="4000" height="280px" indicator-position="outside">
                      <el-carousel-item v-for="item in imagesBox" :key="item.id" style="align-items: center">
                          <img :src="item.imgItem" class="image">
                      </el-carousel-item>
                  </el-carousel>
              </el-main>
          </el-container>
      </div>
      <div style="margin-top: 20px; margin-bottom: 20px;">
          <video :src="videoUrl" width="650px" controls></video>
          <p>虚拟交通测量平台操作演示</p>
      </div>
      <hr width="1100px" size="0.2" color="#DCDCDC" noshade="noshade"/>
      <p style="font-size: 10px; color: grey;">Powered by <a href="http://www.openits.cn" style="color: #117AC9" target="_blank">OpenITS</a></p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      imagesBox: [
        {id: 0, imgItem: 'https://gh-io-1257470807.cos.ap-guangzhou.myqcloud.com/vsensor/1.png'},
        {id: 1, imgItem: 'https://gh-io-1257470807.cos.ap-guangzhou.myqcloud.com/vsensor/2.png'},
        {id: 1, imgItem: 'https://gh-io-1257470807.cos.ap-guangzhou.myqcloud.com/vsensor/3.png'},
        {id: 1, imgItem: 'https://gh-io-1257470807.cos.ap-guangzhou.myqcloud.com/vsensor/4.png'}
      ],
      videoUrl: 'https://gh-io-1257470807.cos.ap-guangzhou.myqcloud.com/vsensor/intro.mp4'
    }
  },
  methods: {
    login () {
      window.open('http://vsensor.openits.cn', '_blank')
    }
  }
}
</script>

<style scoped>
.as-title {
    color: #084062;
    text-align: left;
    font-weight: bold;
    font-size: 32px;
}
.as-cont {
    color: black;
    text-align: left;
}
.as-desc {
    color: black;
    text-align: left;
    padding-left: 20px;
}
.image {
    width: 100%;
}
a {
    text-decoration: none;
}
</style>
