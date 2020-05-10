module.exports = {
  presets: [
    [
        "@babel/preset-env",
        {
          useBuiltIns: "usage", // オプション。polifillの指定
          corejs: 3
        }
    ]
  ]
};