angular.module('contactListModule')
    .config(['$urlRouterProvider', '$locationProvider',function($urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/');
        $locationProvider.hashPrefix('');
        // $locationProvider.html5Mode({ enabled: true, requireBase: false });
    }])
