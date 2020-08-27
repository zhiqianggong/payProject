module.exports = {
    outputDir: 'admin',
    devServer: {
        proxy: {
            "/": {
                target: 'http://127.0.0.1:8095/',
                changeOrigin: true
            }
        }
    }
}