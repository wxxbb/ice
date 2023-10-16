import Mock from 'mockjs'
const Random = Mock.Random
const tableList = Mock.mock({
  "data|100":[{
    name:'@cname',
    'id|+1':1
  }]
})
const userListData = [{
  method:'post',
  url:'/api/users',
  response:({
    body
  })=>{
    return {
      code:200,
      mag:'success',
      data:userList
    }
  }
}]
export default userListData
