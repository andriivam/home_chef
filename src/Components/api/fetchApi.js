// // var http = require('http'),
// //     httpProxy = require('http-proxy');
// import http from 'http'
// import httpProxy from 'http'
// const proxy = httpProxy.createProxyServer({});

// const server = http.createServer(function(req, res) {
//   proxy.web(req, res, { target: 'http://localhost:3001'});
// });

// server.listen(3000);
const fetchMenuFn = async () =>{
  try {
    const body = {}
    const response = fetch('http://localhost:3001/menu',{
      method: "POST",
      header:{"Content-Type":"application/json"},
      body: JSON.stringify(body)
    })
    console.log(response)
  } catch (err) {
    console.error(err.message)
  }
}