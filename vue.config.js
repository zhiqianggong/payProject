module.exports = {
    outputDir: 'admin',
    devServer: {
        proxy: {
            "/": {
                target: 'http://45.125.44.70:8095/',
                changeOrigin: true
            }
        }
    }
}