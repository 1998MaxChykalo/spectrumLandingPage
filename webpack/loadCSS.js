module.exports = function({include, exclude} = {}) {
    return {
        module: {
            rules: [
              {
                test: /\.css$/,
                include,
                exclude,
        
                use: ["style-loader", "css-loader"],
              },
            ],
        },
    }
}