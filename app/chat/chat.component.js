 'use strict';

 angular.module('chat',[]).
    component('chat',{
        templateUrl:'chat/chat.template.html',
        controllerAs:'model',
        controller:function($location,LoginService,Thisuser,$timeout){
            var model = this;
            model.nickname = Thisuser.nickname;
            model.messages= [];
            
            model.users = [
                { 'author':"tester", 'time':"" ,'content':"hello man"},
                { 'author':"guest12", 'time':"" ,'content':"hello"},
                { 'author':"old man", 'time':"" ,'content':"hi"},
                { 'author':"flower", 'time':"" ,'content':"hihihi:)"},
                { 'author':"topGun", 'time':"" ,'content':"stop spam !"},
                { 'author':"nick", 'time':""  ,'content':"Banana!!!"},
                { 'author':"Putlin", 'time':""  ,'content':"Comrats"},
                { 'author':"ChakNoriss", 'time':""  ,'content':"Hiyyya!"},
            ];

            model.$onInit = function(){
                if(!LoginService.isAuthenticated()) {
                     $location.path('/login');
                }
                var now = new Date();
                model.messages.push({'author':model.nickname, 'time':now.toString() ,'content': 'entered to chat' });

                $timeout(function(){
                    model.typemessage();        
                },5000);
            };

            model.sendmessage = function(){
                var now = new Date();
                model.messages.push({'author':model.nickname, 'time':now.toString() ,'content': model.message }); 
                model.message = '';
                var snd = new Audio("/chat/icq-message.wav"); // buffers automatically when created
                snd.play();
            };

            model.typemessage = function(){
                var now = new Date();
                var x = Math.floor(Math.random()*model.users.length);
                model.messages.push({
                    'author':model.users[x].author,
                    'time':now.toString(),
                    'content':model.users[x].content
                });
                var snd = new Audio("/chat/ContactSignsIn.wav"); // buffers automatically when created
                snd.play();
                
                $timeout(function(){
                    model.typemessage();        
                },5000);
            }
   
        }
    }).
    service('Thisuser',function(){
        this.nickname = '',
        this.test = function(){
            var now = new Date();
            console.log("... " + this.nickname + " :" + now.toString());
        }
    });