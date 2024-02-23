<template>
  <div class="top_toolbar backgroud_blur">
    <div class="btn_group mac_btn_group_left">
      <img src="../../public/favicon.ico" />
    </div>
    <div class="btn_group mac_btn_group_right">
      <div class="mac_btn_time">{{ timeText }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const timeText = ref('')
// 创建一个新的Date对象，获取当前日期和时间
const date = new Date();

// 创建一个包含周几名称的数组
const days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

// 根据获取到的星期几数字，从数组中取出对应的名称
const chinaDayName = days[date.getDay()];
const year = date.getFullYear()
let month = date.getMonth() + 1
month = month < 10 ? '0' + month : month

let day = date.getDate()
day = day < 10 ? '0' + day : day

let hours = date.getHours()
hours = hours < 10 ? '0' + hours : hours
let minutes = date.getMinutes()

minutes = minutes < 10 ? '0' + minutes : minutes

let seconds = date.getSeconds()
seconds = seconds < 10 ? '0' + seconds : seconds

onMounted(() => {
  timeText.value = `${chinaDayName} ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
})
</script>
<style scoped>
.backgroud_blur {
  width: 100%;
  position: fixed;
  top: 0;
  height: 24px;
  line-height: 24px;
  background-color: rgba(255, 255, 255, .5);
  -webkit-box-shadow: 0 0.3125rem 0.07rem -0.3125rem rgba(0, 0, 0, .42);
  -moz-box-shadow: 0 .3125rem .07rem -.3125rem rgba(0, 0, 0, .42);
  box-shadow: 0 0.3125rem 0.07rem -0.3125rem rgba(0, 0, 0, .42);
  z-index: 1000;
}

.top_toolbar {
  width: 100%;
  position: fixed;
  top: 0;
  height: 24px;
  line-height: 24px;
  background-color: rgba(255, 255, 255, .5);
  -webkit-box-shadow: 0 0.3125rem 0.07rem -0.3125rem rgba(0, 0, 0, .42);
  -moz-box-shadow: 0 .3125rem .07rem -.3125rem rgba(0, 0, 0, .42);
  box-shadow: 0 0.3125rem 0.07rem -0.3125rem rgba(0, 0, 0, .42);
  z-index: 1000;
}

.btn_group {
  height: 100%;
  cursor: pointer;
}

.mac_btn_group_left {
  float: left;
  overflow: hidden;
  max-width: 200px;
  padding-left: .5%;
  height: 95%;
}

.mac_btn_group_left img {
  width: 25px;
  height: 100%;
  
}

.mac_btn_group_right {
  float: right;
  max-width: 200px;
  overflow: auto;
}

.mac_btn_time {
  float: left;
  color: #333;
  font-weight: 700;
  text-align: center;
  height: 100%;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: background-color .3s;
  min-width: 4px;
  padding: 0 10px;
  font-size: 12px;
}
</style>