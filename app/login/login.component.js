 'use strict';

 angular.module('login',[]).
    component('login',{
        templateUrl:'login/login.template.html',
        controllerAs:'model',
        controller:function($location,LoginService){
            var model = this;
            model.nickname = localStorage.getItem('nick')
            
            model.$onInit = function(){
                //console.log("hi ");
            };
            model.formSubmit = function(){
                if(LoginService.login(model.username, model.password, model.nickname)) {
                    model.error = '';
                    model.username = '';
                    model.password = '';
                    localStorage.setItem('nick', model.nickname);
                    $location.path('/');
                } else {
                    model.error = "Incorrect username/password !";
                }   
            };
        }
    });