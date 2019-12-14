const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js'
  },
  devServer: {
    // webpackの扱わないファイル(HTMLや画像など)が入っているディレクトリ
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'] // css-loader -> vue-style-loaderの順で通していく
      }
    ]
  },
  resolve: {
    // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
    extensions: ['.js', '.vue'],
    alias: {
      // vue-template-compilerに読ませてコンパイルするために必要
      // vue.jsのビルドを指定する
      vue$: 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([{from: './public'}])
  ],
}