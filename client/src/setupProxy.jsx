const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      //target: "http://zinkki.store:8080",
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
  app.use(
    "/interpark",
    createProxyMiddleware({
      //target: "http://zinkki.store:8080",
      target: "http://book.interpark.com",
      changeOrigin: true,
      pathRewrite: {
        '^/interpark':''
      },
    })
  );
};
