module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://localhost:3011',
        changeOrigin: true
      },
    }
  }
} 