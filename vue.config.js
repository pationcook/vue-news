const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave : false
  
})
module.exports = {
  devServer: {
    allowedHosts: "all",
  },
};