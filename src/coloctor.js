let logger = require('node-yolog');
let program = require('commander');

let app = require('core/app');

let coloctorConfig = require('core/coloctor.json');

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

app.init();
