var test2 = '未选择'; 
var app = angular.module('auto-biz-user', ['ngRoute','textAngular','bw.paging','ngFileUpload']);

app.value('countrysideName', '未选择');
app.config(function ($locationProvider,$httpProvider,$routeProvider) {
    console.log("载入angular config，跳转到index");
    $routeProvider
      .when('/', {
        templateUrl: '/page/project/html/views/treeIndex.html',
        //controller: 'indexController'
      })
      .when('/basicTable', {
        templateUrl: '/page/project/html/views/basicTable.html',
        //controller: 'basicTableController'
      });
      $locationProvider.html5Mode(true);
  });
