module.exports = function(grunt) {
	grunt.initConfig({
		//pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style.css' : 'scss/*.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}