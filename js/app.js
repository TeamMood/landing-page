'use strict';

var teammood = angular
  .module('teammood', [
    'ngCookies',
    'ngSanitize'
  ]);

teammood.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});

teammood.run(function($rootScope) {

    
});

angular.element(document).ready(function() {
  angular.bootstrap(document, ['teammood']);
});
