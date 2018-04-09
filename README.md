安装依赖
```
cd vue-movie
npm install
```
运行
```
npm run dev
```
打开浏览器进入localhost:8080，在开发者工具的移动端模式下查看效果

## 项目描述
- vue2.0 + vue-router + vuex：vue全家桶
- axios：用于ajax请求
- vue-lazyload：用于图片懒加载
- better-scroll：移动端滚动库，优化移动端滚动效果
- webpack： 构建工具
- es6: 使用es6语法
- stylus: css预处理

使用flex布局进行移动端适配，用eslint进行代码规范检查

使用localStorage存储收藏的电影信息，影人信息，评论点赞信息

webpack + webpack-dev-server + http-proxy-middleware进行本地开发环境http请求转发，实现跨域请求


### 功能实现
#### 上映电影部分
- [x] 获取正在上映的电影信息和即将上映电影的信息
- [x] 电影信息滚动(底部)加载提高响应速度
#### 排行部分
- [x] 获取所有可以从豆瓣api得到的排行榜
- [x] 查看排行榜详细，在排行榜中查看具体电影详细
#### 搜索部分
- [x] 支持用户根据关键字搜索
- [x] 支持用户根据给出标签进行标签搜索(与输入与标签相同的关键字进行搜索不同)
- [x] 根据搜索结果查看电影详情
- [x] 查看搜索历史
#### 电影详情部分
- [x] 获取电影所有的基础信息和评分信息
- [x] 获取电影的短评和长评，可查看该电影所有短评长评
- [x] 将电影标记为想看/看过
#### 影人信息部分
- [x] 获取影人基本信息
- [x] 查看影人作品详细
#### 用户中心部分
- [x] 查看收藏的影人
- [x] 查看想看的电影
- [x] 查看看过的电影

### 关于浏览器跨域
#### 开发环境
```
proxyTable: {
      '/v2': {
        target: 'http://api.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/v2': '/v2'
        }
      }
    }
```

```
├─build                       // webpack配置文件
├─config                      // 项目开发环境配置相关代码
├─dist                        // 项目打包目录
├─screenshots                 // 项目截图
├─src                         // 源码目录
│  ├─api                      // axios请求，获取项目数据
│  ├─base                     // 项目基础组件
│  │  ├─confirm               // 确认框组件
│  │  ├─history-list          // 历史记录列表组件
│  │  ├─loading               // 初始加载过渡组件
│  │  ├─loadmore              // 加载更多组件
│  │  ├─scroll                // 页面滚动组件
│  │  ├─search-box            // 搜索框组件
│  │  ├─star                  // 星级评分组件
│  │  └─switches              // 选项卡组件
│  ├─common                   // 公共资源
│  │  ├─fonts                 // 图标字体
│  │  ├─image                 // 图片资源
│  │  ├─js                    // 公共方法
│  │  └─stylus                // css样式
│  ├─components               // 业务组件
│  │  ├─all-discussion        // 全部评论组件
│  │  ├─celebrity-detail      // 影人详情组件
│  │  ├─celebrity-info        // 影人基础信息组件
│  │  ├─celebrity-list        // 影人列表组件
│  │  ├─celebrity-works       // 影人作品组件
│  │  ├─movie-comment         // 电影短评组件
│  │  ├─movie-detail          // 电影详情组件
│  │  ├─movie-info            // 电影基础信息组件
│  │  ├─movie-list            // 电影列表组件
│  │  ├─movie-review          // 电影长评组件
│  │  ├─movie-show            // 主页上映电影组件
│  │  ├─rank                  // 排行组件
│  │  ├─rank-detail           // 排行详情组件
│  │  ├─rank-list             // 排行列表组件
│  │  ├─review-detail         // 电影长评详情组件
│  │  ├─search                // 电影搜索组件
│  │  ├─suggest               // 搜索结果组件
│  │  ├─tab                   // 主页tab栏组件
│  │  └─user-center           // 用户中心组件
│  ├─router                   // vue-router路由管理
│  └─store                    // vuex状态管理
└─static
```
