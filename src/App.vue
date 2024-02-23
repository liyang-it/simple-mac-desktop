<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

onMounted(() => {
  // 禁止右键菜单
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // 禁止F12键
  document.onkeydown = (e) => {
    if (e.which === 123 || e.key === "F12" || e.key === "Inspect") {
      e.preventDefault();
    }
  };
})
</script>

<template>
  <RouterView />
</template>


