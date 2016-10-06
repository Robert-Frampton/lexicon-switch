'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'switch.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'lexicon-switch',
		soyDeps: ['node_modules/*lexicon*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
