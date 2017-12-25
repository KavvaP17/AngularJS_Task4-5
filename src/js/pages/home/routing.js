angular.module('contactListModule')
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('home',{
                url: '/',
                templateUrl : 'templates/home.html',
                controller : 'HomeCtrl'
            })
    }])
