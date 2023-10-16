<template>
  <div style="background-color: rgb(245 245 245); padding-top: 30px;">
  <h1>歌 单 推 荐</h1>
    <div class="a">
    <div style="width: 100%;height: auto;">
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-change="handleClick"
    >
      <template v-for="item in songList" key="item">
        <el-tab-pane :label="item.listname" :name="item.labelname" ref="tabpanename">
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
    <!-- 幻灯片走马灯 -->
    <el-carousel height="330px">
      <el-carousel-item v-for="song in (songs)" :key="song">
        <template  v-for="sing in song" :key="sing">
          <Songmd :imgsrc="sing.imgsrc" :imglabel="sing.imglabel" :imgclicknum="sing.imgclicknum"/>
        </template>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>
<script setup>
import Songmd from './Songmd.vue'
import { list1, list2,list3, list4, list5, list6, list7 } from './data.js'
import {ref,computed} from 'vue'
// import type { TabsPaneContext } from 'element-plus'
// import axios from 'axios'
// let indexarr=0
// const xx = []
const songs = ref(list1)
const tabpanename = ref(null)
const activeName = ref('first')
const songList = [
  {listname:'为你推荐',labelname:'first'},
  {listname:'伤感',labelname:'second'},
  {listname:'古风音乐',labelname:'third'},
  {listname:'婚礼',labelname:'fourth'},
  {listname:'KTV热歌',labelname:'fiveth'},
  {listname:'90年代',labelname:'sixth'},
  {listname:'最新专辑',labelname:'seventh'}
]
// const tabPane1: any = ref(null)
// const tabPane2: any = ref(null)
const handleClick = (tab) => {
  switch(tab){
    case 'first':
    songs.value = list1;
    break;
    case 'second':
    songs.value = list2;
    break;
    case 'third':
    songs.value = list3;
    break;
    case 'fourth':
    songs.value = list4;
    break;
    case 'fiveth':
    songs.value = list5;
    break;
    case 'sixth':
    songs.value = list6;
    break;
    case 'seventh':
    songs.value = list7;
    break;
  }
  //console.log(tab)
  // console.log(tabPane1.value)
  // console.log(tabPane1.value.$el.style.display)
  // console.log(tabPane2.value.$el.style.display)
}
// setTimeout(() => {
//   songs.value = data
// }, 1500)
setTimeout(() => {
  //songs.value = data
  //数据库读取数据
  /* axios.get('http://127.0.0.1/user').then(res=>{ //该fff为网页获取数据的路径 与user.js中的select*from fff相同
    xx.push(...res.data)
    while(indexarr<xx.length){
      songs.value.push(xx.slice(indexarr,indexarr+=5))
    }
  }).catch(err=>{
    console.log('获取数据失败'+err)
  }) */
}, 500)
</script>

<style scoped>
.demo-tabs{
  padding-left: 300px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.a :deep(.demo-tabs){
  text-align: center;
}
h1{
    text-align: center;
}
</style>
