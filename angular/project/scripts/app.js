var app = angular.module('auto-biz-user', ['ngRoute','ui.grid',, 'ui.grid.resizeColumns', 'ui.grid.moveColumns','textAngular','bw.paging']);

app.config(function ($locationProvider,$httpProvider,$routeProvider) {
    console.log("载入angular config，跳转到index");
    $routeProvider
      .when('/', {
        templateUrl: '/angular/project/html/views/test.html',
      });
      $locationProvider.html5Mode(true);
  });
