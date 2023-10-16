<template>
    <div class="songmd">
        <div class="songmd1">
            <img @click="imgclick" :src="imgsrc" />
            <el-icon class="playicon">
                <VideoPlay />
            </el-icon>
        </div>
        <p><a>{{ imglabel }}</a></p>
        <p><label style="color: #9999;">播放量:{{ imgclicknum1 }}万</label></p>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(
    {
        imgsrc: String,
        imglabel: String,
        imgclicknum: Number
    }
)
const imgsrc = props.imgsrc
const imglabel = props.imglabel
let imgclicknum1 = ref(props.imgclicknum)
// let imgclicknum1 = toRef(props, 'imgclicknum')
// let imgclicknum = ref(0)
// console.log(imgsrc)
// console.log(imglabel)
// console.log(imgclicknum)
function imgclick() {
    imgclicknum1.value++
    // props.imgclicknum++
}
</script>
<style scoped>
.songmd {
    display: inline-block;
    width: 230px;
    height: 300px;
    margin-left: 20px;

}

.songmd1 {
    position: relative;
    width: 230px;
    height: 230px;
    overflow: hidden;
}

.songmd1:hover {
    cursor: pointer;
}

.songmd1 img {
    display: inline-block;
    width: 230px;
    height: 230px;
    transition: all 0.6s;
}

.songmd1:hover img {
    transform: scale(1.2, 1.2);
    transition: all 0.6s;
}

.songmd1:hover .playicon {
    animation: playico 2s;

}

.playicon {
    border-radius: 30px;
    font-size: 60px;
    color: rgb(250, 247, 247);
    background-color: rgb(244, 177, 8);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    opacity: 0;
}

@keyframes playico {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes playico1 {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>