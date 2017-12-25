angular.module('contactListModule')
    .controller('HomeCtrl', ['$scope','ContactListService', 'HelpersService',( $scope, ContactListService, HelpersService) => {
        $scope.filterValue = '';
        $scope.contactsList = ContactListService.getAll();
        $scope.objToArray = HelpersService.objToArray;
    }]);
