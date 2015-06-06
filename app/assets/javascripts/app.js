angular
    .module('seed-rails-angular', [
        'ngRoute',
        'ngResource',
        'templates',
        'seed-rails-angular.controllers',
        'seed-rails-angular.services'
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