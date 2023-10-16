const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {

  app.use(
    "/api",
    createProxyMiddleware({
      //target: "http://zinkki.store:8080",
      target: "http://localhost:8081",
      changeOrigin: true,
    })
  );
  
};
