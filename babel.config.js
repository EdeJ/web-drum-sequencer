const presets = [
  [
    "@babel/env",
    {
      targets: "> 0.25%, not dead",
      useBuiltIns: "usage",
    },
  ],
  "@babel/preset-react",
];

module.exports = { presets };