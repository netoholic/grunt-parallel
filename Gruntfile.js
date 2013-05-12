module.exports = function(grunt) {
  
  grunt.registerTask('fast', function() {
    grunt.log.write('Fast task finished.');
  });
  
  grunt.registerTask('block', function() {
    var ms = 1000;
    var start = +(new Date());
    while (new Date() - start < ms);
    grunt.log.write('Blocking finished.');
  });
  
  grunt.registerTask('fail', function() {
    var ms = 500;
    var start = +(new Date());
    while (new Date() - start < ms);
    grunt.log.error('Failure to be awesome!');
    throw new Error('Broken!');
  });

  grunt.registerTask('logStuff', function() {
    grunt.log.writeln('hey, I am logging live.');
  });

  // Project configuration.
  grunt.initConfig({
    parallel: {
      mix: {
        tasks: [{
          grunt: true,
          args: ['fast']
        }, {
          grunt: true,
          args: ['block']
        }, {
          cmd: 'netstat',
          showLog: true
        },{
          grunt: true,
          args: ['fast']
       }]
      },
      shell: {
        tasks: [{
          cmd: 'whoami'
        }]
      },
      grunt: {
        grunt: true,
        tasks: ['fast', 'block', 'fast']
      },
      withLog: {
        grunt: true,
        tasks: [
          {
            task: 'fast',
            showLog: false
          },
          {
            task: 'block',
            showLog: false
          },
          {
            task: 'watch',
            showLog: true
          }
        ]
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js'],
        tasks: ['logStuff']
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['parallel']);

};
