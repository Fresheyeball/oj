((OJ) ->
  
  ###
  True if the object is a true Object or Array
  ###
  canEach = (obj) ->
    (_.isPlainObject obj) or _.isArray obj

  
  ###
  Iterate an object with optional callBack and recursion
  ###
  each = (obj, onEach, recursive) ->
    if canEach obj
      _.forEach obj, (val, key) ->
        if onEach and (val or key)
          quit = onEach val, key
          return false  if false is quit
        each val, onEach, true  if true is recursive
        return

    return

  OJ.register "each", each
  return
)  ((if typeof global isnt 'undefined' and global then global else (if typeof window isnt 'undefined' then window else this))).OJ