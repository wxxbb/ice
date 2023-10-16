//配置数据库相关信息
let mysql = require('mysql')
let db = mysql.createPool({
    host:'127.0.0.1',//数据库ip地址
    user:'root',//数据库登录账号
    password:'000000',//数据库登录密码
    database:'world'//需要操作的数据库
})
module.exports = db