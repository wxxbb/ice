<template>
  <div>vip</div>
  <video controls muted>
    <source src="/public/1994.mp4" type="video/mp4" />
  </video>
  {{ msg }}
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios'
const msg = ref()
setTimeout(() => {
  axios.get('https://www.imooc.com/index/getstarlist').then(res => {
    console.log(res.data);
    console.log(res.status);
    console.log(res.statusText);
    console.log(res.headers);
    console.log(res.config);
    msg.value = res
  }).catch(err => {
    console.log('获取数据失败' + err)
  })
}, 1000)</script>