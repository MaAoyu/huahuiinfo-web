var app = angular.module('auto-biz-user', ['ngRoute']);

app.config(function ($locationProvider,$httpProvider,$routeProvider) {
    console.log("载入angular config，跳转到index");
    $routeProvider
      .when('/', {
        templateUrl: '/angular/project/html/views/test.html',
      })
      .when('/tj', {
        templateUrl: '/angular/project/html/views/tj.html',
      })
      .when('/xcl', {
        templateUrl: '/angular/project/html/views/xcl.html',
      })
      .when('/pay', {
        templateUrl: '/angular/project/html/views/pay.html',
      });
      $locationProvider.html5Mode(true);
  });
