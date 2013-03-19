module.exports = function(grunt) {
  'use strict';

  var EMPTY = "empty:";
  var PATH_REQUIREJS = {
    "jquery": 'vendor/jquery/1.8.3/jquery.min',
    "jquery-ui": 'vendor/jquery-ui/1.10.0/jquery-ui',
    "jquery.cookie": "vendor/jquery.cookie/1.3.1/jquery.cookie",
    "modernizr": "vendor/modernizr/2.6.1/modernizr.min",
    "fancybox": "vendor/fancybox/2.1.4/jquery.fancybox",
    "text": "vendor/text/2.0.5+/text",
    "widget": "widget/"
  };
  //
  // Grunt configuration:
  //
  // https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
  //
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    clean: {
      build: ["dist/"]
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: ["app/*.html", "app/favicon.ico", "app/favicon.png"],
          dest: 'dist/',
          filter: 'isFile'
        }, {
          expand: true,
          flatten: true,
          src: ['app/styles/font/elektralightpro/elektralightpro.otf'],
          dest: 'dist/styles/font/elektralightpro/',
          filter: 'isFile'
        }, {
          expand: true,
          flatten: true,
          src: ['app/scripts/vendor/require/2.1.5/*.js'],
          dest: 'dist/scripts/vendor/require/2.1.5/',
          filter: 'isFile'
        }, {
          expand: true,
          flatten: true,
          src: ['app/scripts/vendor/fancybox/2.1.4/*'],
          dest: 'dist/scripts/vendor/fancybox/2.1.4/',
          filter: 'isFile'
        }]
      }
    },
    "string-replace": {
      dist: {
        files: {
          "dist/index.html": "app/index.html",
          "dist/index2.html": "app/index2.html"
        },
        options: {
          replacements: [{
            pattern: /\/less/ig,
            replacement: ""
          }, {
            pattern: /.less/ig,
            replacement: ".min.css"
          }, {
            pattern: "<script src=\"scripts/vendor/1.3.3.min.js\" type=\"text/javascript\"></script>",
            replacement: ""
          }, {
            pattern: "scripts/page/index",
            replacement: "scripts/page/index.min"
          }, {
            pattern: "scripts/page/index.min2",
            replacement: "scripts/page/index2.min"
          }, {
            pattern: "require.js",
            replacement: "require.min.js"
          }]
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["app/styles/page", "app/styles/bootstrap", "app/styles/bootstrap"]
        },
        files: {
          "dist/styles/page/index.css": "app/styles/page/index.less",
          "dist/styles/page/index2.css": "app/styles/page/index2.less",
          "dist/styles/bootstrap/bootstrap.css": "app/styles/bootstrap/bootstrap.less",
          "dist/styles/bootstrap/responsive.css": "app/styles/bootstrap/responsive.less"
        }
      },
      production: {
        options: {
          paths: ["app/styles/page", "app/styles/bootstrap", "app/styles/bootstrap"],
          yuicompress: true
        },
        files: {
          "dist/styles/page/index.min.css": "app/styles/page/index.less",
          "dist/styles/page/index2.min.css": "app/styles/page/index2.less",
          "dist/styles/bootstrap/bootstrap.min.css": "app/styles/bootstrap/bootstrap.less",
          "dist/styles/bootstrap/responsive.min.css": "app/styles/bootstrap/responsive.less"
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: {
          'dist/styles/images/': 'app/styles/images/**/*',
          'dist/styles/slide/': 'app/styles/slide/**/*'
        }
      }
    },
    requirejs: {
      "index": {
        options: {
          baseUrl: "./app/scripts",
          include: ["page/index"],
          exclude: [],
          out: "dist/scripts/page/index.min.js",
          paths: PATH_REQUIREJS,
          map: {}
        }
      },
      "index-debug": {
        options: {
          baseUrl: "./app/scripts",
          include: ["page/index"],
          exclude: [],
          out: "dist/scripts/page/index.js",
          paths: PATH_REQUIREJS,
          optimize: 'none',
          map: {}
        }
      },
      "index2": {
        options: {
          baseUrl: "./app/scripts",
          include: ["page/index2"],
          exclude: [],
          out: "dist/scripts/page/index2.min.js",
          paths: PATH_REQUIREJS,
          map: {}
        }
      },
      "index2-debug": {
        options: {
          baseUrl: "./app/scripts",
          include: ["page/index2"],
          exclude: [],
          out: "dist/scripts/page/index2.js",
          paths: PATH_REQUIREJS,
          optimize: 'none',
          map: {}
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-string-replace');

  // Default task.
  grunt.registerTask('default', [
    'clean:build',
    'copy:dist',
    'string-replace:dist',
    'less:development',
    'less:production',
    'requirejs:index',
    'requirejs:index2',
    'requirejs:index-debug',
    'requirejs:index2-debug',
    'imagemin']);

  // Alias the `test` task to run the `mocha` task instead
  //grunt.registerTask('test', 'server:phantom mocha');

};