# Vue造轮子

# webpack 配置
* npm init -y
* npm install -g yarn
* yarn add webpack webpack-cli --dev 
##添加webpack.config.js 配置文件 
配置文件中添加`module.exports = {mode:'production'}`
* yarn add webpack-dev-server --dev
* yarn add --dev html-webpack-plugin
```
配置文件添加 
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
```
* npx webpack-dev-server

>在package的script中加入dev:"npx webpack-dev-server"
就可以直接使用yarn dev调用命令

## 为了使页面可以使用import ".css"需要安装：
* yarn add style-loader --dev
* yarn add css-loader --dev
* yarn add sass-loader node-sass --dev
* 并在webpack.config.js中添加：
```
module: {
        rules: [
            {
                test: [/\.css$/,/\.scss$/],
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
```

##使用globby自动生成config:
* 使用代码直接遍历文件夹内的名称，自动生成entry与plugins；
* yarn add globby --dev
### 改写config:
```
const HtmlWebpackPlugin = require('html-webpack-plugin')；
const globby = require('globby');
const path = require('path');
const paths = globby.sync(['./src/pages/*.js']);
const entry = {};
const plugins =[];
paths.map(p=>{
    const name = path.basename(p).split('.').slice(0,-1)[0];
    entry[name]=p;
    plugins.push(
        new HtmlWebpackPlugin({
            filename: `${name}.html`,
            chunks: [name]
        }),
    )
});

module.exports = {
    mode: 'production',
    entry: entry,
    plugins: plugins,
    module: {
        rules: [
            {
                test: [/\.css$/,/\.scss$/],
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
}
