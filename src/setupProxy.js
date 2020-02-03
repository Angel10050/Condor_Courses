const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api/courses?orderBy=popularity+desc&expand=provider&name=", {
      target: "https://test.mytablemesa.com",
      changeOrigin: true
    })
  );
};
