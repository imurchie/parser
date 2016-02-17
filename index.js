var ArgumentParser = require('argparse').ArgumentParser;


var parser = new ArgumentParser({
    version: 1,
    addHelp: true,
    description: 'Somesuch and whatnot.'
  });

var testing = function (str) {
  console.log("'" + str + "'");
  return JSON.parse(str);
};

parser.addArgument(['--de'], {
    dest: 'defaultCapabilities',
    defaultValue: {},
    type: testing,
    required: false,
    example: '{"app": "myapp.app", "deviceName": "iPhone Simulator"}',
    help: 'Set the default desired capabilities, which will be set on each ' +
          'session unless overridden by received capabilities.'
  })

parser.parseArgs();
