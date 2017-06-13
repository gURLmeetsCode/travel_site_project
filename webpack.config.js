// object initialization
// per es2015 standard entry and exit points need to have __dirname in front and babel loaders need to use the full name "babel-loader"
module.exports = {
    entry: __dirname + "/app/assets/scripts/App.js",
    output: {
        path: __dirname + "/app/temp/scripts",
        filename: "App.js"
    },
    module:{
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}