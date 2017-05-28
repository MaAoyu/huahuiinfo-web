function TestController($scope, $http, $location) {
  console.log("载入TestController");
  // $scope.peopleDatas = [{ name: "阿米娜", id: 1, falg: "没有" },
  // { name: "海录", id: 2, falg: "没有"  },
  // { name: "马玉梅", id: 3, falg: "没有"  },
  // { name: "马勇士", id: 4, falg: "没有"  },
  // { name: "马素珍", id: 5, falg: "没有"  }];
  $scope.peopleDatas = [];
  $scope.noPerson = '';
  $scope.totalP = 0;
  $scope.nowP = 0;
  getAllRecord();
  getRecordNum();

  function getAllRecord() {
    $http.get('http://106.14.37.7:8081/test')
      .success(function (res) {
          $scope.peopleDatas = res;
          $scope.totalP = res.length;
          $scope.noPerson = '';
          console.log(res.length);
          for(var i =0;i<res.length;i++){
            console.log('xx');
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
    $http.get('http://106.14.37.7:8081/getRecordNum')
      .success(function (res) {
          $scope.nowP = res[0]["count(*)"];
      })
      .error(function (res) {
        alert("网络出错");
      });
  }
  $scope.record = function(name) {
    console.log("getdata....:"+name);
    $http.get('http://106.14.37.7:8081/record?name='+name)
      .success(function (res) {
          //console.log(res);
          getAllRecord();
          getRecordNum();
      })
      .error(function (res) {
        alert("网络出错");
      });
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