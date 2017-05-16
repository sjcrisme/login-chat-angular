
angular.module('login.service',['chat.mesage']).
    factory('LoginService',function($http,Thisuser) {
        
        var admin,pass,nick;
        var isAuthenticated = false;

        $http.get('login/login.json')
                .then(function(res){
                        admin = res.data.userlogin;
                        pass = res.data.password;
                        nick = res.data.nick;                 
                    });

        return {
            login : function(username, password, loginick) {
                isAuthenticated = username === admin && password === pass;

                if(isAuthenticated){
                    Thisuser.nickname = loginick || nick;
                }
                
                return isAuthenticated;
            },
            isAuthenticated : function() {
                return isAuthenticated;
            }
        };
});