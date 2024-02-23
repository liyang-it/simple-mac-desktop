<template>
  <lay-popconfirm content="双击打开(默认当前窗口)" @confirm="openA()" @cancel="openB()" confirmText="当前窗口打开" cancelText="新标签页打开"
    position="right">
    <div class="item" @dblclick="openA()">
      <img class="icon" :src="props.icon">
      <p class="title">{{ props.title }}</p>
    </div>
  </lay-popconfirm>
</template>
<script setup>
import { layer } from "@layui/layui-vue"
import { defineProps } from 'vue'
// 组件传递参数
const props = defineProps(['icon', "title", "url"])
console.info(props)

// 当前窗口打开
function openA() {
  layer.open({
    type: "iframe",
    maxmin: true,
    resize: true,
    animDuration: "0.1s",
    title: props.title,
    area: ['90%', '90%'],
    content: props.url
  })
}

// 新标签页打开
function openB() {
  window.open(props.url)
}

</script>
<style scoped>
.item {
  width: 80px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  transition: all .5s;
}

.item:hover {
  background-color: rgba(255, 255, 255, 0.116);
}

.item .icon {
  width: 50px;
  height: 50px;
  overflow: hidden;
  color: #fff;
  box-sizing: border-box;
  margin: 5px auto;
  text-align: center;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  display: block;
  font-size: 37px;
  line-height: 50px;
}

.item .title {
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  margin-bottom: 5px;
  margin-top: -5px;
}
</style>