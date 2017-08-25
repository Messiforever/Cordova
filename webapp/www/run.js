/**
 * Created by Administrator on 2017/8/23.
 */
var express = require('express');
var app = express();
app.use("/",express.static(__dirname));
var router = express.Router();
router.get('/',function (req,res) {

});
app.use("/",router);
var server = app.listen(9090,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("服务器启动成功，访问地址Http://%s:%s",host,port);
});
