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
  ]);