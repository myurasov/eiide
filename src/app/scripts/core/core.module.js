import authService from './services/auth.service';

export default angular.module('app.core', [])
  .service('authService', authService);
