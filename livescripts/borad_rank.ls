angular.module 'boradRankApp' []
.controller 'customersCtrl', ($scope, $http, $location)->
  request_data = (lottery_id, deduplication, fpage)->
    post_data =
      method: 'getBoardRank'
      params:
        lottery_id: lottery_id
        deduplication: deduplication
        page: fpage
      id: 'get_board_rand_id'
    # 开始刷新遮罩
    $http
    .post 'http://192.168.199.239:3001/board_rank', post_data
    .success (response)->
      # 关闭刷新遮罩
      if response.result is undefined
        response.result = { board_rank: [] }

      table = ($('#keywords').dynatable {
        dataset:
          records: response.result.board_rank
      }).data 'dynatable'

      table.settings.dataset.originalRecords = response.result.board_rank
      table.process!

      console.log response.result.board_rank

  vm = $scope
  vm.dedup_bool = $location.search!.deduplication == 'true'
  vm.lottery_id = $location.search!.lottery_id
  vm.fpage = $location.search!.fpage
  $location.url $location.path!

  request_data vm.lottery_id, vm.dedup_bool, vm.fpage

  vm.$watch 'dedup_bool', (nv, ov)->
    request_data vm.lottery_id, nv, vm.fpage

  vm.$watch 'fpage', (nv, ov)->
    if nv isnt ov
      request_data vm.lottery_id, vm.dedup_bool, nv

.config ($locationProvider)->
  $locationProvider.html5Mode {
    enabled: true,
    requireBase: false
  }
