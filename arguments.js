var parsed = require('minimist')(process.argv.slice(2));
var args = {};
var log = console.log;

function printUsageAndQuit() {
  log("Usage: dummy-json [template-file] [options]");
  log();
  log("Reads template-file and renders it to stdout. Please use shell");
  log("redirection to write it to a file.");
  log();
  log("template-file: The JSON template file written in Handlebars");
  log("    to be used as source.");
  log();
  log("Options:");
  log("    -h, --help: Shows this message.");
  log();

  process.exit(0);
}

if('h' in parsed || 'help' in parsed) {
  printUsageAndQuit();
}

for(name in parsed) {
  value = parsed[name];

  switch(name) {
    case '_':
      if(value.length !== 1) {
        console.error("template-file requires exactly one file path.");
        reportBadArgumentsAndQuit();
      }

	  args.templatePath = value[0];
      break;

    case 'h':
    case 'help':
      printUsageAndQuit();
      break;
  }
}

module.exports = args;
