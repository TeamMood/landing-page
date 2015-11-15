'use strict';

var teammood = angular
  .module('teammood', [
    'ngCookies',
    'ngSanitize'
  ]);

teammood.run(function($rootScope) {

    
});

angular.element(document).ready(function() {
  angular.bootstrap(document, ['teammood']);
});
