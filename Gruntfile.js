const watch = require("grunt-contrib-watch");

module.exports = function (grunt){
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'btvn/style.css': 'btvn/style.scss',
                }
            }
        },
        watch: {
            sass: {
                files: 'btvn/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    // Load compiler sass
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Resister task to run by grunt
    grunt.registerTask('default', ['watch', 'sass']);
}