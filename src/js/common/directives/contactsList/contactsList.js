angular.module('contactListModule')
    .directive('contactsList', ()=>{
        return {
            restrict : "E",
            scope : {
                contacts : "=",
                filter : "="
            },
            templateUrl : 'templates/contactsListTemplate.html',
            controller : 'ContactsListCtrl'
        }
    })
