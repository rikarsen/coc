module.exports = {
    less: {
        files: 'src/css/less/**/*.less',
        tasks: ['recess']
    },
    html: {
        files: ['src/**/*.html', 'src/css/**/*.css'],
        options: {
            spawn: false,
            livereload: 35730
        }
    },
    scripts: {
        files: ['src/js/**/*.js'],
        options: {
            spawn: false,
            livereload: 35730
        }
    }
};
