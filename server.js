'use strict'

const webpack = require('webpack');

const app = require('./api')
const port = require('./api/config/config').port
const webpackConfig = require('./webpack.config.dev.js');
const compiler = webpack(webpackConfig);

// Webpack server options
const serverOptions = {
    quiet: false,
    noInfo: false,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
}

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, () => {
    console.info('----\n==> ✅   Up and running @ %s', port)
})