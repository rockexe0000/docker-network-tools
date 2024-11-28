const express = require('express');
const shell = require('shelljs');
const util = require('util');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.text());

app.get('/', (req, res) => {
  console.log('Received a request.');
  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);

});

app.post('/exec', (req, res) => {
    const shellResp = shell.exec(req.body, {
        "timeout": 10*1000
    });
    res.send(shellResp.stdout);
});




app.get('/reqinfo', (req, res) => {
  const authorization = req.headers['authorization'];
  let token = null;
  if (authorization) token = authorization.split(' ')[1];
  
  const userAgent = req.headers['user-agent'];
  let ipTemp = '';
  const requestMethod = req.method;
  const requestURL = req.originalUrl;
  const requestTime = new Date();
  
  const reqParamsSize = `${Object.keys(req.params).length}` || 0;
  
  // const reqSize = `${req.headers['content-length']}` || 0;
  const reqSize = (req.headers['content-length'] === undefined) ? 0 : req.headers['content-length'];
  
  if (req.headers['x-forwarded-for']) {
    ipTemp = req.headers['x-forwarded-for'].split(',')[0];
  } else if (req.connection && req.connection.remoteAddress) {
    ipTemp = req.connection.remoteAddress;
  } else {
    ipTemp = req.ip;
  }

  const ip = ipTemp;


  const startObj = {
    msg: 'RequestStart',
    userIP: ip,
    userAgent: req.headers['user-agent'],
    xAmznTraceId: req.headers['x-amzn-trace-id'],
    reqProtocol: req.protocol,
    reqHostname: req.hostname,
    reqPath: req.path,
    reqQuery: req.query,
    reqParamsSize: `${reqParamsSize}B`,
    reqSize: `${reqSize}B`,
    reqMethod: req.method,
    reqURL: req.originalUrl,
    reqHttpVersion: req.httpVersion,
    token: token,
    reqTime: requestTime
  };
  //logger.info(startObj);

  res.send(startObj);
});










const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});