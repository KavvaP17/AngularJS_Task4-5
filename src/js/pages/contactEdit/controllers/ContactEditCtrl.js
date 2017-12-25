angular.module('contactListModule')
    .controller('ContactEditCtrl', ['$state', '$scope', '$stateParams', 'ContactListService', 'ValidationService', function($state, $scope, $stateParams, ContactListService, ValidationService){
        $scope.id = $stateParams.id;
        $scope.editItem = Object.assign({}, ContactListService.getForKey($scope.id));
        $scope.editContact = function(key, newUser, newPhone, newEmail){
            if (ContactListService.editContact(key, newUser, newPhone, newEmail)){
                $state.go('home');
            }
        };
        $scope.deleteContact = function(key){
            ContactListService.removeContact(key);
            $state.go('home');
        }
        $scope.goHome = function(){
            $state.go('home');
        };
        $scope.groupNameIsValid = function(input, name){
            if ($scope.id===name){
                return false;
            }
            return ValidationService.groupNameIsValid(input, name);
        }
        $scope.formValid = function(name, phone,email){
            if (ValidationService.formIsValid(name, phone,email)){
                return $scope.nameIsValid($scope.id, name);
            } else {
                return true;
            }
        }
        $scope.inputIsValid = ValidationService.inputIsValid;

        $scope.nameIsValid = function(id, name){
            if (id === name){
                return false;
            } else {
                return ValidationService.nameIsValid(name);
            }
        }
    }]);
