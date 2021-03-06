function mdhController($scope, $http) {
  console.log("载入mdhController");
  $scope.peopleDatas = [];
  $scope.noPerson = '';
  $scope.totalP = 0;
  $scope.nowP = 0;
  $scope.rail = 0;
  $scope.newName = '';
  getAllRecord();

  function getAllRecord() {
    $http.get('http://106.14.37.7:8081/test3')
      .success(function (res) {
          $scope.peopleDatas = res;
          $scope.totalP = res.length;
          $scope.noPerson = '';
          for(var i =0;i<res.length;i++){
            if(res[i].flag == '没有'){
              $scope.noPerson = $scope.noPerson+res[i].name+'&';
            }
          }
          $http.get('http://106.14.37.7:8081/getRecordNum3')
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
    var recordFlag = getCookie("isRecordm");
    if (recordFlag) {
      alert('今日已签到过，请不要乱点哦！');
    }
    else{
      setCookie("isRecordm", 1, 0.5);
       $http.get('http://106.14.37.7:8081/record3?name='+name)
      .success(function (res) {
          getAllRecord();
      })
      .error(function (res) {
        alert("网络出错");
      });
    }
  }
  $scope.add = function() {
     $http.get('http://106.14.37.7:8081/addRecord3?name='+$scope.newName)
      .success(function (res) {
          alert('添加成功！');
          $scope.newName = '';
          getAllRecord();
      })
      .error(function (res) {
        alert("网络出错");
      });
  }

}