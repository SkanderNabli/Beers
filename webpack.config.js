const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptiCSSAssets = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const dev = process.env.NODE_ENV === "dev ";

const publicPath = dev ?"./src/assets/" : "./public/assets/"

let config = {
    entry: {
      main: ['./src/assets/scss/style.scss', './src/assets/js/app.js']
    },
    output: {
        path: path.resolve(publicPath),
        filename: dev ? 'js/bundle.js' : 'js/[chunkhash].app.js',
        publicPath: '/assets/'
    },
  watch: dev,
    mode: 'development',
    devtool: dev ? "eval-cheap-module-source-map" : false,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/i,
                exclude: /(node_modules|bower_components)/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/i,
                use: [{loader: MiniCssExtractPlugin.loader,}, "css-loader"]
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {loader: "css-loader", options: {importLoaders: 1}},
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer',
                                        {
                                            "overrideBrowserslist": [
                                                "> 0.5%",
                                                "last 2 versions",
                                                "Firefox ESR",
                                                "ie > 8",
                                                "not dead"
                                            ]
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader"
                ],
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: dev ? 'css/[name].css' : 'css/[contenthash].[name].css',
        }),
      new VueLoaderPlugin()
    ]
};

if (!dev) {
    config.optimization = {
        minimize: true,
        minimizer: [new TerserPlugin(), new OptiCSSAssets({})]
    }
    config.plugins.push(new ManifestPlugin({
        publicPath:"./assets/"
    }))
    config.plugins.push(new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns  : ["**/*","!img/**","!css/fonts/**","!css","!js","!css/fonts","!css/main.css","!js/bundle.js", ]

    }))
}

module.exports = config;
