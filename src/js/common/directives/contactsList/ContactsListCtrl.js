angular.module('contactListModule')
    .controller('ContactsListCtrl',['$scope', 'HelpersService', 'ContactListService', ($scope, HelpersService, ContactListService)=>{
        $scope.processedItems = HelpersService.objToArray($scope.contacts);
        $scope.removeContact = ContactListService.removeContact;
        $scope.$watch('contacts',function(newVal,oldVal){
            $scope.processedItems = HelpersService.objToArray(newVal);
        },true)
    }])
