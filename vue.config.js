const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // publicPath: "vue_app_todo_App",
  transpileDependencies: ["vuetify"],
});

// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/my-project/" : "/",
//   transpileDependencies: ["vuetify"],
// };
