

## 项目命令

npm install //安装node modules
npm run mock //启动后台服务器
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
