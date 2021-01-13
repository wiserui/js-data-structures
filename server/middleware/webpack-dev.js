const webpackDevMiddleware = require('webpack-dev-middleware');
const middleware = (...args) => {
  const webpackDev = webpackDevMiddleware(...args);
  return async (ctx, next) => {
    ctx.send = (content) => {
      ctx.body = content;
    };
    await webpackDev(ctx.req, ctx, next);
  };
};
module.exports = middleware
;
