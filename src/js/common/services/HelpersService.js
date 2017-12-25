angular.module('contactListModule')
    .factory('HelpersService',[()=>{
        return {
            objToArray : function(obj){
                let arr = [];
                for(let key in obj){
                    if (obj.hasOwnProperty(key)){
                        arr.push(obj[key]);
                    }
                }
                return arr;
            }
        }
    }])
