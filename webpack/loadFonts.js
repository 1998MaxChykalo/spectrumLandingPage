module.exports = ({ include, exclude, options } = {}) => ({
    module: {
      rules: [
        {
          // Capture eot, ttf, woff, and woff2
          test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          include,
          exclude,
          use: {
            loader: "file-loader",
            options,
          },
        },
      ],
    },
  });