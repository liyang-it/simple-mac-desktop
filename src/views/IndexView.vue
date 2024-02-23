<script setup>
import { ref, defineAsyncComponent } from 'vue'
const topToolbar = defineAsyncComponent(() => import('../components/TopToolbar.vue'))
const applicationItem = defineAsyncComponent(() => import('../components/ApplicationItem.vue'))
const clockScreen = defineAsyncComponent(() => import('../components/ClockScreen.vue'))

// 引入 应用图片引用传递给子组件，子组件直接传递路径无法渲染
import home from '@/assets/images/home_256x256x32.png'
import adb from '@/assets/images/adb_256x256x32.png'
import docker from '@/assets/images/docker_256x256x32.png'
import java from '@/assets/images/java_256x256x32.png'
import zikao from '@/assets/images/zikao_256x256x32.png'
import vueAdminElement from '@/assets/images/vue-admin-element-liyangit_256x256x32.png'
import vueAdminTemplate from '@/assets/images/vue-admin-template-liyangit_256x256x32.png'
import qinqiguanxi from '@/assets/images/qinqiguanxi_256x256x32.png'

// 应用列表
const items = ref([
  { id: 1, title: '主页', icon: home, url: 'http://liyangme.top' },
  { id: 2, title: '哈弗ADB', icon: adb, url: 'http://liyangme.top/adb' },
  { id: 3, title: 'Docker简单配置运行', icon: docker, url: 'http://liyangme.top/docker' },
  { id: 4, title: 'Java中文手册', icon: java, url: 'https://jdk.vercel.liyangme.top/' },
  { id: 5, title: '工商管理自考资料', icon: zikao, url: 'http://liyangme.top/zikao' },
  { id: 6, title: 'vue-admin-element-liyangit', icon: vueAdminElement, url: 'https://liyang-it.github.io/vue-admin-page/#/login?redirect=%2Fdashboard' },
  { id: 7, title: 'vue-admin-template-liyangit', icon: vueAdminTemplate, url: 'https://liyang-it.github.io/vue-admin-template-liyangit/#/login?redirect=%2Fdashboard' },
  { id: 8, title: '亲戚关系称呼', icon: qinqiguanxi, url: 'https://liyang-it.github.io/relationship/' }
])
</script>
<template>
  <div class="win">
    <topToolbar />
    <div class="desktop">
      <div class="items">
        <applicationItem id="item" v-for="item in items" :key="item.id" :title="item.title" :icon="item.icon"
          :url="item.url" />
      </div>
    </div>
    <clockScreen />
  </div>
</template>
<style scoped>
.win {
  width: 100%;
  position: relative;
}

.desktop {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 30px;
}

.items {
  padding: 0px 10px;
}
</style>


