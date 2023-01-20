// var http = require('http'),
//     httpProxy = require('http-proxy');
import http from 'http'
import httpProxy from 'http'
const proxy = httpProxy.createProxyServer({});

const server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:3001'});
});

server.listen(3000);
