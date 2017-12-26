angular.module('contactListModule')
    .controller('ContactCtrl',['$scope', ($scope)=>{
        $scope.getEditUrl = function(name){
            return '#/edit/'+name;
        }
    }])
