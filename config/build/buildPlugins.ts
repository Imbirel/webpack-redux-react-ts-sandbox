import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import type { Configuration } from 'webpack';
import type { BuildOptions } from './types/types';

export function buildPlugins({ mode, paths }: BuildOptions): Configuration['plugins'] {
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ForkTsCheckerWebpackPlugin(),
  ];

  if(isDev) {
    plugins.push(
      new ReactRefreshWebpackPlugin(),
    );
  }

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
