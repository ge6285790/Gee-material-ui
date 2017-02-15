import path from 'path';
import webpack from 'webpack';
// import autoprefixer from 'autoprefixer';
// import flexibility from 'postcss-flexibility';

const config = {
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    `${path.resolve(__dirname, 'src')}/index`,
  ],
  output: {
    path: '/asset/js/bundle/',
    filename: 'bundle.js',
    publicPath: '/asset/js/bundle/',
    chunkFilename: 'chunk.[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: './src/',
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
      {
        test: /\.css|\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?outputStyle=compressed',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer'),
                ];
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=8192&name=../public/img/[name].[ext]',
      },
      {
        test: /\.js?$/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'], // stage-0 use for class static needsApi
        include: [path.resolve(__dirname, 'src')],
        // include: path.join(__dirname, 'common'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ],
};

export default config;
