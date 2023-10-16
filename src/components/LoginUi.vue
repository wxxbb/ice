<template>
  <div style="position: absolute;top:0;left:0;z-index: 99;width: 100%;height: 100%; display: none;" ref="loginHide">
    <div class="login" @click="loginuiNone">
    </div>
    <div class="login_ui">
        <form>
          <span class="closeLoginui" @click="loginuiNone"><el-icon><Close /></el-icon></span>
          <p style="text-align: center;font-size: 22px;height: 60px;line-height: 60px;margin-top: 15px;">密码登录</p>
          <ul style="list-style: none;">
            <li style="margin-top: 25px; padding-left: 22%; width: 282px;">
              <el-input v-model="userAccount" placeholder="支持QQ号/邮箱/手机号登录" clearable autofocus maxlength="20"/>
            </li>
            <span style="color: red; font-size: 12px;">{{ accountTip }}</span>
            <li style="margin-top: 10px;padding-left: 22%;width: 282px;">
              <el-input v-model="userPassWord" type="password" placeholder="请输入密码" show-password/>
            </li>
            <span style="color: red; font-size: 12px;">{{ passwordTip }}</span>
            <li style="text-align: center;">
              <button @click="submitLogin" style="border: 0; cursor: pointer; width: 282px;height: 35px;margin-top: 40px; background-color: rgb(0,153,255);color: white;">登录</button>
            </li>
          </ul>
        </form>
      </div>
  </div>
</template>
<script setup>

import { ref} from 'vue'
import { user } from './data1.js'
const userAccount = ref('')
const userPassWord = ref('')
const accountTip = ref('')
const passwordTip = ref('')
const loginHide = ref(null)
function loginuiNone(){
  loginHide.value.style.display = 'none'
  accountTip.value = ''
  passwordTip.value = '' 
}
function loginuiDisplay() {
  loginHide.value.style.display = 'block'
 }
 defineExpose({
  loginuiDisplay
 })

 //登录验证
 function submitLogin(){
  const filteruser = user.filter((i)=>{return i.account==userAccount.value})
  if(filteruser.length==0){
    accountTip.value='不存在此用户'
    passwordTip.value=''
  }else{
    accountTip.value=''
    console.log(filteruser[0].password)
    if(filteruser[0].password==userPassWord.value){
      passwordTip.value='登录成功'
    }else{
      passwordTip.value='密码错误'
    }
  }
  console.log(filteruser)
  // for(let item in user){
  //   if(userAccount.value==user[item].account){
  //     if(userPassWord.value==user[item].password){
  //       passwordTip.value='登录成功'
  //     }else{
  //       passwordTip.value='密码错误'
  //     }
  //   }else{
  //     accountTip.value='不存在此用户'
  //   }
  // }
  // if(!userAccount.value){
  //   accountTip.value='账号不能为空'
  // }//else if(){}
  // if(!userPassWord.value){
  //     passwordTip.value='密码不能为空'
  //   }
  //alert(userPassWord.value)
 }
</script>
<style scoped>
*{
  margin:0;
  padding:0;
}
.login {
  width: 100%;
  height: 100%;
  background: rgba(204,204,204, 0.5);
}

.login_ui {
  box-shadow: 0 0 10px 1px rgb(198, 194, 194);
  border-radius: 15px;
  width: 500px;
  height: 300px;
  position: absolute;
  top: 25%;
  left: 30%;
  background-color: white;
  z-index: 33;
}
.closeLoginui{
  width: 25px;
  height: 25px;
  font-size: 25px;
  position: absolute;
  right: 5px;top:5px;
}
.closeLoginui:hover{
  color: #40C786;
}
</style>