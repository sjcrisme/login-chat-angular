
angular.module('login.service',[]).
    factory('LoginService',function() {
        var admin = 'admin';
        var pass = 'admin';
        var nick = 'guest';

        var isAuthenticated = false;

        return {
            login : function(username, password, loginick) {
                isAuthenticated = username === admin && password === pass;

                if(isAuthenticated){
              //  Thisuser.nickname = loginick || nick;;
              //  Thisuser.test();
                }
                
                return isAuthenticated;
            },
            isAuthenticated : function() {
                return isAuthenticated;
            }
        };
});