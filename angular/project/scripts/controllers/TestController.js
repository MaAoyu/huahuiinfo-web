function TestController($scope, $http, $location) {
  console.log("载入TestController");
  $scope.peopleDatas = [];
  $scope.noPerson = '';
  $scope.totalP = 0;
  $scope.nowP = 0;
  $scope.rail = 0;
  getAllRecord();
  // getRecordNum();

  function getAllRecord() {
    $http.get('http://106.14.37.7:8081/test')
      .success(function (res) {
          $scope.peopleDatas = res;
          $scope.totalP = res.length;
          $scope.noPerson = '';
          //console.log(res.length);
          for(var i =0;i<res.length;i++){
            //console.log('xx');
            if(res[i].flag == '没有'){
              $scope.noPerson = $scope.noPerson+res[i].name+'&';
            }
          }
          $http.get('http://106.14.37.7:8081/getRecordNum')
            .success(function (res) {
              $scope.nowP = res[0]["count(*)"];
              $scope.rail = Math.round($scope.nowP*100/$scope.totalP);
          })
            .error(function (res) {
          });
      })
      .error(function (res) {
        alert("网络出错");
      });
  }
  // function getRecordNum() {
    
  // }
  //cookie
  function setCookie(name, value, timeout) {
    var d = new Date();
    d.setDate(d.getDate() + timeout);
    document.cookie = name + '=' + value + ';expires=' + d;
  }
  function getCookie(name) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('='); //['abc','cba']  
      if (arr2[0] == name) {
        return arr2[1];
      }
    }
    return '';
  }

  $scope.record = function(name) {
    //console.log("cookie....:"+document.cookie);
    var recordFlag = getCookie("isRecordD6");
    if (recordFlag) {
      alert('今日已签到过，请不要乱点哦！');
    }
    else{
      setCookie("isRecordD6", 1, 0.5);
      $http.get('http://106.14.37.7:8081/record?name='+name)
      .success(function (res) {
          //console.log(res);
          getAllRecord();
          // getRecordNum();
          // $scope.rail = Math.round($scope.nowP*100/$scope.totalP);
      })
      .error(function (res) {
        alert("网络出错");
      });
    }
  }
  


  // console.log($scope.peopleDatas[0].name);
  // $scope.gridOptions = {
  //   data: 'myData',
  //   columnDefs: [{ field: 'name', displayName: '姓名',width: 200 }, 
  //                { field: 'age', displayName: '年龄', width: 100}]
  // };
  // $scope.data = "xxx";
  


  // $scope.userName = "";
  // $scope.passWord = "";
  // $scope.login = function() {
  //   console.log("login....");
  //   if($scope.userName == 'admin' && $scope.passWord == '123')
  //     $location.path("/index");
  //   else
  //     alert('帐号密码错误');
  // }
}