
import controller from './login.controller';
import template from './login.html!text';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        content: {
          template: template,
          controller: controller
        }
      }
    });
}
