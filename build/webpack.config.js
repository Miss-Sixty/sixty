const chalk = require('chalk');
const address = require('address');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { get } = require('lodash');
const { getPort } = require('portfinder');

const getDevConfig = require('./webpack.dev');

const config = getDevConfig;
getPort(
    {
        port: config.devServer.port,
    },
    (err, port) => {
        if (err) return

        logServerInfo(port);
        runDevServer(port, config);
    }
);



function logServerInfo(port) {
    const local = `http://localhost:${port}/`;
    const network = `http://${address.ip()}:${port}/`;

    console.log('\n  Site running at:\n');
    console.log(`  ${chalk.bold('Local')}:    ${chalk.hex('#07c160')(local)} `);
    console.log(`  ${chalk.bold('Network')}:  ${chalk.hex('#07c160')(network)}`);
}

function runDevServer(port, config) {
    const server = new WebpackDevServer(webpack(config), config.devServer);

    // this is a hack to disable wds status log
    server.showStatus = function () { };

    const host = get(config.devServer, 'host', 'localhost');
    server.listen(port, host, err => {
        if (err) {
            console.log(err);
        }
    });
}