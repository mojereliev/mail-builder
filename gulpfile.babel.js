process.env.NODE_PATH = __dirname + '/mailTemplates';
require('module').Module._initPaths();
require('require-dir')('tasks', {recurse: true});
