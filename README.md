# 3cmall
## **项目描述**
数码商城

## 项目需求分析：
某数码卖场为方便客户进行线上交易，开发线上商城，实现线上交易。
并希望提供线下路线指引。

## 项目进度计划：
- 第一天：个人开发
- 第二天：上午组件调试，下午联合调试
- 第三天：上午升级功能，下午联合调试
- 第四天：总结经验教训，准备答辩
## 原型图链接：
https://modao.cc/app/j8EOL4uH76lM5OHdcgRBVLtWtiv1Pxp

## 项目API：
- {HOST}/swiper ：主页轮播图
- {HOST}/goodslist ：商品列表
- {HOST}/cart ：购物车列表


## 项目目标（实现情况）：
- 主页：
    - 基本要求：
        - 完成页面基本内容
        - 下拉刷新页面
    - 提高：
        - 应用百度API，显示地址

- 分类：
    - 基本要求：
        - 完成页面基本要求
        - 上拉加载，下拉刷新
    - 提高：
        - 实现排序
- 详情页：
    - 基本要求：
        - 完成页面基本要求
        - 轮播图，展示评论
        - 提交评论功能
        - 添加购物车功能
    - 提高：
        - 登录保护提交评论
        - 分享到QQ、微信、朋友圈
- 发现：
    - 基本要求：
        - 新闻页布局
        - 一大图，两侧图，三小图
    - 提高：
        - 上拉加载，下拉刷新
- 购物车：
    - 基本要求：
        - 完成页面基本要求
        - 增减数量
    - 提高：
        - 结算跳转支付宝API
- 我的：
    - 基本要求：
    - 提高：

## 技术要求：
- react
- redux
- less
- express
- babel
- webp
- 。。。

## 项目命令
```
git clone https://github.com/gavin103/3cmall.git //克隆项目
npm install //安装node modules
node server.js //启动后台服务器
npm run dev //启动网页
```
## 目录结构
```

/
│  .babelrc
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  webpack.config.js
│  
├─mock //模拟后台
│      cart.js
│      goodsList.js
│      homeSwiper.js
│      server.js
│      user.js                 
├─report //进度报告
├─resource  //图片资源    
└─src
    │  index.html
    │  main.js
    │  utils.js 
    ├─api
    │      index.js
    │      session.js     
    ├─components   //公共组件
    │  ├─BackTop   
    │  ├─Carousel 
    │  ├─Header
    │  ├─Protected
    │  ├─Search
    │  └─Tab        
    ├─containers   //容器组件
    │  │  App.js
    │  │  
    │  ├─Cart  
    │  │  ├─cartCategory     
    │  │  ├─cartList
    │  │  └─cartTotal       
    │  ├─Detail
    │  │  │  detail.js
    │  │  │  detail.less 
    │  │  ├─DetailNav    
    │  │  └─DetailTab     
    │  ├─Discovery 
    │  ├─Home
    │  │  │  home.js
    │  │  │  home.less
    │  │  │  
    │  │  └─Category    
    │  ├─List
    │  │  │  index.css
    │  │  │  index.js
    │  │  │  index.less
    │  │  │  
    │  │  ├─Computers
    │  │  ├─Other
    │  │  ├─Phones
    │  │  └─Product 
    │  ├─Login
    │  ├─Profile
    │  └─Register     
    ├─store // redux仓库
    │  │  action-types.js
    │  │  index.js
    │  │        
    │  ├─actions
    │  │      list.js
    │  │      product.js
    │  │      session.js 
    │  │  	cartAction.js 
    │  └─reducers
    │      │  index.js
    │      │  list.js
    │      │  product.js
    │      │  session.js
    │      └─cartRed
    │              cartStore.js           
    └─style //公共样式
            common.less
            

```

## 注意事项
- 开发使用机型为iPhone6，默认设置375px宽度的屏幕
