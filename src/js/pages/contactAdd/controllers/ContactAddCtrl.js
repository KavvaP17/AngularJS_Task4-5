angular.module('contactListModule')
    .controller('ContactAddCtrl', ['$scope', '$state', 'ContactListService', 'ValidationService', function($scope, $state, ContactListService, ValidationService){
        $scope.addContact = function(newName, newPhone, newEmail){
            if (ContactListService.addContact(newName, newPhone, newEmail)){
                $scope.goHome();
            }
        };
        $scope.goHome = function(){
            $state.go('home');
        };

        $scope.nameIsValid = ValidationService.nameIsValid;
        $scope.inputIsValid = ValidationService.inputIsValid;
        $scope.groupNameIsValid = ValidationService.groupNameIsValid;
        $scope.addFormValid = function(name, phone, email){
            if (ValidationService.formIsValid(name, phone, email)){
                return $scope.nameIsValid(name);
            }
            return true;
        }
    }]);
