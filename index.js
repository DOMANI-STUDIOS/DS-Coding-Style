(() => {
  'use strict';

  const express = require('express');
  const app = express();
  const server = require('http').createServer(app);
  const dbg = require('debug')('StaticServer');

  app.use(express.static('public'));
  app.use(express.static('bower_components'));

  server.listen(process.env.HTTP_PORT, () => {
    dbg('[LISTENING]',process.env.HTTP_PORT);
  });

}());
