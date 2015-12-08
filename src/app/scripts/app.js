/**
 * Main application file
 */

import 'angular';
import 'angular-ui-router';

import config from './config';

// states
import coreModule from './core/core.module';
import homeModule from './states/home/home.module';
import loginModule from './states/login/login.module';

// define app module
let app = angular.module('app', [
  'ui.router',
  coreModule.name,
  homeModule.name,
  loginModule.name
]);

// configure app
app.config(config);

// bootstrap app
angular.element(document).ready(function() {
  angular.bootstrap(document, [app.name]);
});
