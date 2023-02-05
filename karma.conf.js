// // Karma configuration file, see link for more information
// // https://karma-runner.github.io/0.13/config/configuration-file.html

// module.exports = function (config) {
//     config.set({
//       basePath: '',
//       frameworks: ['jasmine', '@angular-devkit/build-angular'],
//       plugins: [
//         require('karma-jasmine'),
//         require('karma-chrome-launcher'),
//         require('karma-junit-reporter'),
//         require('@angular-devkit/build-angular/plugins/karma')
//       ],
//     //   files: [
//     //     { pattern: './src/test.ts', watched: false }
//     //   ],
//     //   reporters: config.angularCli && config.angularCli.codeCoverage
//     //             ? ['progress', 'karma-remap-istanbul']
//     //             : ['progress'],
//       port: 9876,
//       colors: true,
//       logLevel: config.LOG_INFO,
//       autoWatch: true,
//       browsers: ['Chrome'],
//       singleRun: false,
//       junitReporter: {
//         outputDir: 'test', // results will be saved as $outputDir/$browserName.xml
//         outputFile: 'junit.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
//         //suite: '', // suite will become the package name attribute in xml testsuite element
//         useBrowserName: false, // add browser name to report and classes names
//         //nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
//         //classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
//         //properties: {}, // key value pair of properties to add to the <properties> section of the report
//         //xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
//       }
//     });
//   };
  

module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-junit-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      reporters: ['progress', 'junit'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      restartOnFileChange: true,
      junitReporter: {
        outputDir: './test/',
        outputFile: 'junit.xml',
        useBrowserName: false,
        
      }
    });
  };