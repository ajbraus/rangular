angular
    .module('rangular', [
        'ngRoute',
        'templates'
    ])

    .config(["$httpProvider", function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'question-index.html',
                controller: 'QuestionIndexCtrl'
            })
            .when('/about-us', {
                templateUrl: 'about-us.html'
            })
            ;
            
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });