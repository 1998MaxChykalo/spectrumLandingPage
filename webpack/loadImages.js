module.exports = () => ({
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|svg|gif)$/,
          loaders: [
            {
                loader: "file-loader",
                options: {
                  name: "images/[name].[ext]",
                },
            }
          ]
        }
      ]
    },
  }
);