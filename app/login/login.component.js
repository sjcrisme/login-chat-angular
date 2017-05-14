 'use strict';

 angular.module('login',[]).
    component('login',{
        template:`
<div class="row">
  <div class="col-md-12">
      <h3>Login Page</h3>

      <form ng-submit="model.formSubmit()" class="form">
        <div class="col-md-2">
          <div class="form-group">
            <input type="text" class="form-control" ng-model="model.username" placeholder="username" required=""/>
          </div> 

          <div class="form-group">
            <input type="password" class="form-control" ng-model="model.password" placeholder="password" required=""/>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" ng-model="model.nickname" placeholder="nickname" />
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-success">Login</button>
            <span class="text-danger">{{ model.error }}</span>
          </div>
        </div>
      </form>

  </div>
</div>`,
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