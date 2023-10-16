import Mock from 'mockjs'
//import user from './user'
import admin from './admin'
Mock.setup({timeout:'100-200'})
const routeList = [
  ...admin
]
routeList.forEach(route=>{
  Mock.mock(route.url,route.method===undefined?'get':route.method,route.tpl)
})
export default Mock
