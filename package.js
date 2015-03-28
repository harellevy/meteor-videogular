Package.describe({
  summary: "Angular video player directive",
  version: "0.0.5",
  name: 'harel:videogular',
  git: "https://github.com/harellevy/videogular-meteor.git"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('urigo:angular@0.7.2', 'client');

  // Load angular-file-upload lib.
  api.addFiles('lib/bower_components/videogular/videogular.min.js', 'client');

  // Support for old versions of angular-meteor
  api.addFiles('init.js', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');

  api.use('harel:videogular');

  api.addFiles('harel:videogular-meteor-tests.js', 'client');
});
