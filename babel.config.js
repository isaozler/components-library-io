module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"];
  const plugins = [
    "macros",
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./src/stories",
            "rootPathPrefix": "@stories/"
          }
        ]
      }
    ],
  ];

  return {
    presets,
    plugins,
    exclude: [
      ".d.ts",
    ]
  };
};
