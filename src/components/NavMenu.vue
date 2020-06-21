<template>
    <div class="container" style="background-color: #084062; height: 64px;">
        <el-menu
                :default-active="'/about'"
                router
                mode="horizontal"
                background-color="#084062"
                text-color="#117AC9"
                active-text-color="#fff"
                style="min-width: 960px; width: 1100px; padding-left: 15px; padding-right: 15px; margin: 0 auto; border-bottom: none;">
            <span>虚拟交通测量平台</span>
            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" style="font-weight: bold;">
                {{ item.navItem }}
            </el-menu-item>
            <i class="el-icon-top-right" style="float: right; font-size: 20px; color: #ffffff; padding-top: 20px;"></i>
            <a href="http://vsensor.openits.cn" style="color: #ffffff; float: right; padding-top: 20px;">登录</a>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/about', navItem: '关于'},
        {name: '/doc', navItem: '文档'}
      ]
    }
  }
}
</script>

<style scoped>
a{
    text-decoration: none;
}

span {
    /*position: absolute;*/
    float: left;
    padding-top: 15px;
    padding-right: 650px;
    font-size: 26px;
    font-weight: bold;
    pointer-events: none;
}

.container {
    background-color: #084062;
    color: white;
    height: 64px;
    padding-top: 10px;
    padding-bottom: 10px;
}

</style>
