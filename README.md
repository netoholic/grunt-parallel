# grunt-parallel

Run commands and tasks in parallel to speed up your build.

## Getting Started
Install this grunt plugin next to your project's [Gruntfile.js gruntfile][getting_started] with: `npm install grunt-parallel --save-dev`

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-parallel');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

## The Configuration

```javascript
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
          cmd: 'pwd'
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
      }
    }
  });
```

## Example

![Example](http://f.cl.ly/items/3e281L3X3h01293q3Z11/grunt-parallel.png)


### Settings

* <tt>tasks</tt> - An array of commands to run, each deferred to: http://gruntjs.com/api/grunt.util#grunt.util.spawn

```javascript
grunt.initConfig({
  parallel: {
    assets: {
      tasks: [{
        grunt: true,
        args: ['requirejs']
      }, {
        grunt: true,
        args: ['compass']
      },{
        cmd: 'some-custom-shell-script.sh'
      }]
    }
  }
});
```

#### Only Using Grunt

If you are only going to delegate to other grunt tasks you can simply put `grunt: true` in your tasks configuration and grunt-parallel will run them all using grunt.

```javascript
grunt.initConfig({
  parallel: {
    assets: {
      grunt: true,
      tasks: ['fast', 'block', 'fast']
    }
  }
});
```

One might target the task using `grunt parallel:assets`. This would run compass, requirejs, and a custom shell script at the same time, each logging to your console when they are done.

## License
Copyright (c) 2013 Merrick Christensen
Licensed under the MIT license.
