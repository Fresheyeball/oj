﻿// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    'use strict';
    var nodeName;
    nodeName = 'button';
    OJ.nodes.register(nodeName, function(options, owner, calledFromFactory) {
      var defaults, ret;
      if (owner == null) {
        owner = OJ.body;
      }
      if (calledFromFactory == null) {
        calledFromFactory = false;
      }
      defaults = {
        props: {
          type: 'button'
        },
        styles: {},
        events: {
          click: _.noop
        }
      };
      OJ.extend(defaults, options, true);
      ret = OJ.element(nodeName, defaults.props, defaults.styles, defaults.events, defaults.text);
      if (false === calledFromFactory) {
        OJ.nodes.factory(ret, owner);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=button.js.map