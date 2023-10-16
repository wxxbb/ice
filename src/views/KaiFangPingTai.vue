<template>
  <input type="text" v-model="text1" />手中的牌<br />
  <input type="text" v-model="text2" />已出的牌<br />
  <button @click="jiancha">检查</button>
</template>
<script setup>
import { ref } from 'vue'
//生成56张扑克牌
let content = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', 'XW', 'DW']
let content1 = ref([])
content.map((item, index) => {
  if (index < 13) {
    content1.value.push(item, item, item, item)
  } else {
    content1.value.push(item)
  }
})
//获取输入框的牌
const text1 = ref()
const text2 = ref()
function jiancha() {
  //对获取的牌进行格式化成数组
  const result = (text1.value + '-' + text2.value).split('-')
  //去掉手牌和已出的牌，得到对方的手牌
  result.map((item) => {
    if (content1.value.includes(item)) {
      content1.value.splice(content1.value.indexOf(item), 1)
    }
  })
  const content2 = content1.value
  //将JQKA转换成数字
  content1.value.map((item, index) => {
    if (item == 'J') {
      content2[index] = '11'
    } else if (item == 'Q') {
      content2[index] = '12'
    } else if (item == 'K') {
      content2[index] = '13'
    } else if (item == 'A') {
      content2[index] = '14'
    }
  })
  //去除重复的卡牌，每种卡牌只留一张
  let d = []
  d.push(content2[0])
  for (let i = 0; i < content2.length - 1; i++) {
    if (content2[i + 1] - content2[i] >= 1 && content2[i + 1] < 15) {
      d.push(content2[i + 1])
    }
  }
  //判断卡牌是否连续，将连续的卡牌放在同一组
  let j = 0
  let e = [[], [], [], [], [], [], []]
  console.log(d)
  for (let i = 0; i < d.length - 1; i++) {
    if (d[i + 1] - d[i] == 1) {
      e[j].push(d[i])
      if (i == d.length - 2) {
        e[j].push(d[i + 1])
      }
    } else if (d[i + 1] - d[i] > 1) {
      e[j].push(d[i])
      if (i == d.length - 2) {
        e[j].push(d[i + 1])
      }
      j++
    }
  }
  console.log(e)
  //过滤，连续的卡牌大于等于五，即可以连成顺子
  let x = e.filter((item) => item.length >= 5)[0]
  console.log(x)
  if (x.length == 0) {
    console.log('this is null')
  } else {
    for(let i = 0; i<x.length;i++){
      if(x[i] == '11'){
        x[i]= 'J'
      }else if(x[i] == '12'){
        x[i] ='Q'
      }else if(x[i] == '13'){
        x[i] ='K'
      }else if(x[i] == '14'){
        x[i] ='A'
      }
    
    }
    console.log(x)
  }
}
// for(let i = 1;i<j.length-2;i++){
// ifj[0]>=4
// j[j.length-1]<11
// i=1
// j[i*2]-j[i*2-1]>4
// }



// import axios from 'axios';
// function jj(){
//   axios.get('/admin/list').then(function (response){
//     console.log(response.data)
//   }).catch(function (err){
//     console.log(err)
//   })
// }
// function hh(){
//   axios.post('/admin',{
//     username:'bb',
//     password:'BB'
//   }).then(function (response){
//     console.log(response.data)
//   }).catch(function (err){
//     console.log(err)
//   })
// }
</script>
<style scoped>
img {
  width: 300px;
  height: 300px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 50%);
}

.sprite {
  width: 90px;
  height: 90px;
  background-image: url('/public/img/sprite.jpg');
  background-repeat: no-repeat;
  background-size: 500px 500px;
  background-position: -210px -210px;
}

.ll {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

}
</style>