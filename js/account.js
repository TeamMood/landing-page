teammood.controller('AccountCtrl', function($scope, $window, $http, $location) {
    'use strict';

    var on_success = function(lang) {
        $window.location = '/' + lang + '/thankyou';
    };

    $scope.button_disabled = false;
    $scope.show_error = false;

    var query_params = $window.location.search;

    $scope.create_account = function(email, lang) {
        $scope.button_disabled = true;
        var language = navigator.language;
        var user_agent = navigator.userAgent;

        $http({
          method: 'POST',
          url: 'http://localhost:9000/api/presignup',//'https://app.teammood.com/api/presignup',
          data: {
              email: email,
              lang: lang
          },
          headers: {
              'Content-Type': 'application/json'
          }
        }).then(function successCallback(response) {
            on_success(lang);
        }, function errorCallback(error) {
            if (error.status == 409) {
                $scope.error_message = error.data;
            }
            $scope.button_disabled = false;
            $scope.show_error = true;

        });

    };
});
