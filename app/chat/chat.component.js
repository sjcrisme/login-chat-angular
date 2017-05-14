 'use strict';

 angular.module('chat',[]).
    component('chat',{
        template:`<div> <h1>Chat page</h1> 
            <div class="col-md-12">
                 <div class="col-md-2">
                    <ul class="user-list">
                        <li ><span class="glyphicon glyphicon-user" style="color:blue;"></span> {{model.nickname}}</li>
                        <li ng-repeat="user in model.users"><span class="glyphicon glyphicon-user"></span> {{user.author}}</li>
                    </ul>
                 </div>
                 <div class="col-md-10">
                    <div class="panel panel-default">
                        <ul>
                            <li ng-repeat="message in model.messages">
                            <span style="color:gray;">{{message.author}} : {{message.time}}</span>  {{message.content}} 
                            </li>
                        </ul>
                        <br>
                        <br>
                        <div class="row">
                            <div class="col-md-10">
                                <input type="text" class="form-control" ng-model="model.message" placeholder="...." />
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-info" ng-click="model.sendmessage()">send</button>
                            </div>
                         <div>
                    </div>
                 </div>
            </div>
            </div>`,
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