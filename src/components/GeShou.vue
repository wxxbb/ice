<template>
    <div class="fallowList">
        <div style="margin-top: 103px;">
            <h2 style="width: 494px;height: 60px;font-size: 53px;font-weight: 200;color: aliceblue; margin: auto;">万千歌手 尽在眼前
            </h2>
            <p style="width: 260px;height: 26px;margin: auto;font-size: 23px;color: white;margin-top: 20px;">登录查看你的关注歌手</p>
            <button class="singer_push__btn">立即登录<span class="singer_push__btn_border"></span></button>
        </div>
    </div>
    <div class="main">
        <div class="mod_singer_tag">
            <div class="singer_tag__list">
                <el-radio-group v-model="radio1" size="small" @change="click_list()">
                    <el-radio-button :label="item" v-for="item in items_letter" />
                </el-radio-group>
            </div>
            <div class="singer_tag__list">
                <el-radio-group v-model="radio2" size="small" @change="click_list()">
                    <el-radio-button :label="item" v-for="item in items_area" />
                </el-radio-group>
            </div>
            <div class="singer_tag__list">
                <el-radio-group v-model="radio3" size="small" @change="click_list()">
                    <el-radio-button :label="item" v-for="item in items_sex" />
                </el-radio-group>
            </div>
            <div class="singer_tag__list">
                <el-radio-group v-model="radio4" size="small" @change="click_list()">
                    <el-radio-button :label="item" v-for="item in items_type" />
                </el-radio-group>
            </div>
        </div>
    </div>
    <div style="width: 100%;min-height: 600px;background-color: rgb(253 253 253);">
        <!-- <router-view :key="route.fullPath"></router-view> -->
        <router-view></router-view>
    </div>
</template>
<script setup>
import { ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const radio1 = ref('全部')
const radio2 = ref('全部')
const radio3 = ref('全部')
const radio4 = ref('全部')
const items_letter = ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#']
const items_area = ['全部', '内地', '港台', '欧美', '日本', '韩国']
const items_sex = ['全部', '男', '女', '组合']
const items_type = ['全部', '流行', '说唱', '国风', '摇滚', '电子', '民谣', 'R&B', '民族乐', '轻音乐', '爵士', '古典', '乡村', '蓝调']
const router = useRouter()
function click_list() {
    router.push({
        path: `/home/yinYueGuan/geShou/geXing`,
        query: {
            id: radio1.value,
            genre: radio2.value,
            sex: radio3.value,
            area: radio4.value,
        }
    })
}
</script>
<style scoped>
a {
    text-decoration: none;
}
.fallowList {
    height: 376px;
    width: 100%;
    background-image: url('/public/img/1.jpg');
    background-size: 100% 376px;
    overflow: hidden;
}
.fallowList img {
    height: 376px;
    width: 100%;
}
.singer_push__btn {
    position: relative;
    display: block;
    margin: 20px auto 0;
    font-size: 18px;
    text-align: center;
    color: #fff;
    line-height: 48px;
    width: 174px;
    background-color: transparent;
    border: 0;
}

.singer_push__btn_border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 2px;
    border: 1px solid #fff;
    opacity: .2;
    filter: alpha(opacity=20);
    transition-property: opacity;
    transition-duration: .3s;
}
.singer_push__btn:hover .singer_push__btn_border {
    opacity: 1;
    filter: alpha(opacity=100);
    transition-duration: .3s;
    cursor: pointer;
}
.singer_tag__list {
    padding-bottom: 3px;
    height: auto;
    zoom: 1;
    clear: both;
    overflow: hidden;
}

.main {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.mod_singer_tag {
    background-color: #fbfbfd;
    padding: 34px 0 17px 40px;
    margin: 30px 0 20px;
}
.singer_tag__list {
    padding-bottom: 3px;
    height: auto;
    zoom: 1;
    clear: both;
    overflow: hidden;
}
.singer_tag__item--select,
.singer_tag__item--select:hover {
    background-color: #31c27c;
    color: #fff;
}
.singer_tag__item {
    height: 26px;
    line-height: 27px;
    overflow: hidden;
    float: left;
    padding: 0 8px;
    margin: 0 12px 14px 0;
}
a {
    color: #000;
    cursor: pointer;
}
a:hover {
    color: #31c27c;
}
</style>