module.exports = function(grunt) {

  grunt.config.merge({
    clean: {
      generatedCss: ["_generate/css/*.css"],
    },
    less: {
      development: {
        options: {
          paths: ["public/stylesheets"]
        },
        files: {
          "_generate/css/result.css": "public/stylesheets/style.less"
        }
      }
    },
  });

  grunt.registerTask('generateCss', 'default grunt task', function() {
    grunt.task.run('clean:generatedCss');
    grunt.task.run('less:development');
  });
};
