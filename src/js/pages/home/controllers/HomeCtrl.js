angular.module('contactListModule')
    .controller('HomeCtrl', ['$scope','ContactListService', 'HelpersService',( $scope, ContactListService, HelpersService) => {
        $scope.filterValue = '';
        $scope.$watch(()=>ContactListService.getAll(),function(newVal,oldVal){
            $scope.contactsList = newVal;
        },true);
        $scope.objToArray = HelpersService.objToArray;
    }]);
