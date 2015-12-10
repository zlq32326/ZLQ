angular.module('boradRankApp', []).controller('customersCtrl', function($scope, $http, $location){
  var request_data, vm;
  request_data = function(lottery_id, deduplication, fpage){
    var post_data;
    post_data = {
      method: 'getBoardRank',
      params: {
        lottery_id: lottery_id,
        deduplication: deduplication,
        page: fpage
      },
      id: 'get_board_rand_id'
    };
    return $http.post('http://192.168.199.239:3001/board_rank', post_data).success(function(response){
      var table;
      if (response.result === undefined) {
        response.result = {
          board_rank: []
        };
      }
      table = $('#keywords').dynatable({
        dataset: {
          records: response.result.board_rank
        }
      }).data('dynatable');
      table.settings.dataset.originalRecords = response.result.board_rank;
      table.process();
      return console.log(response.result.board_rank);
    });
  };
  vm = $scope;
  vm.dedup_bool = $location.search().deduplication === 'true';
  vm.lottery_id = $location.search().lottery_id;
  vm.fpage = $location.search().fpage;
  $location.url($location.path());
  request_data(vm.lottery_id, vm.dedup_bool, vm.fpage);
  vm.$watch('dedup_bool', function(nv, ov){
    return request_data(vm.lottery_id, nv, vm.fpage);
  });
  return vm.$watch('fpage', function(nv, ov){
    if (nv !== ov) {
      return request_data(vm.lottery_id, vm.dedup_bool, nv);
    }
  });
}).config(function($locationProvider){
  return $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});