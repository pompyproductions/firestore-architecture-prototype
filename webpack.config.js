const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/index.js"),
        admin: path.resolve(__dirname, "src/modules/admin.js")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "[name][ext]"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpe?g|png|svg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: "Webpack App",
            filename: "index.html",
            template: path.resolve(__dirname, "src/template.html"),
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            filename: "admin.html",
            template: path.resolve(__dirname, "src/html/admin.html"),
            chunks: ["admin"]
        })
    ],
    devtool: "source-map",
    devServer: {
        static: path.resolve(__dirname, "src"),
        historyApiFallback: true,
        open: true,
        hot: true
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
  };