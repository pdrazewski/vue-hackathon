module.exports = function(grunt) {

	var path = require('path');

	// measures the time each task takes
	require('time-grunt')(grunt);

	// load grunt config
	require('load-grunt-config')(grunt, {
		// path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), '../_src/tasks/grunt'),
		overridePath: path.join(process.cwd(), 'grunt'),
		jitGrunt: {
			staticMappings: {
				cmq: 'grunt-combine-media-queries',
				sprite: 'grunt-spritesmith',
				stylizeSCSS: 'grunt-scss-stylize',
				postcss: 'grunt-postcss',
				css_parse: 'grunt-css-parse',
				css_image: 'grunt-css-image',
				scss_to_json: 'grunt-scss-to-json',
				reload: 'grunt-reload',
				markdownpdf: 'grunt-markdown-pdf'
			}
		}
	});
	grunt.event.on('watch', function(action, filepath, target) {
		var path,
			option,
			currentFile,
			setup;

		path = require('path');
		if (path.basename(filepath) != 'style.scss') {
			var siteDirectory = path.dirname(filepath);

			//stylizeSCSS config change
			option = 'stylizeSCSS.target.files';
			currentFile = [{
				expand: true,
				src: filepath
			}]
			grunt.config(option, currentFile);
			//indent config change
			option = 'fixindent.main';
			setup = {
				src: [
					filepath
				],
				dest: filepath,
				options: {
					style: 'tab',
					size: 1
				}
			};
			grunt.config(option, setup);

		} else {

			//stylizeSCSS config change
			option = 'stylizeSCSS.target.files';
			currentFile = [{
				expand: true,
				src: filepath
			}]
			grunt.config(option, currentFile);
			//indent config change
			option = 'fixindent.main';
			setup = {
				src: [
					filepath
				],
				dest: filepath,
				options: {
					style: 'tab',
					size: 1
				}
			};
			grunt.config(option, setup);
		}
	});
};
