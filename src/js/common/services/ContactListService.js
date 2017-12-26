angular.module('contactListModule')
    .factory('ContactListService',['$window','$http','$q',( $window, $http, $q)=>{

        let contactsList={};

        if ($window.localStorage['contactsList']){
            contactsList = JSON.parse($window.localStorage.getItem('contactsList'));
        } else {
            $http({
                method: 'GET',
                url: '/data/data.json'
            }).then((res)=>{
                contactsList = res.data;
            }).catch((err)=>{
                contactsList = {
                    'Alex' : {name: 'Alex', phone: '+375291111111', email: 'Alex@gmail.com'},
                    'Bob' : {name: 'Bob', phone: '+375292222222', email: 'Bob@gmail.com'},
                    'Birdus' : {name: 'Birdus', phone: '+375293333333', email: 'Birdus@gmail.com'},
                    'Aleksandr' : {name: 'Aleksandr', phone: '+375294444444', email: 'Aleksandr@gmail.com'},
                    'Arnold' : {name: 'Arnold', phone: '+375295555555', email: 'Arnold@gmail.com'},
                    'Sasha' : {name: 'Sasha', phone: '+375296666666', email: 'Sasha@gmail.com'},
                    'Mark' : {name: 'Mark', phone: '+375297777777', email: 'Mark@gmail.com'},
                    'Boris' : {name: 'Boris', phone: '+375298888888', email: 'Boris@gmail.com'},
                    'Archi' : {name: 'Archi', phone: '+375299999999', email: 'Archi@gmail.com'}
                }
            })
        }


        return{
            addContact : function(newUser, newPhone, newEmail){
                if(newUser && newPhone && newEmail){
                    contactsList[newUser] = {name : newUser, phone : newPhone, email: newEmail};
                    $window.localStorage.setItem('contactsList', JSON.stringify(contactsList));
                    return true;
                }
                return false;
            },

            removeContact : function(key){
                delete contactsList[key];
                $window.localStorage.setItem('contactsList', JSON.stringify(contactsList));
            },

            editContact : function (key, newUser, newPhone, newEmail){
                if (newUser && newPhone && newEmail){
                    delete contactsList[key];
                    contactsList[newUser] = {name : newUser, phone : newPhone, email: newEmail};
                    $window.localStorage.setItem('contactsList', JSON.stringify(contactsList));
                    return true;
                }
                return false;
            },

            getAll : function(){
                return contactsList;
            },

            getForKey : function(key){
                return contactsList[key];
            }

        }
    }]);
