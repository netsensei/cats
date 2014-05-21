module.exports = function (grunt) {
  "use strict";

  // Config...
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./js/**/*.js', '!./js/cats.gen.js'],
        tasks: ['jshint', 'concat:cats']
      }
    },
    concat: {
      cats: {
        src: ['./js/cats/**/*.js', '!./js/cats/cats.gen.js'],
        dest: './js/cats.gen.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/**/*.js',
        '!js/**/*.gen.js',
        '!js/**/vendor/*.js'
      ]
    },
  });
  // Load tasks...
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Default task.
  grunt.registerTask('default', 'watch');
};
