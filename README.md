### uni-app(vue3+vite+typescript+pinia+uni-ui)微信小程序APP工程模版

![uni-app(vue3+vite+typescript+pinia+uni-ui)微信小程序APP工程模版](https://article.biliimg.com/bfs/article/c9b2a733abb357ca9370bf51fe2985fd3ae8c6ba.jpg@1e_1c.webp)

```
vue3-vite-uniapp
├─ .gitignore            //git忽略文件
├─ index.html            // 入口
├─ package.json            // 安装依赖配置
├─ pnpm-lock.yaml        // pnpm锁定配置
├─ README.md            // md说明
├─ src│
├─ App.vue            // 小程序页面状态
│ ├─ env.d.ts            // 环境变量
│ ├─ main.ts            // 入口js，导入了app.vue
│ ├─ manifest.json        // uniapp相关配置应用名称、appid、logo、版本等打包信息
│ ├─ api
│ │ └─ user.ts        // 用户页面使用接口
│ ├─ components
│ │ └─ counter
│ │ └─ counter.vue    // 测试pinia状态组件
│ ├─ config
│ │ └─ app.ts            // 封装接口使用的常量
│ ├─ pages
│ │ └─ index
│ │ └─ index.vue
│ ├─ static            // 静态资源
│ │ └─ logo.png
│ ├─ stores
│ │ └─ counter.ts        // 测试pinia状态
│ ├─ utils
│ │ ├─ request.d.ts    // 申明
│ │ └─ request.ts        // uni的请求方法封装
│ ├─ pages.json        // 小程序路由
│ ├─ shime-uni.d.ts    // ts申明 for vue
│ └─ uni.scss            // uni-app内置的常用样式变量
├─ .vscode
│ └─ settings.json    // 修改vscode本地设置
├─ types
│ └─ global.d.ts        // ts全局申明

├─ mock│ 
├─ controller        // 各种业务接口
│ │ ├─ user.ts        // 用户相关接口
│ │ └─ banner.ts        // banner图接口
│ ├─ middleware        // 前后端交互最重要的就是两个参数 request 和 respond ，每一个中间件执行完毕应该进入下一个中间件，因此还需要一个 next 参数，用来启动下一个中间件。
│ │ └─ resultHandler.ts// 用来给每个响应对象包装响应码等
│ ├─ mockdb            // 各种假数据
│ ├─ utils                // 小工具
│ │ └─ logger.ts        // 错误日志
│ ├─ constant.ts        // 常量
│ ├─ mock.ts            // 主入口
│ ├─ requestDecorator.ts// 生成 http method 装饰器，创建类路径装饰器
│ ├─ router.ts            // 路由（更具体做啥？）
│ ├─ tsconfig.json        // ts配置
│ └─ type.d.ts            // ts申明
├─ .eslintrc.js            // eslint的配置
├─ .prettierrc.js        // prettier的配置
├─ tsconfig.json        // ts的配置
└─ vite.config.ts        // vite配置

```

搭建步骤参考小波博客 https://blog.ganxb2.com/3462.html



### 😦目标功能

#### done:

1. 集成 vue3、typescript、pinia、vite、uni-ui、nodejs-koa、pnpm，使用 vue3 模版渲染思路开发
2. 多人协作 eslint、prettier 代码格式校验规范， vsocde 配置
3. jest 单元测试
4. pinia 全局状态管理
5. 小程序分包配置
6. 小程序自定义顶部导航
6. nodejs-koa 接口服务
6. 多环境 api 接口判断
7. 页面：首页、点餐

#### todo:

- git提交 husky 校验
- git提交 commit 校验
- 改成 tsx 完善整个系统流程
- 生产环境去除 console
- nodejs-koa 提取到vercel做成在线 api 服务
- 打包 app 流程
- vite 深入学习实践

<br>

### 🧐主要技术栈

- vue3
- typescript
- uni-ui
- pinia
- vite
- pnpm
- koa
- nodejs
- sass
- jest
- eslint+prettier
- husky 
- commit 
