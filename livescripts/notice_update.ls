angular.module 'noticeApp' []
.controller 'noticeCtrl', ($scope, $http)->
  $scope.get_server_data = { }

  $scope.types =
    * name: '公告一'
      value: '0'
    * name: '公告二'
      value: '1'
    * name: '公告三'
      value: '2'
    * name: '公告四'
      value: '3'
  $scope.mytype = $scope.types[0]

  $scope.click_update = !->
    update_notice_text =
      jsonrpc: '2.0'
      method: 'noticeUpdate'
      params:
        notice_text: $scope.get_server_data[$scope.mytype.value]
        type: $scope.mytype.value
      id: '23333'
    $http
    .post 'http://192.168.199.239:3001/notices', update_notice_text
    .success (data)->
      console.log data.result.success
      $scope.get_server_data[$scope.mytype.value].notice_text = $scope.get_server_data[$scope.mytype.value].notice_text


  $scope.click_get = !->
    $http
    .get 'http://192.168.199.239:3001/notices'
    .success (data)->
      $scope.get_server_data = data.result.notices
      console.log $scope.get_server_data

  $scope.click_get!

  $scope.$watch 'mytype' , (nv, ov)->
    if nv isnt ov
      console.log $scope.get_server_data[$scope.mytype.value].notice_text

  /*console.log OK*/
