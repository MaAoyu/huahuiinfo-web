function updateController($scope, $http) {
  $scope.xclPwd = '';

  function updateRecord() {
    if ($scope.xclPwd == 'xclnb') {
      $http.get('http://106.14.37.7:8081/updateRecord')
        .success(function (res) {
          $http.get('http://106.14.37.7:8081/updateRecord2')
            .success(function (res) {
              $http.get('http://106.14.37.7:8081/updateRecord3')
                .success(function (res) {
                  alert("成功！");
                })
                .error(function (res) {
                });
            })
            .error(function (res) {
            });
        })
        .error(function (res) {
          alert("网络出错");
        });
    }
    else {
      alert('口令错误！');
    }
  }

}