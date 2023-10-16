<!-- <script setup>
import { ref } from 'vue'
let path = null
if(location.hash === '#/GeShou') {
  path = ShouYe
}else{
  path = FoMusic
}
</script>

<template>
  <main>
    <FoMusic />
    <component :is="path"></component>
  </main>
</template> -->

<template>
  <main>
    <RouterView></RouterView>
  </main>
</template>
<!-- <script setup>
//import FoMusic from "./views/FoMusic.vue";
</script> -->
<style scoped>

</style>
