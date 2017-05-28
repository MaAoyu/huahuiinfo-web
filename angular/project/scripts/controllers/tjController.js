function tjController($scope, $http, $location) {
  console.log("载入tjController");
  $scope.peopleDatas = [];
  $scope.noPerson = '';
  $scope.totalP = 0;
  $scope.nowP = 0;
  getAllRecord();
  getRecordNum();

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
      })
      .error(function (res) {
        alert("网络出错");
      });
  }
  function getRecordNum() {
    $http.get('http://106.14.37.7:8081/getRecordNum2')
      .success(function (res) {
          $scope.nowP = res[0]["count(*)"];
      })
      .error(function (res) {
        alert("网络出错");
      });
  }
  $scope.record = function(name) {
    //console.log("getdata....:"+name);
    $http.get('http://106.14.37.7:8081/record2?name='+name)
      .success(function (res) {
          //console.log(res);
          getAllRecord();
          getRecordNum();
      })
      .error(function (res) {
        alert("网络出错");
      });
  }
}