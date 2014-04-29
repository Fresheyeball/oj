// Generated by CoffeeScript 1.7.1
(function() {
  var __slice = [].slice;

  (function(OJ) {
    'use strict';
    var nodeName;
    nodeName = 'input';
    OJ.nodes.register(nodeName, function(options, owner, calledFromFactory) {
      var change, click, defaults, newChange, newClick, ret, syncValue, value;
      if (owner == null) {
        owner = OJ.body;
      }
      if (calledFromFactory == null) {
        calledFromFactory = false;
      }
      defaults = {
        props: {
          type: OJ.enums.inputTypes.text,
          placeholder: "",
          value: "",
          size: "",
          maxlength: "",
          autofocus: false,
          autocomplete: "on",
          checked: false
        },
        styles: {},
        events: {
          click: _.noop,
          change: _.noop,
          keyenter: _.noop,
          keyup: _.noop
        }
      };
      OJ.extend(defaults, options);
      value = defaults.props.value;
      syncValue = function() {
        switch (defaults.props.type) {
          case OJ.enums.inputTypes.checkbox:
            return value = ret.$.is(":checked");
          case OJ.enums.inputTypes.radio:
            return value = ret.$.find(":checked").val();
          default:
            return value = ret.val();
        }
      };
      if (defaults.events.click !== _.noop) {
        click = defaults.events.click;
        newClick = function() {
          var event, retval;
          event = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          retval = click.apply(null, event);
          syncValue();
          return retval;
        };
        defaults.events.click = newClick;
      }
      if (defaults.events.change !== _.noop) {
        change = defaults.events.change;
        newChange = function() {
          var event, retval;
          event = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          retval = change.apply(null, event);
          syncValue();
          return retval;
        };
        defaults.events.change = newChange;
      }
      ret = OJ.element(nodeName, defaults.props, defaults.styles, defaults.events, defaults.text);
      if (false === calledFromFactory) {
        OJ.nodes.factory(ret, owner);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=input.map
