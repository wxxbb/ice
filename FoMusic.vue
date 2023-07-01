<template>
<div id="nav">
  <div>
    <a href="#" style="display: inline-block;width:170px;height:68px;padding-top: 22px;"><img src="/logo.png"/></a>
    <a>音乐馆</a>
    <a @click="toDeail">我的音乐</a>
    <a>客户端</a>
    <a>开放平台</a>
    <a>VIP</a>
    <!-- <div><router-link to='/MyMusic'>跳转</router-link></div> -->
    <div style="width: 150px;display: inline-block;">
    <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
    </div>
    <button style="border: 0; width: 60px;height: 30px;background-color: #5ec8f3;border-radius: 15px;margin-left: 15px;" @click="loginui">登录</button>
    <div class="buttondropdown">
      <el-button type="success" round>开通VIP
      <el-icon class="downtriangle_icon"><CaretBottom /></el-icon>
      <el-icon class="uptriangle_icon"><CaretTop /></el-icon>
      </el-button>
      <div class="dropdown-content">
        <ul class="recharge_ul">
          <li>开通超级会员</li>
          <li>开通绿钻豪华版</li>
        </ul>
      </div>
    </div>
    <div class="buttondropdown">
      <el-button type="primary" plain>充 值
      <el-icon class="downtriangle_icon"><CaretBottom /></el-icon>
      <el-icon class="uptriangle_icon"><CaretTop /></el-icon>
      </el-button>
      <div class="dropdown-content">
        <ul class="recharge_ul">
          <li>购买乐币</li>
          <li>充值饭票</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<ul class="secondnav_ul">
   <li><a href="#/" style="padding-left: 200px;">首页</a></li>
   <li><a href="#/GeShou" target="_blank">歌手</a></li>
   <li><a href="#/XinDie">新碟</a></li>
   <li><a href="#/PaiHangBang">排行榜</a></li>
   <li><a href="#/FenLeiGeDan">分类歌单</a></li>
   <li><a href="#/MyMusic">电台</a></li>
   <li><a href="#/">MV</a></li>
   <li><a href="#/">数字专辑</a></li>
   <component :is="currentView" />
</ul>
<!-- <div style="width:100%; height: 330px;margin-top: 30px;">
  <el-carousel height="330px">
      <el-carousel-item v-for="song in songs" :key="song">
        <template  v-for="sing in song" :key="sing">
          <Songmd :imgsrc="sing.imgsrc" :imglabel="sing.imglabel" :imgclicknum="sing.imgclicknum"/>
        </template>
      </el-carousel-item>
    </el-carousel>
</div> -->
<div style="width: 100%;height: 300px;border: 1px solid;">

</div>
<div style="width: 100%;height: 300px;border: 1px solid;">

</div>
<div style="width: 100%;height: 300px;border: 1px solid;">

</div>
    <Login_Ui ref="loginuiBlock"/>
</template>
<script setup>
//import axios from 'axios'
import { Search } from '@element-plus/icons-vue'
import {ref,computed, onMounted} from 'vue'
import ShouYe from './ShouYe.vue'
import GeShou from './GeShou.vue'
import PaiHangBang from './PaiHangBang.vue'
import XinDie from './XinDie.vue'
import FenLeiGeDan from './FenLeiGeDan.vue'
import MyMusic from './MyMusic.vue'
import Login_Ui from './LoginUi.vue'
const mm = 'abcabc'.match(/(.)b(.)/)
//console.log(Date())
const loginuiBlock = ref(null)
//import Songmd from './Songmd.vue'
//import data from './data.js'
//import { affixProps } from 'element-plus'
//const router = {path:'/MyMuSic'}
const routes = {
    '/':ShouYe,
    '/GeShou':GeShou,
    '/PaiHangBang':PaiHangBang,
    '/XinDie':XinDie,
    '/FenLeiGeDan':FenLeiGeDan,
    '/MyMusic':MyMusic,
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(()=>{
    return routes[currentPath.value.slice(1)||'/']|| NotFound
  }
)
// function  toDeail () {
//    this.$router.push('/Mymusic')
//  }
function loginui() {
  loginuiBlock.value.loginuiDisplay()
}
/*const songs = ref([])
setTimeout(() => {
  //songs.value = data
  //数据库读取数据
  axios.get('http://127.0.0.1/user').then(res=>{ //该fff为网页获取数据的路径 与user.js中的select*from fff相同
    console.log(res.data)
    songs.value = res.data
  }).catch(err=>{
    console.log('获取数据失败'+err)
})
}, 1000)
const temp = ref([])
function get(){
  axios.get('http://127.0.0.1/user').then(res=>{ //该fff为网页获取数据的路径 与user.js中的select*from fff相同
    console.log(res.data)
    temp.value = res.data
    console.log(temp.value)
  }).catch(err=>{
    console.log('获取数据失败'+err)
})
}*/
</script>
<style scoped>
#nav{
  display: block;
  width: 100%;
  min-width: 1247.33px;
  height: auto;
  background-color: white;
}
#nav a{
    color: black;
    text-align: center;
    line-height: 90px;
    text-decoration: none;
    display: inline-block;
    width: 80px;
    height: 90px;
}
#nav a:hover{
    cursor:pointer;
    color:rgb(26, 244, 121)
    
}
#nav img{
    display: inline-block;

}
#nav img:hover{
    cursor:pointer;
}
.secondnav_ul{
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: inline-block;
}
.secondnav_ul a{
    color: black;
    text-align: center;
    line-height: 90px;
    text-decoration: none;
    display: inline-block;
    width: 80px;
    height: 90px;
}
.secondnav_ul li{
display: inline-block;
}
.recharge_ul{
  padding: 0;
  list-style:none;
  width:90px;
  height: 90px;
}
.recharge_ul li{
  font-size: 12px;
  width:100%;
  height: 45px;
  line-height: 45px;
}
.recharge_ul li:hover{
 background-color: rgb(200, 199, 243);
 color: rgb(243, 162, 13);
}
.buttondropdown{
  margin-left: 30px;
  position: relative;
  display: inline-block;
}
.dropdown-content{

  text-align: center;
  display: none;
  position: absolute;
  z-index: 1;
}
.buttondropdown:hover .dropdown-content{
  display: block;
}
.uptriangle_icon{
  display: none;
}
.buttondropdown:hover .downtriangle_icon{
  display: none;
}
.buttondropdown:hover .uptriangle_icon{
  display:inline;
}
</style>