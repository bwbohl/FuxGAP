module.exports = function(grunt) {

'use strict';

  // Load plugins. 
/*  grunt.loadNpmTasks('grunt-contrib-uglify');*/
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-concat');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    
    connect: {
      server: {
        options: {
          port: 8001
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['concat', 'uglify'], 
        options: {
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
/*  grunt.loadNpmTasks('grunt-contrib-uglify');*/

  // Default task(s).
/*  grunt.registerTask('default', ['uglify']);*/
  grunt.registerTask('run', ['connect', 'watch']);


};