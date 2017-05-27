var app = angular.module('auto-biz-user', ['ngRoute']);

app.config(function ($locationProvider,$httpProvider,$routeProvider) {
    console.log("载入angular config，跳转到index");
    $routeProvider
      .when('/', {
        templateUrl: '/angular/project/html/views/test.html',
      });
      $locationProvider.html5Mode(true);
  });
