import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration } from 'webpack';
import type { BuildOptions } from './types/types';

export function buildPlugins({ mode, paths }: BuildOptions): Configuration['plugins'] {
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin({ template: paths.html })];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    );
  }

  return plugins;
}
