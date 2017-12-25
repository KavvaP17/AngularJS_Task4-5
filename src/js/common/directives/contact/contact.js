angular.module('contactListModule')
    .directive('contact', ()=>{
        return {
            restrict : "E",
            scope : {
                item : "=",
                deleteContact : "&"
            },
            templateUrl : 'templates/contactTemplate.html',
            controller : 'ContactCtrl'
        }
    })
