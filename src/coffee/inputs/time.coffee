OJ = require '../oj'
require '../core/object'
require '../dom/nodeFactory'
input = require '../dom/input'

inputName = 'time'

inpt = (options, owner = OJ.body) ->

  defaults =
    props:
      type: inputName
    styles: {}
    events:
      click: OJ.noop

  OJ.extend defaults, options, true

  ret = input defaults, owner
  ret

OJ.inputs.register inputName, inpt
module.exports = inpt
