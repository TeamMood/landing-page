teammood.controller('AccountCtrl', function($scope, $window, $http) {
    'use strict';

    var on_success = function(lang) {
        $window.location = '/' + lang + '/thankyou';
    };

    $scope.button_disabled = false;
    $scope.show_error = false;

    $scope.create_account = function(email, lang) {
        $scope.button_disabled = true;
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

            if (response.data.id && ga) {
                ga('set', 'userId', response.data.id);
            }
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
