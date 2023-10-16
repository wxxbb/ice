<template>
  <div class="footer">
    <div class="footer_download">
      <h3>下载QQ音乐客户端</h3>
      <ul class="footer_download_list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="footer_product">
      <h3>特色产品</h3>
      <ul class="footer_product_list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="footer_group">
      <h3>合作链接</h3>
      <ul class="footer_group_list">
        <li v-for="item in items"><a :href="item.url">{{ item.name}}</a></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const items = [
  {name:'CJ ENM',
  url:"//y.qq.com/portal/company_detail.html?id=297"},
  {name:'腾讯视频',
  url:"http://v.qq.com/"},
  {name:'手机QQ空间',
  url:"http://im.qq.com/"},
  {name:'最新版QQ',
  url:"http://im.qq.com/"},
  {name:'腾讯社交广告',
  url:"http://im.qq.com/"},
  {name:'电脑管家',
  url:"http://im.qq.com/"},
  {name:'QQ浏览器',
  url:"http://im.qq.com/"},
  {name:'腾讯微云',
  url:"http://im.qq.com/"},
  {name:'腾讯云',
  url:"http://im.qq.com/"},
  {name:'企鹅FM',
  url:"http://im.qq.com/"},
  {name:'智能电视网',
  url:"http://im.qq.com/"},
  {name:'当贝市场',
  url:"http://im.qq.com/"},
  {name:'酷我音乐',
  url:"https://www.kuwo.cn/"},
  {name:'酷狗听书',
  url:"https://www.kugou.com/ts/"},
  ]
</script>
<style scoped>
h3{
  color: rgb(127 127 127);
}
a{
 text-decoration: none;
 color: rgb(127 127 127);
}
ul{
  list-style: none;
}
a:hover{
  cursor:pointer;
  color:rgb(26, 244, 121)
}
.footer{
  background-color:rgb(51 51 51);
  min-width: 1000px;
  width: 100%;
  height: 709px;
}
.footer_download{
  display: inline-block;
  width:30%;
  height: 300px;
}
.footer_product{
  display: inline-block;
  width: 40%;
  height: 300px;
}
.footer_group{
  display: inline-block;
  width: 30%;
  height: 300px;
}
.footer_group_list{
  width: 100%;
  height: 200px;

}
.footer_group_list li{
  display: inline-block;
  width: 33%;
  height: 30px;
}
</style>