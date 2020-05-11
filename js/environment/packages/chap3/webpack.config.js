module: {
  rules: [
    {
      test: /\.(ts|tsx)$/, use: [
        {
          loader: "ts-loader"
        }
      ]
    }
  ]
},