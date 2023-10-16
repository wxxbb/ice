<template>
  <ul class="secondnav_ul">
     <li><router-link to="/home/yinYueGuan/shouYe">首页</router-link></li>
     <li><router-link to="/home/yinYueGuan/geShou">歌手</router-link></li>
     <li><router-link to="">新碟</router-link></li>
     <li><router-link to="/home/yinYueGuan/PaiHangBang">排行榜</router-link></li>
     <li><router-link to="">分类歌单</router-link></li>
     <li><router-link to="">电台</router-link></li>
     <li><router-link to="">MV</router-link></li>
     <li><router-link to="">数字专辑</router-link></li>
  </ul>
  <router-view></router-view>
  <div style="width: 100%;height: 300px;background-image: url(/public/img/2.jpg);">
  </div>
  <div style="width: 100%;height: 300px;">
  </div>
  </template>
  <script setup>
  import { Search } from '@element-plus/icons-vue'//jj
  import {ref,computed, onMounted} from 'vue'
  import TestCom from './testCom.vue'
  const loginuiBlock = ref(null)
  function loginui() {
    loginuiBlock.value.loginuiDisplay()
  }
  </script>
  <style scoped>
  .secondnav_ul{
    margin: 0;
    padding: 0 0 0 255px;
    width: auto;
    list-style: none;
    display:block;
  }
  .secondnav_ul a{
      color: black;
      text-align: center;
      line-height: 51.67px;
      text-decoration: none;
      display: inline-block;
      width: 80px;
      height: 51.67px;
  }
  .secondnav_ul li{
  display: inline-block;
  }
  </style>