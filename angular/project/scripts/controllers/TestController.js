function TestController($scope, $http, $location) {
  console.log("载入TestController");
  $scope.peopleDatas = [{ name: "阿米娜", id: 1, falg: "没有" },
  { name: "海录", id: 2, falg: "没有"  },
  { name: "马玉梅", id: 3, falg: "没有"  },
  { name: "马勇士", id: 4, falg: "没有"  },
  { name: "马素珍", id: 5, falg: "没有"  }];
  $scope.totalP = $scope.peopleDatas.length;
  $scope.nowP = 0;
  // console.log($scope.peopleDatas[0].name);
  // $scope.gridOptions = {
  //   data: 'myData',
  //   columnDefs: [{ field: 'name', displayName: '姓名',width: 200 }, 
  //                { field: 'age', displayName: '年龄', width: 100}]
  // };
  // $scope.data = "xxx";
  $scope.record = function(id) {
    console.log("getdata....:"+id);
    id = id - 1;
    $scope.nowP = $scope.nowP + 1;
    $scope.peopleDatas[id].falg = 'ok';
    // $http.get('http://localhost:8081/')
    //   .success(function (res) {
    //       console.log(res);
    //       $scope.data = res;
    //   })
    //   .error(function (res) {
    //     alert("您好，您访问的内容出错");
    //   });
  }


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