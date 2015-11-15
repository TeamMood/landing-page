teammood.controller('AccountCtrl', function($scope, $window, $http, $httpParamSerializer) {
    'use strict';

    var on_success = function(lang) {
        $window.location = '/' + lang + '/thankyou';
    };

    $scope.create_account = function(email, lang) {

        var language = navigator.language;
        var user_agent = navigator.userAgent;

        $http({
          method: 'POST',
          url: 'https://docs.google.com/forms/d/1vChMxuVCzNCLqPTusirUwrnAdRzBCFvVcmqqUxa5zuA/formResponse',
          data: $httpParamSerializer({
              'entry.1': email,
              'entry.535205848': language,
              'entry.192311241': user_agent
          }),
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function successCallback(response) {
            on_success(lang);
        }, function errorCallback(error) {
            on_success(lang)
        });

    };
});
