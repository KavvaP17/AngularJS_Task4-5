angular.module('contactListModule')
    .directive('contactColor', ()=>{
        return {
            restrict : "AE",
            link : function(scope, elem, attrs){
                switch ((attrs.name[0]).toUpperCase()) {
                    case "A":
                        elem.addClass("red");
                        break;
                    case "B":
                        elem.addClass("blue");
                        break;
                    default:
                        break;
                }
            }
        }
    })
