angular.module 'turingApp' []
.controller 'turingCtrl', ($scope, $http)->
  $scope.set_data = ''

  $scope.click_get = !->
    set_data = 'http://www.tuling123.com/openapi/api?key=c1763425317747402f92f7d71d82bbb5&info=' +$scope.set_data
    console.log set_data
    $http
    .get set_data
    .success (data)->
      $scope.get_data = data.text
      console.log $scope.get_data
