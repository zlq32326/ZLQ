angular.module('turingApp', []).controller('turingCtrl', function($scope, $http){
  $scope.set_data = '';
  return $scope.click_get = function(){
    var set_data;
    set_data = 'http://www.tuling123.com/openapi/api?key=c1763425317747402f92f7d71d82bbb5&info=' + $scope.set_data;
    console.log(set_data);
    $http.get(set_data).success(function(data){
      $scope.get_data = data.text;
      return console.log($scope.get_data);
    });
  };
});