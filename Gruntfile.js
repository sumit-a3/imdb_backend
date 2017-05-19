module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-shell');
    grunt.initConfig({
        shell: {
            options: { stderr: false },
            target: { command: 'git init && ./bin/git/init-hooks' }
        },
        jsdoc: {
            dist: {
                src: ['source/**/*.js'],
                options: { destination: 'doc' }
            }
        }
    });
    grunt.registerTask('build', ['shell']);
    grunt.registerTask('default', ['jsdoc']);
};