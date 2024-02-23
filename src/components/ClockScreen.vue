<template>
  <div class="clock_main">
    <div class="clock">{{ clockText }}</div>
    <div class="date">{{ dateTimeText }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

// 双向绑定时钟值
const clockText = ref('00:00:00')
function updateClockText() {
  const date = new Date()
  let hours = date.getHours()
  hours = hours < 10 ? '0' + hours : hours
  let minutes = date.getMinutes()

  minutes = minutes < 10 ? '0' + minutes : minutes

  let seconds = date.getSeconds()
  seconds = seconds < 10 ? '0' + seconds : seconds
  clockText.value = `${hours}:${minutes}:${seconds}`
}

// 双向绑定日起值
const dateTimeText = ref('0000年00月00日 星期X')

function updateDateTime() {
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
  dateTimeText.value = `${year}年${month}月${day}日  ${chinaDayName}`
}

const ancientPoetry = ref({})
function sendRequest() {
  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Host", "v1.hitokoto.cn");
  myHeaders.append("Connection", "keep-alive");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://v1.hitokoto.cn/?c=d&c=e&c=h&c=i&c=k", requestOptions)
    .then(response => response.text())
    .then(result =>
      ancientPoetry.value = JSON.parse(result)
    ).catch(error => console.log('请求异常', error));
}
onMounted(() => {
  sendRequest()
  // 创建一个延迟期任务，每一秒执行
  setInterval(() => {
    updateClockText()
  }, 1000);
  updateDateTime()
})
</script>
<style scoped>
.clock_main {
  width: 60%;
  margin: 0 auto;
  color: #fff;
  cursor: pointer;
  text-align: center;
  margin-top: 180px;
}

.clock {
  font-size: 130px;
  font-family: mind-demi-bold;
  font-weight: 800;
}

.date {
  font-size: 32px;
  font-family: mind-regular;
  font-weight: 500;
  margin-top: -25px;

}
</style>