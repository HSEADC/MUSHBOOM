const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(glb|gltf)$/i,
        loader: 'file-loader',
        options: {
          publicPath: './',
          name: '[name].[ext]',
          esModule: false
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'dev_build/share/')
        },
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'docs/share/')
        }
      ]
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/memos.html',
      filename: './memos.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes.html',
      filename: './recipes.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki.html',
      filename: './gribwiki.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html'
    }),

    // Article Pages
    new HtmlWebpackPlugin({
      template: './src/articles/timberland.html',
      filename: './articles/timberland.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/tihaya_ohota.html',
      filename: './articles/tihaya_ohota.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/pink_oyster.html',
      filename: './articles/pink_oyster.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/gribi_v_iskusstve.html',
      filename: './articles/gribi_v_iskusstve.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/ekipirovka.html',
      filename: './articles/ekipirovka.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/dozhdeviki.html',
      filename: './articles/dozhdeviki.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/deti_i_pohodi.html',
      filename: './articles/deti_i_pohodi.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/angels_wings.html',
      filename: './articles/angels_wings.html'
    }),

    // Memo Pages
    new HtmlWebpackPlugin({
      template: './src/memos/puti_gribnika.html',
      filename: './memos/puti_gribnika.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/memos/odezhda_gribnika.html',
      filename: './memos/odezhda_gribnika.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/memos/gribnoi_strah.html',
      filename: './memos/gribnoi_strah.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/memos/toxic_mush.html',
      filename: './memos/toxic_mush.html'
    }),
    // Recipe Pages
    new HtmlWebpackPlugin({
      template: './src/recipes/fettuchini.html',
      filename: './recipes/fettuchini.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes/kitaiskie_brokkoli.html',
      filename: './recipes/kitaiskie_brokkoli.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes/zharenie_shampinioni.html',
      filename: './recipes/zharenie_shampinioni.html'
    }),

    // Styleguide
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}