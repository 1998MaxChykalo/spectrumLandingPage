module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                loaders: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            gifsicle: {
                                // interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 6,
                            },
                            pngquant: {
                                quality: '50-55',
                                speed: 4
                            },
                            mozjpeg: {
                                // progressive: true,
                                quality: 60
                            },
                            // Specifying webp here will create a WEBP version of your JPG/PNG images
                            webp: {
                                quality: 65,
                                enabled: false
                            },
                            options: {
                                name: "images/[name].[ext]",
                            },
                        }
                    }
                ]
            }
        ]
    }
})