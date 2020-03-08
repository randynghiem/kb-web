var path = require('path');
var fs = require('fs');;
const { override, babelInclude, fixBabelImports } = require('customize-cra');

module.exports = override(
    babelInclude([
        path.resolve('src'),
        fs.realpathSync('../../node_modules/@randynghiem/react-ui'),
    ]),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    })
);