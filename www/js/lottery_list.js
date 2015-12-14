angular.module('lotteryApp', []).controller('lotteryCtrl', function($scope, $http){
  $scope.lottery_list = [];
  return $http.get('http://192.168.199.239:3001/lottery').success(function(response){
    var i$, ref$, len$, list;
    $scope.lottery_list = response.result.lottery_list;
    console.log($scope.lottery_list);
    for (i$ = 0, len$ = (ref$ = response.result.lottery_list).length; i$ < len$; ++i$) {
      list = ref$[i$];
      /*console.log list.lottery_name + '</a>'*/
      list.lottery_url = '<a href="http://127.0.0.1:8080/family_op_tools/borad_rank.html' + '?deduplication=true' + '&lottery_id=' + list.lottery_id + '&fpage=1' + '"target="_self">' + list.lottery_name + '</a>';
      console.log(list.lottery_url);
    }
    return $('#keywords').dynatable({
      dataset: {
        records: $scope.lottery_list
      }
    });
  });
});