angular.module('contactListModule')
    .directive('search', ()=>{
        return {
            restrict : "E",
            scope : {
                val : "="
            },
            template : "<input type='text' class='form-control' placeholder='Search' ng-model='val'/>"
        }
    })
