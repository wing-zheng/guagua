let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let {computers,musics,other} = require('./goodsList');
let list = require('./goodsList');
let swiper = require('./homeSwiper');
let cart = require('./cart');
let app = express();

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
app.get('/homeListData', function (req, res) {
    res.json(swiper);
    console.log(lyss)
});


app.use(bodyParser.json());

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx'
}));
app.listen(3000);

/*app.use(function (req, res, next) {
  setTimeout(() => {
    next();
  }, 500)
});*/

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:8080");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    res.header('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE,OPTIONS");
    //允许跨域传cookie
    res.header('Access-Control-Allow-Credentials', "true");
    if (req.method == 'OPTIONS') {
        res.end('');
    } else {
        next();
    }
});

app.get('/swiper', function (req, res) {
    res.json(swiper);
});
app.get('/list',function (req,res) {
    let {offset, limit} = req.query;
    let clonedLessons = JSON.parse(JSON.stringify(list));
    let list = [...clonedLessons.computers,...clonedLessons.musics,clonedLessons.other];

    if (offset == 36) {
        clonedLessons.hasMore = false;
    }
    res.json(clonedLessons);
});
app.get('/computers',function (req,res) {

    res.json(computers)
});
app.get('/musics',function (req,res) {
    res.json(musics)
});
app.get('/other',function (req,res) {
    res.json(other)
});
app.get('/cart',function (req,res) {
    res.json(cart)
});


app.post('/cart',function (req,res) {
    // {
    //     count:1,
    //     category:'computers',
    //     id:102,
    // }
    let body= req.body;
    let product = goodList[body.category].find((item,index)=>item.id == body.id);
    product = {...product,...body};
    cart.push(product);
});
let users = [];
app.post('/login', function (req, res) {
    let user = req.body;
    console.log("登陆");
    console.log(user);
    let oldUser = users.find(item => item.mobile == user.mobile && item.password == user.password);
    if(oldUser){
        req.session.user = user;//把用户写入会话对象中
        res.json({code:0,success:'登录成功!',user});
    }else{
        res.json({code:1,error:'登录失败!'});
    }
});

app.post('/register', function (req, res) {
    let user = req.body;//{mobile,password}
    console.log(user);
    let oldUser = users.find(item => item.mobile == user.mobile);
    if (oldUser) {
        res.json({code: 1, error: '用户名重复'});
    } else {
        users.push(user);
        //后台向前台返回数据的时候需要一个编码，0表示成功，1表示失败
        res.json({code: 0, success: '用户注册成功'});
    }
});

app.get('/users',function (req,res) {
    res.json(users)
});

//留言板的处理
let lys = [];
app.get('/ly',function (req,res) {
    res.json(lys)
});

app.post('/lys', function (req, res) {
    let ly = req.body;//{mobile,password}
    console.log(ly);
    lys.push(ly);
        //后台向前台返回数据的时候需要一个编码，0表示成功，1表示失败
    res.json({code: 0, success: '留言成功'});
    
});

app.post('/lysGet', function (req, res) {
    if(lys.length===0){//判断留言数组是否为空
        console.log("留言内容为空");
        
        res.json({code: 1, success: '留言内容为空',lys:lys}); 

    }else{
        console.log("留言获取成功222222");
        res.json({code: 0, success: '留言获取成功',lys:lys}); 
        
    }
       
});