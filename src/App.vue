<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const yyyy = ref<string>();
const mm = ref<string>();
const dd = ref<string>();
const h = ref<string>();
const m = ref<string>();
const time = ref<number>(0);

const timer = ref<ReturnType<typeof setTimeout>>();

onMounted(() => {
  timer.value = setInterval(() => {
    const now = new Date();
    yyyy.value = now.getFullYear().toString();
    mm.value = ("00" + (now.getMonth() + 1)).slice(-2);
    dd.value = ("00" + now.getDate()).slice(-2);
    h.value = ("00" + now.getHours()).slice(-2);
    m.value = ("00" + now.getMinutes()).slice(-2);
    time.value = now.getTime();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="time">
    {{ yyyy }}.{{ mm }}.{{ dd }} {{ h
    }}<span
      :style="`visibility: ${
        Math.floor(time / 1000) % 2 ? 'visible' : 'hidden'
      }`"
      >:</span
    >{{ m }}
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #000;
}

.time {
  font: normal 12vw Helvetica, Arial;
}
</style>
