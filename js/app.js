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


// bootstrap popover
/*$(function () {
    $('[data-toggle="popover"]').popover()
});*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
