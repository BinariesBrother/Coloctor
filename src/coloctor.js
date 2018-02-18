let os = require('os');
let express = require('express');
let http = require('http');
let socketIo = require('socket.io');
let logger = require('node-yolog');
let program = require('commander');

let coloctorConfig = require('../coloctor.json');

/**
 * Enable/disable logger with commander options
 */
program
  .version('0.0.1')
  .option('-d, --debug', 'Enable debug log')
  .option('-e, --error', 'Enable error log')
  .option('-o, --todo', 'Enable todo log')
  .option('-i, --info', 'Enable info log')
  .option('-w, --warning', 'Enable warning log')
  .option('-t, --trace', 'Enable trace log')
  .option('-a, --all', 'Enable all log')
  .option('-p, --port <n>', 'Use specific port. Default to 3000', parseInt, 3000)
  .option('-h, --hostname <n>', 'Use specific hostname. Default to 0.0.0.0', '0.0.0.0')
  .parse(process.argv);

// Merge program with default logger configuration.
let loggerConfig = coloctorConfig.logger;
for (let config in loggerConfig) {
  let enabled = !coloctorConfig.disable_logger && (program.all || program[config] || loggerConfig[config]);
  logger.set(enabled, config);
}

logger.info('Start Coloctor server');

let app = express();
let server = http.createServer(app);
let io = socketIo.listen(server);

let ifaces = os.networkInterfaces();

server.listen(program.port, program.hostname, null, function () {
  let address = server.address();
  let path = address.address;
  logger.info('Application runs: http://' + path + ':' + program.port);
  logger.info('Check available ip to test with device on the same network:');
  Object.keys(ifaces).forEach(function (ifname) {
    let alias = 0;
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }
      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        logger.info('\t-', ifname + ':' + alias, iface.address);
      }
      else {
        // this interface has only one ipv4 adress
        logger.info('\t-', ifname, iface.address);
      }
      ++alias;
    });
  });
});
