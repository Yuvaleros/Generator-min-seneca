'use strict';

require('seneca')({timeout: 900000})
  .use('entity')
  .use('../modules/app.js')
  .listen({port: '<%= listenPort %>', host: '0.0.0.0', pin: 'role:<%= serviceName %>', timeout: 900000})
  .client({port: '<%= clientPort %>', host: 'localhost', timeout: 99999});
