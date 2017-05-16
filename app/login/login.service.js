
angular.module('login.service',['chat.mesage']).
    factory('LoginService',function(Thisuser) {
        var admin = 'admin';
        var pass = 'admin';
        var nick = 'guest';

        var isAuthenticated = false;

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