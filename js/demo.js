teammood.controller('DemoCtrl', function($scope, $http) {
    'use strict';

    $scope.message = {
        fr: '<p><strong class="orange">Saisissez votre email et validez avez la touche "Entrée".</strong></p>' +
            '<p>Vous recevrez un exemple d\'email vous demandant comment se passe votre journée.</p>' +
            '<p>Et ensuite, vous accéderez à une démo avec des exemples de données.</p>',
        en: '<p><strong class="orange">Try it by filling out your email.</strong></p>' +
            '<p>You\'ll receive a sample email to know how you are doing.</p>' +
            '<p>And then, you\'ll access a demo filled with sample data.</p>'
    };

    $scope.on_email_entered = function(email, lang) {

        $scope.message = {
            fr: '<p><strong><i class="fa fa-refresh fa-spin"></i></strong></p>',
            en: '<p><strong><i class="fa fa-refresh fa-spin"></i></strong></p>'
        };

        $http({
          method: 'POST',
          url: 'https://app.teammood.com/api/demo',
          data: {
              email: email,
              lang: lang
          },
          headers: {
              'Content-Type': 'application/json'
          }
        }).then(function successCallback(response) {

            var user = response.data;

            console.log(user);
            // TODO add to mixpanel with ID

            if (lang == 'fr') {
                $scope.message.fr = '<p><strong class="orange"><i class="fa fa-check"></i> Vérifier maintenant votre boîte email.</strong></p>' +
                                    '<p>Vous allez recevoir un message vous demander comment s\'est passée votre journée.</p>';
            } else {
                $scope.message.en = '<p><strong class="orange"><i class="fa fa-check"></i> Please check your inbox.</strong></p>' +
                                    '<p>You\'ll reveive a message asking how was your day.</p>';
            }

        }, function errorCallback(error) {

            if (error.status == 409) { // 409 => Already exists
                if (lang == 'fr') {
                    $scope.message.fr = '<p><strong><i class="fa fa-exclamation-triangle"></i> Oups, vous avez déjà un compte sur TeamMood.</strong></p>' +
                                        '<p>Du coup, pas besoin de faire la démo, vous connaissez déjà le principe ;-)</p>';
                } else {
                    $scope.message.en = '<p><strong><i class="fa fa-exclamation-triangle"></i> Oops, you already have an account on TeamMood.</strong></p>' +
                                        '<p>So, no need to demo, you already know how things work ;-)</p>';
                }
            } else {
                if (lang == 'fr') {
                    $scope.message.fr = '<p><strong><i class="fa fa-exclamation-triangle"></i> Oups, un petit problème.</strong></p>' +
                                        '<p>Peut être avez-vous mal saisi votre email ?</p>';
                } else {
                    $scope.message.en = '<p><strong><i class="fa fa-exclamation-triangle"></i> Oops, something went wrong.</strong></p>' +
                                        '<p>Maybe you made a mistake with your email?</p>';
                }

            }

        });

    };


});
