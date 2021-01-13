const Koa = require('koa');
const webpack = require('webpack');

const app = new Koa();
const config = require('../config/webpack.config.js');
const compiler = webpack(config);
const webpackDevMiddleware = require('./middleware/webpack-dev');
// 最后一项
app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }),
);
app.listen(3000);
