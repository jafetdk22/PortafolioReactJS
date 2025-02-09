const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    // ...
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimize: true,
    },
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    // ...
}; 