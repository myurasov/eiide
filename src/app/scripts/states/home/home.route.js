
import controller from './home.controller';
import template from './home.html!text';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        content: {
          template: template,
          controller: controller
        }
      }
    });
}
