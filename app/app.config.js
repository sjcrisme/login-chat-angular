'use strict';

var app = angular.module('chatApp');
  app.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login', {
          template: '<login></login>'
        }).
        when('/', {
          template: '<chat></chat>'
        }).
        otherwise('/login');
    }
  ]).
  run(function($location, LoginService){

    if(!LoginService.isAuthenticated()) {
         $location.path('/login');
    }
});


app.factory('LoginService', function(Thisuser) {
    var admin = 'admin';
    var pass = 'admin';
    var nick = 'guest';

    var isAuthenticated = false;

    return {
      login : function(username, password, loginick) {
        isAuthenticated = username === admin && password === pass;

        if(isAuthenticated){
          Thisuser.nickname = loginick || nick;;
          Thisuser.test();
        }
          
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
});