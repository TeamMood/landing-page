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


// bootstrap 5 popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
        placement: 'top',
        container: 'body',
        trigger: 'hover focus',
        template:  	'<div class="popover text" role="tooltip">' +
                        '<div class="popover-arrow"></div>' +
                        '<h3 class="popover-header"></h3>' +
                        '<div class="popover-body pt-2"></div>' +
                    '</div>'
    })
})