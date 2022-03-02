module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11",
        },
        useBuiltIns: "usage",
        corejs: "3.6.5",
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
        regenerator: true,
      },
    ],
  ],
};
