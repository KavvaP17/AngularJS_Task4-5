angular.module('contactListModule')
    .factory('ValidationService',['ContactListService',(ContactListService)=>{
        return {
            formIsValid : function(name, phone, email){
                return (name && phone && email)? true : false;
            },

            nameIsValid : function(name){
                if ((ContactListService.getAll())[name]){
                    return true;
                }
                return false;
            },

            inputIsValid : function(input){
                return (input.$invalid && !input.$pristine)
            },
            groupNameIsValid: function(input, name){
                return ((input.$invalid && !input.$pristine) || this.nameIsValid(name))
            }
        }
    }])
