// 引入一个包
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

// webpack 中所有配置信息都应该写在 module.exports 中
module.exports = {
    optimization: {
        minimize: false // 关闭代码压缩，可选
    },

    entry: "./src/index.ts",

    devtool: "inline-source-map",

    devServer: {
        contentBase: './dist'
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        // 设置预定义的环境
                        presets: [
                            [
                                // 指定环境的插件
                                "@babel/preset-env",
                                {
                                    // 配置信息
                                    // 要兼容的目标浏览器
                                    "targets":{
                                        "chrome": "88",
                                        "ie": "11"
                                    },
                                    // 指定 corejs 的版本
                                    "corejs":"3",
                                    // useage 表示按需加载
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                "ts-loader"
            ],
            exclude: /node_modules/
        }]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'TS测试'
        }),
    ]
}