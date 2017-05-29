function tjController($scope, $http, $location) {
  console.log("载入tjController");
  $scope.peopleDatas = [];
  $scope.noPerson = '';
  $scope.totalP = 0;
  $scope.nowP = 0;
  $scope.rail = 0;
  getAllRecord();
  // getRecordNum();

  function getAllRecord() {
    $http.get('http://106.14.37.7:8081/test2')
      .success(function (res) {
          $scope.peopleDatas = res;
          $scope.totalP = res.length;
          $scope.noPerson = '';
          for(var i =0;i<res.length;i++){
            if(res[i].flag == '没有'){
              $scope.noPerson = $scope.noPerson+res[i].name+'&';
            }
          }
          $http.get('http://106.14.37.7:8081/getRecordNum2')
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
  //   $http.get('http://106.14.37.7:8081/getRecordNum2')
  //     .success(function (res) {
  //         $scope.nowP = res[0]["count(*)"];
  //     })
  //     .error(function (res) {
  //       alert("网络出错");
  //     });
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
    //console.log("getdata....:"+name);
    var recordFlag = getCookie("isRecordtj");
    if (recordFlag) {
      alert('今日已签到过，请不要乱点哦！');
    }
    else{
      setCookie("isRecordtj", 1, 0.5);
       $http.get('http://106.14.37.7:8081/record2?name='+name)
      .success(function (res) {
          //console.log(res);
          getAllRecord();
          // getRecordNum();
      })
      .error(function (res) {
        alert("网络出错");
      });
    }
  }
}