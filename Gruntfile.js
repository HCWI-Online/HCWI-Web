module.exports = function(grunt) {

	// Main Grunt Configuration.
	grunt.initConfig({
		// Variables.
		vars: {
			development: 'dev',   // Development Directory.
			distribution: 'dist', // Distribution Directory.
			css: 'css',           // CSS Directory.
			sass: 'scss',         // SASS Directory.
			js: 'js',             // JS Directory.
			img: 'images'         // Images Directory.
		},

		// Copy Config.
		copy: {
			task: {
				expand: true,
				cwd: '<%= vars.development %>',
				src: [
					'**',
					'!<%= vars.sass %>/**',
					'!<%= vars.img %>/**',
				],
				dest: '<%= vars.distribution %>',
			},
		},

		// Clean Config.
		clean: {
			dist: { src: '<%= vars.distribution %>', },
			css: { src: '<%= vars.development %>/<%= vars.css %>/', },
			// modules: { src: 'node_modules', },
			scache: { src: '<%= vars.development %>/<%= vars.sass %>/.sass-cache', },
		},

		// SASS Config.
		sass: {
			task: {
				expand: true,
				cwd: '<%= vars.development %>/<%= vars.sass %>/',
				src: '*.scss',
				dest: '<%= vars.development %>/<%= vars.css %>/',
				ext: '.css',
				options: {
					cacheLocation: '<%= vars.development %>/<%= vars.sass %>/.sass-cache',
					precision: '10',
					sourcemap: 'none',
					style: 'compact',
					trace: true,
				},
			},
		},

		// Autoprefixer Config.
		autoprefixer: {
			task: {
				expand: true,
				cwd: '<%= vars.development %>',
				src: '**/*.css',
				dest: '<%= vars.development %>',
			},
		},

		// CSSMin Config.
		cssmin: {
			task: {
				expand: true,
				cwd: '<%= vars.development %>/<%= vars.css %>/',
				src: ['*.css', '!*min.css'],
				dest: '<%= vars.distribution %>/<%= vars.css %>/',
			},
		},

		// Uglify Config.
		uglify: {
			task: {
				expand: true,
				cwd: '<%= vars.development %>/<%= vars.js %>/',
				src: ['*.js', '!*min.js'],
				dest: '<%= vars.distribution %>/<%= vars.js %>/',
			},
		},

		// Imagemin Config.
		imagemin: {
			task: {
				expand: true,
				cwd: '<%= vars.development %>/<%= vars.img %>/',
				src: ['*.png', '*.jpg', '*.gif', '*.svg'],
				dest: '<%= vars.distribution %>/<%= vars.img %>/',
			},
		},

		// Watch Config.
		watch: {
			config: {
				files: 'Gruntfile.js',
				options: { relaod: true, },
			},
			sass: {
				files: '<%= vars.development %>/**/*.scss',
				options: { spawn: false, },
				tasks: ['sass', 'autoprefixer'],
			},
		},
	});

	// Load Tasks.
	require('load-grunt-tasks')(grunt);

	// Build Distribution Site.
	grunt.registerTask('build', [
		'clean:dist',
		'copy',
		'sass',
		'autoprefixer',
		'cssmin',
		'uglify',
		'imagemin',
	]);
}