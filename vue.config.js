//自建新的配置文件
module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
        //配置跨域
        proxy: {
            '/api': {
                target: 'http://localhost:8888',
                //是否跨域
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}