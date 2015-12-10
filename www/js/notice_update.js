angular.module('noticeApp', []).controller('noticeCtrl', function($scope, $http){
  $scope.get_server_data = {};
  $scope.types = [
    {
      name: '公告一',
      value: '0'
    }, {
      name: '公告二',
      value: '1'
    }, {
      name: '公告三',
      value: '2'
    }, {
      name: '公告四',
      value: '3'
    }
  ];
  $scope.mytype = $scope.types[0];
  $scope.click_update = function(){
    var update_notice_text;
    update_notice_text = {
      jsonrpc: '2.0',
      method: 'noticeUpdate',
      params: {
        notice_text: $scope.get_server_data[$scope.mytype.value],
        type: $scope.mytype.value
      },
      id: '23333'
    };
    $http.post('http://192.168.199.239:3001/notices', update_notice_text).success(function(data){
      console.log(data.result.success);
      return $scope.get_server_data[$scope.mytype.value].notice_text = $scope.get_server_data[$scope.mytype.value].notice_text;
    });
  };
  $scope.click_get = function(){
    $http.get('http://192.168.199.239:3001/notices').success(function(data){
      $scope.get_server_data = data.result.notices;
      return console.log($scope.get_server_data);
    });
  };
  $scope.click_get();
  return $scope.$watch('mytype', function(nv, ov){
    if (nv !== ov) {
      return console.log($scope.get_server_data[$scope.mytype.value].notice_text);
    }
  });
});