const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const webpack = require('webpack')
const path = require('path')
const paths = [
  '/',
  // Тесты
  '/tests.html/',
  '/tests/gribie_nasledie.html/',
  '/tests/gribnaya_bezopasnost.html/',
  '/tests/gribnoy_delicates.html/',
  '/tests/kalendar.html/',
  '/tests/lechebnie_gribie.html/',
  '/tests/sedobnie_ili_yadovitie.html/',
  // Рецепты
  '/recipes.html/',
  '/recipes/fettuchini.html/',
  '/recipes/golubci.html/',
  '/recipes/gribnoi_otvar.html/',
  '/recipes/humus.html/',
  '/recipes/kitaiskie_brokkoli.html/',
  '/recipes/lazania.html/',
  '/recipes/ovoshnoe_ragu.html/',
  '/recipes/palenta.html/',
  '/recipes/skumbria.html/',
  '/recipes/zharenie_shampinioni.html/',
  '/recipes/zhulien.html/',
  // Памятки
  '/memos.html/',
  '/memos/gribnoi_strah.html/',
  '/memos/mokriy_sled.html/',
  '/memos/navigacia_ohoti.html/',
  '/memos/odezhda_gribnika.html/',
  '/memos/puti_gribnika.html/',
  '/memos/toxic_mush.html/',
  '/memos/tropa_spasenia.html/',
  // Грибвики
  '/gribwiki.html/',
  '/gribwiki/beliy_grib.html/',
  '/gribwiki/blednaya_poganka.html/',
  '/gribwiki/gruzd.html/',
  '/gribwiki/galerina_okaymlennaya.html/',
  '/gribwiki/lozhnaya_lisichka.html/',
  '/gribwiki/lozhniy_borovik.html/',
  '/gribwiki/lozhniy_openok.html/',
  '/gribwiki/lozhniy_podberezovik.html/',
  '/gribwiki/maslenok.html/',
  '/gribwiki/muhomor.html/',
  '/gribwiki/openok.html',
  '/gribwiki/podberezovik.html/',
  '/gribwiki/podosinovik.html/',
  '/gribwiki/rizhik.html/',
  '/gribwiki/shampinion.html/',
  '/gribwiki/smorchok.html/',
  '/gribwiki/svinushka.html/',
  '/gribwiki/volnushka.html/',
  '/gribwiki/zolotie_lisichki.html/',
  '/gribwiki/lozhniy_podosinovik.html/',
  // Статьи
  '/articles.html/',
  '/articles/angels_wings.html/',
  '/articles/deti_i_pohodi.html/',
  '/articles/dozhdeviki.html/',
  '/articles/ekipirovka.html/',
  '/articles/gribi_v_iskusstve.html/',
  '/articles/pink_oyster.html/',
  '/articles/tihaya_ohota.html/',
  '/articles/timberland.html/'
]
module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/index.jsx',
    searchBar: './src/searchbar.jsx',
    searchVanilla: './src/search.js',
    search: './src/search.jsx'
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
        test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i,
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
    new SitemapPlugin({ base: 'https://hseadc.github.io/MUSHBOOM/', paths}),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'dev_build/share/')
        },
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'docs/share/')
        },
        {
          from: path.resolve(__dirname, 'src/memo_download/'),
          to: path.resolve(__dirname, 'dev_build/memo_download/')
        },
        {
          from: path.resolve(__dirname, 'src/memo_download/'),
          to: path.resolve(__dirname, 'docs/memo_download/')
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
      filename: './index.html',
      
    }),
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      
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
    new HtmlWebpackPlugin({
      template: './src/landing.html',
      filename: './landing.html'
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
    new HtmlWebpackPlugin({
      template: './src/memos/tropa_spasenia.html',
      filename: './memos/tropa_spasenia.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/memos/navigacia_ohoti.html',
      filename: './memos/navigacia_ohoti.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/memos/mokriy_sled.html',
      filename: './memos/mokriy_sled.html'
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
    new HtmlWebpackPlugin({
      template: './src/recipes/zhulien.html',
      filename: './recipes/zhulien.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes/skumbria.html',
      filename: './recipes/skumbria.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes/humus.html',
      filename: './recipes/humus.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes/gribnoi_otvar.html',
      filename: './recipes/gribnoi_otvar.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes/palenta.html',
      filename: './recipes/palenta.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes/golubci.html',
      filename: './recipes/golubci.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes/ovoshnoe_ragu.html',
      filename: './recipes/ovoshnoe_ragu.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/recipes/lazania.html',
      filename: './recipes/lazania.html'
    }),

    //Gribwiki Pages
    new HtmlWebpackPlugin({
      template: './src/gribwiki/zolotie_lisichki.html',
      filename: './gribwiki/zolotie_lisichki.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/volnushka.html',
      filename: './gribwiki/volnushka.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/svinushka.html',
      filename: './gribwiki/svinushka.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/smorchok.html',
      filename: './gribwiki/smorchok.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/shampinion.html',
      filename: './gribwiki/shampinion.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/rizhik.html',
      filename: './gribwiki/rizhik.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/podosinovik.html',
      filename: './gribwiki/podosinovik.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/podberezovik.html',
      filename: './gribwiki/podberezovik.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/openok.html',
      filename: './gribwiki/openok.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/muhomor.html',
      filename: './gribwiki/muhomor.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/maslenok.html',
      filename: './gribwiki/maslenok.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/lozhniy_podosinovik.html',
      filename: './gribwiki/lozhniy_podosinovik.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/lozhniy_podberezovik.html',
      filename: './gribwiki/lozhniy_podberezovik.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/lozhniy_openok.html',
      filename: './gribwiki/lozhniy_openok.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/lozhniy_borovik.html',
      filename: './gribwiki/lozhniy_borovik.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/lozhnaya_lisichka.html',
      filename: './gribwiki/lozhnaya_lisichka.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/gruzd.html',
      filename: './gribwiki/gruzd.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/galerina_okaymlennaya.html',
      filename: './gribwiki/galerina_okaymlennaya.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/blednaya_poganka.html',
      filename: './gribwiki/blednaya_poganka.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gribwiki/beliy_grib.html',
      filename: './gribwiki/beliy_grib.html'
    }),

    // Test Pages
    new HtmlWebpackPlugin({
      template: './src/tests/kalendar.html',
      filename: './tests/kalendar.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/sedobnie_ili_yadovitie.html',
      filename: './tests/sedobnie_ili_yadovitie.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/gribnaya_bezopasnost.html',
      filename: './tests/gribnaya_bezopasnost.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/gribie_nasledie.html',
      filename: './tests/gribie_nasledie.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/gribnoy_delicates.html',
      filename: './tests/gribnoy_delicates.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/lechebnie_gribie.html',
      filename: './tests/lechebnie_gribie.html'
    }),

    // Styleguide
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),
    
    // Errors
    new HtmlWebpackPlugin({
      template: './src/400.html',
      filename: './400.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/500.html',
      filename: './500.html'
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubar.html'),
        location: 'menubar',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}