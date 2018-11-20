teammood.controller('PricingCtrl', function($scope) {
    'use strict';

    // mapping country / currency from https://github.com/tadeegan/locale-currency/blob/master/map.js
    var currencies = [
        {
            label: 'EUR',
            value: '2€',
            countries: ["AD", "AT", "AX", "BE", "BL", "CY", "DE", "EE", "ES", "FI", "FR", "GF", "GP", "GR", "IE", "IT", "LU", "MC", "ME", "MF", "MQ", "MT", "NL", "PM", "PT", "RE", "SI", "SK", "SM", "TF", "VA", "YT"]
        },
        {
            label: 'GBP',
            value: '2£',
            countries: ['GB','GG','GS','IM','JE']
        },
        {
            label: 'USD',
            value: 'US$2',
            countries: ["AS", "BQ", "EC", "FM", "GU", "IO", "MH", "MP", "PR", "PW", "TC", "TL", "UM", "US", "VG", "VI"]
        },
        {
            label: 'AUD',
            value: 'AU$3',
            countries: ["AU", "CC", "CX", "HM", "KI", "NF", "NR", "TV"]
        },
        {
            label: 'CAD',
            value: 'CA$3',
            countries: ['CA']
        },
        {
            label: 'BRL',
            value: 'R$9',
            countries: ['BR']
        }
    ];

    $scope.update = function(currency) {
        $scope.price = currency.value;

        $scope.currencies = currencies.map(function(current) {
            if (currency.label === current.label) {
                return {
                    label: current.label,
                    value: current.value,
                    countries: current.countries,
                    active: true
                };
            } else {
                return {
                    label: current.label,
                    value: current.value,
                    countries: current.countries,
                    active: false
                };
            }
        })
    };

    $scope.currencies = currencies;

    var getCountryCode = function(localeString) {
        var components = localeString.split("_");
        if (components.length === 2) {
            return components.pop();
        }
        components = localeString.split("-");
        if (components.length === 2) {
            return components.pop();
        }
        return localeString;
    };

    if (navigator.language) {
        var countryCode = getCountryCode(navigator.language);

        var currency = _.find(currencies, function(currency) {
            return currency.countries.indexOf(countryCode) !== -1;
        });

        if (currency) {
            $scope.update(currency);
        } else {
            $scope.update(currencies[0]);
        }

    } else {
     $scope.update(currencies[0]);
    }

});
