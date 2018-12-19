'use strict'
const fs = require('fs')
fs.readFile('./file','utf-8',function(error,data){
    if (error) {
        console.log('读取文件失败了'+error)
    } else {
        console.log(data.toString())
    }
})
fs.writeFile('./write.md','凉兮',function(error){
    if (error) {
        console.log('写入成功'+error)
    } else {
        console.log('写入失败'+error)
    }
})