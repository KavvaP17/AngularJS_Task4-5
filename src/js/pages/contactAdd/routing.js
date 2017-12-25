angular.module('contactListModule')
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('addContact',{
                url: '/add',
                templateUrl : 'templates/addContact.html',
                controller : 'ContactAddCtrl'
            })
    }])
