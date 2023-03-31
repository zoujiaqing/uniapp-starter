```
vue3-vite-uniapp
├─ .gitignore
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ env.d.ts
│  ├─ main.ts
│  ├─ manifest.json
│  ├─ pages
│  │  └─ index
│  │     └─ index.vue
│  ├─ pages.json
│  ├─ shime-uni.d.ts
│  ├─ static
│  │  └─ logo.png
│  └─ uni.scss
├─ tsconfig.json
└─ vite.config.ts




vue3-vite-uniapp├─ .gitignore            //git忽略文件
├─ index.html            // 入口
├─ package.json            // 安装依赖配置
├─ pnpm-lock.yaml        // pnpm锁定配置
├─ README.md            // md说明
├─ src│
├─ App.vue            // 小程序页面状态
│ ├─ env.d.ts            // ts申明 for ?
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
│ ├─ shime-uni.d.ts    // ts申明 for ?
│ └─ uni.scss            // uni-app内置的常用样式变量
├─ .vscode
│ └─ settings.json    // 修改vscode本地设置
├─ types
│ └─ global.d.ts        // ts全局申明
├─ mock│ ├─ controller        // 各种业务接口
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

### todo

1. style 拆成文件导入，参考 taro 小程序结构
2. mock 接口服务弄到 vercel 去
3. commit 提交校验
4. git 的提交 husky 校验钩子
