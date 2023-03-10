const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    module: {
        rules:[
            {
                test: /\.js$/,
                use: [
                    "babel-loader"
                ]
            }
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })        
    ]
};
