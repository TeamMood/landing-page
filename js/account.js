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
          url: 'https://app.teammood.com/api/presignup',
          data: {
              email: email,
              lang: lang
          },
          headers: {
              'Content-Type': 'application/json'
          }
        }).then(function successCallback(response) {
            console.log(response);
            on_success(lang);
        }, function errorCallback(error) {
            console.log(error);
            //on_success(lang)
        });

    };
});
