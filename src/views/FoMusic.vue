<template>
<div id="nav">
  <div>
    <div class="logostyle"><router-link to='/'><img src="/logo.png"/></router-link></div>
    <ul class="headnav">
      <li class="top_nav__link--current" @click="changeliclass"><router-link to='/' class="top_nav__link--current">音乐馆</router-link></li>
      <li><router-link to='/home/myMusic' active-class="top_nav__link--current"><span ref="my">我的音乐</span></router-link></li>
      <li><router-link to='/keHuDuan'>客户端</router-link></li>
      <li><router-link to='/kaiFangPingTai'>开放平台</router-link></li>
      <li><router-link to='/index'>VIP</router-link></li>
    </ul>
    <div style="width: 150px;display: inline-block;">
    <el-input
        v-model="input"
        class="w-50 m-2"
        placeholder="Type something"
        :suffix-icon="Search"
        @keyup.enter="enterx"
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
<RouterView></RouterView>
<Footer />
<LoginUi ref="loginuiBlock"/>
<div class="bt" ref="gsg">
    <el-backtop :right="29" :bottom="149" />
    <!-- <div v-show="btFlex"><el-icon><ArrowUpBold /></el-icon></div> -->
    <div><a>举报</a></div>
    <div><a>反馈</a></div>
    <div><el-icon><VideoPlay /></el-icon></div>
  </div>
</template>
<script setup>
//import axios from 'axios'
import { Search } from '@element-plus/icons-vue'//jj
import {ref,computed, onMounted,getCurrentInstance} from 'vue'
import LoginUi from '../components/LoginUi.vue'
import Footer from '../components/Footer.vue'
const loginuiBlock = ref(null)

const my = ref(null)
const btFlex = ref(false)
const input = ref('')
function loginui() {
  loginuiBlock.value.loginuiDisplay()
  gsg.value.style.color = "red"
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
function enterx(){

}
function changeliclass(){

} 
// function scrolling(){
//   let scrollTop = document.body.scrollTop||document.documentElement.scrollTop
//   if(scrollTop>400){
//     btFlex.value =true
//   }else{
//     btFlex.value =false
//   }

// }
// onMounted(()=>{
//   window.addEventListener("scroll",scrolling)
// })


</script>
<style scoped>
a{
color:black
}
#nav{
  display: block;
  width: 100%;
  min-width: 1247.33px;
  height: auto;
  background-color: white;
}
.headnav a{
    text-align: center;
    line-height: 90px;
    text-decoration: none;
    display: inline-block;
    height: 90px;
    padding: 0 20px;
}
.headnav a:hover{
    cursor:pointer;
    color:rgb(26, 244, 121)
}
.logostyle{
  display: inline-block;
  height:68px;
  vertical-align: top;
  margin-top: 22px;
  margin-left: 22px;

}
.headnav img{
    display: inline-block;
}
.headnav img:hover{
  cursor:pointer;
}
.headnav{
  margin: 0;
  list-style: none;
  display: inline-block;
}
.headnav li{
  display: inline-block;
  font-size: 18px;
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
.top_nav__link--current, .top_nav__link--current:hover {
    background-color: #31c27c;
    color: #fff;
}
.bt{
    position: fixed;
    right:30px;
    bottom: 30px;
    width:35px;
    height: 119px;
  }
  .bt div{
    width:35px;
    height: 35px;
    margin: 2px 0;
    font-size: 16px;
    font-family: serif;
    text-align: center;
    line-height: 35px;
    border: 1px solid #cbc0c0;
    background-color: white;
    cursor: pointer;
  }
  .bt div:hover{
    background-color: rgb(227, 235, 242);
  } 
  .bt :deep(.el-backtop){
    border-radius: 0;
    background-color: white;
    box-shadow: none;
  }
</style>