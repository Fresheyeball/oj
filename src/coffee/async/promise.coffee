# # promise

OJ = require '../oj'

# ## ajaxPromise
# [OJ](oj.html).async.ajaxPromise converts an AJAX XmlHttpRequest into a Promise. 
# See also [Promise.resolve](https://github.com/petkaantonov/bluebird/blob/master/API.md).
ajaxPromise = (ajax) -> 
  promise = Promise.resolve ajax
  promise.abort = ajax.abort
  promise.readyState = ajax.readyState
  promise.then -> delete promise.abort
  promise.error -> delete promise.abort
  promise

# ## all
# [OJ](oj.html).async.all takes an array of functions and returns a promise representing the success of all methods or the failure of any method.
# See also [Promise.all](https://github.com/petkaantonov/bluebird/blob/master/API.md).
all = (initArray) ->
  reqs = initArray or []
  promise = Promise.all(reqs)
  promise.push = (item) ->
    reqs.push item
    return
  promise

# ## defer
# [OJ](oj.html).async.defer converts a function into a Promise to execute that function. 
# See also [Promise.method](https://github.com/petkaantonov/bluebird/blob/master/API.md).
defr = (func = OJ.noop) ->
  ret = Promise.method func
  ret
  
  
OJ.async.register 'defer', defr
OJ.async.register 'all', all
OJ.async.register 'ajaxPromise', ajaxPromise

module.exports =
  defer: defr
  all: all
  ajaxPromise: ajaxPromise
