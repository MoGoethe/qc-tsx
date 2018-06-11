const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'examples/src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'examples/tmp'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.tsx', '.ts']
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'stage-0']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: 'url-loader',
                include: path.join(__dirname, './examples/src'),
                exclude: /node_modules/
            }
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/, //忽略不用监听变更的目录
        aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
        poll: 1000 //每秒询问的文件变更的次数
    },
    devServer: { //配置此静态文件服务器，可以用来预览打包后项目
        contentBase: path.resolve(__dirname, 'examples/dist'), //开发服务运行时的文件根目录
        host: 'localhost', //主机地址
        port: 9090, //端口号
        compress: true //开发服务器是否启动gzip等压缩
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'examples', 'index.html'),
            filename: 'index.html',
            chunks: ['index'],
            hash: true, //防止缓存
            minify: {
                removeAttributeQuotes: true //压缩 去掉引号
            }
        })
        //new UglifyjsWebpackPlugin()
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}