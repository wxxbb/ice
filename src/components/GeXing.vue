<template>
  <div style="overflow: hidden;">
    <div style="border: 1px solid green;border-radius: 50%; width: 150px;height: 150px;margin: 50px;display: inline-block;text-align: center;" v-for="item in user">{{item.name}}</div>
    <ul>
      <li v-for="item in user" :key="item.name">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script setup>
import {ref,watch,reactive} from 'vue'
import { useRoute } from "vue-router";

const route = useRoute()
let userData = ref()
const data = [
  {name:'Akk',genre:'内地',sex:'男',area:'流行'},
  {name:'Aoo',genre:'内地',sex:'男',area:'说唱'},
  {name:'Buu',genre:'港台',sex:'女',area:'国风'},
  {name:'Cee',genre:'内地',sex:'男',area:'流行'},
  {name:'CYY',genre:'日本',sex:'女',area:'摇滚'},
  {name:'Chh',genre:'欧美',sex:'男',area:'流行'},
  {name:'Cjj',genre:'韩国',sex:'男',area:'摇滚'},
  {name:'DYY',genre:'港台',sex:'男',area:'民谣'},
  {name:'EYd',genre:'欧美',sex:'女',area:'说唱'},
  {name:'Fdd',genre:'港台',sex:'女',area:'民谣'},
]
let user = data
watch(
  ()=>route.query,
   newId=>{
    console.log(+new Date())
    userData = fetchUser(newId)
  }
)
// console.log(route.query.id)
function fetchUser(newId) {
  user = data.filter((s)=>{if(newId.id=='全部'){return s}else{return s.name.startsWith(newId.id)}}).filter((d)=>{if(newId.genre=='全部'){return d}else{return d.genre==newId.genre}}).filter((f)=>{if(newId.sex=='全部'){return f}else{return f.sex==newId.sex}}).filter((g)=>{if(newId.area=='全部'){return g}else{return g.area==newId.area}})
  return user
}
// userData = fetchUser(route.query)
</script>
<style scoped>
ul{
  list-style: none;
}
</style>