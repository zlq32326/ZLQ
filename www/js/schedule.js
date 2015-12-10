angular.module('scheduleApp', []).controller('scheduleCtrl', function($scope, $http){
  $scope.artists = [
    {
      name: 'EXO',
      value: '0'
    }, {
      name: 'BigBang',
      value: '1'
    }, {
      name: 'TFBOYS',
      value: '2'
    }, {
      name: '李易峰',
      value: '3'
    }, {
      name: '井柏然',
      value: '4'
    }, {
      name: '华晨宇',
      value: '5'
    }, {
      name: '陈晓',
      value: '6'
    }, {
      name: '汪苏泷',
      value: '7'
    }, {
      name: '徐良',
      value: '8'
    }
  ];
  $scope.artist_ID = $scope.artists[0];
  return console.log($scope.artist_ID);
});