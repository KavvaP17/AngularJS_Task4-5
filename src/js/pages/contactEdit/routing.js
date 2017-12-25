angular.module('contactListModule')
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('editContact',{
                url: '/edit/:id',
                templateUrl : 'templates/editContact.html',
                controller: 'ContactEditCtrl',
                onEnter: ['$stateParams', 'ContactListService', '$state', function($stateParams, ContactListService, $state){
                    if (!((ContactListService.getAll())[$stateParams.id])){
                        $state.go('home')
                    }
                }]
            })
    }])
