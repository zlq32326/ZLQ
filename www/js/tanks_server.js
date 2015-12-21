var parse, router, family_lib, json_rpc_generator, getter;
parse = require('co-body');
router = require('koa-router')();
family_lib = require('family_lib');
json_rpc_generator = new family_lib.JsonRpcGenerator;
getter = new family_lib.Getter;
router.post('/tanks_server', function*(){
  var body;
  body = (yield parse.json(this));
  return this.body = (yield active_calender(body));
});
exports.router = router;