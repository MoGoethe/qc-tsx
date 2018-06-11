const path = require('path');
<<<<<<< HEAD
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
=======
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/[name]-css.css');
const extractSASS = new ExtractTextPlugin('css/[name]-sass.css');
const CleanWebpackPlugin = require('clean-webpack-plugin');
>>>>>>> 61c4cf743dd7812467d34729a7bdc7c495e58ff9

module.exports = {
    entry: path.resolve(__dirname, 'examples/src', 'index.js'),
    output: {
<<<<<<< HEAD
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
=======
        filename: "bundle.js",
        path: __dirname + "/examples/dist"
    },
    // 启用source map
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, 'packages'),
                    path.resolve(__dirname, 'examples')
                ],
                options: {
                    presets: ['@babel/preset-react']
>>>>>>> 61c4cf743dd7812467d34729a7bdc7c495e58ff9
                }
            },
            {
                test: /\.tsx?$/,
<<<<<<< HEAD
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
=======
                loader: "awesome-typescript-loader",
                include: [
                    path.resolve(__dirname, 'packages'),
                    path.resolve(__dirname, 'examples'),
                    path.resolve(__dirname, 'tests')
                ]
            },
            {
                test: /\.svg(\?.*)?$/, // match img.svg and img.svg?param=value
                use: [
                    'file-loader', // or file-loader or svg-url-loader
                    'svg-transform-loader'
                ]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractSASS.extract({
                    use: [
                        { loader: "css-loader" },
                        { loader: "sass-loader" }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'img/[name].[ext]',
                        publicPath: '../'
                    }
                }]
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "source-map-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "examples/dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './examples/index.html', filename: 'index.html' }),
        extractCSS,
        extractSASS
    ]
    /*,
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },*/
};
>>>>>>> 61c4cf743dd7812467d34729a7bdc7c495e58ff9
