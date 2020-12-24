import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {customTransformers} from './src/customTransformers';

const config: Configuration = {
  mode: 'development',
  entry: './src/entry.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => customTransformers
      },
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

export default config;
