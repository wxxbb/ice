<template>
  <input v-model="text" @keyup="ff" maxlength="1000"/>
  <input v-model="text1" maxlength="1000" placeholder="qing"/>
  <button @click="gg">查看</button>
</template>
<script setup>
import { ref } from 'vue'
let text = ref('')
const text1 = ref('')
let ran = []
function gg(){

}

</script>
<style scoped>
ul{
  list-style: none;
  display: inline-block;
  margin: 0;
  padding: 0;
}
ul li{
  height: 90px;
  width: 90px;
  background-color: aqua;
  display: inline-block;
}
</style>