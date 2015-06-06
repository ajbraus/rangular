angular
    .module('rangular', [
        'ngRoute',
        'ngResource',
        'templates',
        'rangular.controllers',
        'rangular.services'
    ])
    .config(["$httpProvider", function($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'question-index.html',
                controller: 'QuestionIndexCtrl'
            })
            
            .otherwise({
              redirectTo: '/'
            });
            
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);