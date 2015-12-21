parse = require 'co-body'
router = (require 'koa-router')!
family_lib = require 'family_lib'

# utils
json_rpc_generator = new family_lib.JsonRpcGenerator
getter = new family_lib.Getter


router
.post '/tanks_server',->*
  body = yield parse.json @
  @body = yield active_calender body

exports.router = router
