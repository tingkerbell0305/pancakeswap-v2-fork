  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=25000',
      },
    ],
  },
}
