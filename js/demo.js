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

        console.log(email, lang);

        if (lang == 'fr') {
            $scope.message.fr = '<p><strong class="orange"><i class="fa fa-check"></i> Vérifier maintenant votre boîte email.</strong></p>' +
                                '<p>Vous allez recevoir un message vous demander comment s\'est passée votre journée.</p>';
        } else {
            $scope.message.en = '<p><strong class="orange"><i class="fa fa-check"></i> Please check your inbox.</strong></p>' +
                                '<p>You\'ll reveive a message asking how was your day.</p>';
        }

    };


});
