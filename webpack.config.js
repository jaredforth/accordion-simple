const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.ts',
    plugins: [new MiniCssExtractPlugin({
        filename: 'styles.css',
        publicPath: '/dist'
    })],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'accordion.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
