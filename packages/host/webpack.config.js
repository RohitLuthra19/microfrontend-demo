const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      library: { type: "var", name: "host" },
      remotes: {
        detail: "detail",
        home: "home",
        cart: "cart",
      },
      /* remotes: {
        cart: "cart@http://localhost:3003/remoteEntry.js",
        detail: "detail@http://localhost:3001/remoteEntry.js",
        home: "home@http://localhost:3002/remoteEntry.js",
      }, */
      exposes: {
        "./store": "./src/redux/store",
        "./Routes": "./src/Routes",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.dev.html",
    }),
  ],
};
