﻿// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var className, nodeName;
    nodeName = 'x-infograph';
    className = 'infograph';
    OJ.components.members[nodeName] = className;
    OJ.components.register(className, function(options, owner) {
      var active, colNum, count, defaults, disabled, icon, inactive, ret, rowNum, total, unknown, _i, _j, _ref, _ref1;
      defaults = {
        icon: 'male',
        height: 10,
        width: 10,
        active: 90,
        inactive: 10,
        disabled: 0,
        unknown: 0,
        props: {
          "class": 'infograph'
        },
        styles: {
          color: '#4193d0'
        }
      };
      OJ.extend(defaults, options, true);
      ret = OJ.component(defaults, owner, nodeName);
      count = defaults.width * defaults.height;
      total = defaults.active + defaults.inactive + defaults.disabled + defaults.unknown;
      if (total > count) {
        throw new Error('Total members exceeds dimensions of infographic');
      }
      unknown = defaults.unknown;
      disabled = defaults.disabled;
      inactive = defaults.inactive;
      active = defaults.active;
      for (rowNum = _i = _ref = defaults.height; _ref <= 1 ? _i <= 1 : _i >= 1; rowNum = _ref <= 1 ? ++_i : --_i) {
        for (colNum = _j = _ref1 = defaults.width; _ref1 <= 1 ? _j <= 1 : _j >= 1; colNum = _ref1 <= 1 ? ++_j : --_j) {
          icon = 'fa fa-fw fa-' + defaults.icon + ' text-' + defaults.icon;
          if (inactive > 0) {
            inactive -= 1;
            icon += '-light';
          } else if (disabled > 0) {
            disabled -= 1;
            icon += ' text-error';
          } else if (unknown > 0) {
            unknown -= 1;
            icon += ' text-warning';
          } else if (active > 0) {
            active -= 1;
          }
          ret.i({
            props: {
              "class": icon
            }
          });
        }
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=infograph.js.map