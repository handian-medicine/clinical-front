const express = require("express")
const request = require("request")
const router = express.Router()
var myConst = require("./const")

router.post('/', function (req, res, next) {
    // post http://47.94.22.221:9002/users/login/ email password usertoken
    // 返回 {
    //     "url": "http://47.94.22.221:9002/users/4/",
    //     "id": 4
    // }
    options = {
        url:myConst.apiurl + "/users/login/",
        form:{
            email: req.body.email,
            password: req.body.password
        },
        headers: {'Authorization': 'Bearer ' + req.cookies.usertoken.access_token}
    }
    console.log("home.js 进入流程",options)
    request.post(options, function (error, response, body) {
        console.log("home.js request.post的body",body)
        var bodyParse = JSON.parse(body)
        res.cookie("userid", {"id": bodyParse.id}, {maxAge: 1000 * 60 * 60 * 4, httpOnly: true});
        var newoptions = {
            url: bodyParse.url,
            headers: {'Authorization': 'Bearer ' + req.cookies.usertoken.access_token}
        }
        // get http://47.94.22.221:9002/users/4/ usertoken
        // 返回 该用户所有个人信息,包括参与的所有项目
        request.get(newoptions, function (error, response, body) {
            var userinfo = JSON.parse(body)
            console.log("home.js request.get的userinfo",userinfo)
            res.send({msg:'ok',userinfo:userinfo})
        })

    })

})

router.post('/prj002', function (req, res, next) {
    console.log("测试看这里",req.body)
    var url = myConst.apiurl + "/o/token/";
    var options = {
        url: url,
        form:{
            "username": req.body.email,
            "password": req.body.password,
            "grant_type": "password",
            "scope": myConst.scope_prj002,
            "client_id": myConst.client_id,
            "client_secret": myConst.client_secret
        }
    }
    request.post(options, function (error, response, body) {
        var prj002token = JSON.parse(body)
        console.log('获取的prj002token',prj002token)
        res.cookie("prj002token", prj002token, {maxAge: 1000 * 60 * 60 * 8, httpOnly: true})
        res.send({msg:"ok"})
    })
})

module.exports = router