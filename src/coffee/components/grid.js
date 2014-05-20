﻿// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var className, nodeName;
    nodeName = 'x-grid';
    className = 'grid';
    OJ.components.members[nodeName] = className;
    OJ.components.register(className, function(options, owner) {
      var defaults, fillMissing, ret, rows, tiles;
      defaults = {
        tileSizes: {
          smallSpan: '',
          mediumSpan: '',
          largeSpan: ''
        },
        props: {
          "class": 'grid'
        }
      };
      OJ.extend(defaults, options, true);
      ret = OJ.component(defaults, owner, nodeName);
      rows = [];
      tiles = OJ.array2D();
      fillMissing = function() {
        return tiles.each(function(rowNo, colNo, val) {
          var row;
          if (!val) {
            row = ret.row(rowNo);
            return row.tile(colNo, {});
          }
        });
      };
      ret.add('row', function(rowNo) {
        var nuRow;
        if (rowNo == null) {
          rowNo = rows.length - 1 || 1;
        }
        nuRow = rows[rowNo - 1];
        if (!nuRow) {
          while (rows.length < rowNo) {
            nuRow = ret.div({
              props: {
                "class": 'row'
              }
            });
            rows.push(nuRow);
          }
          nuRow.add('tile', function(colNo, opts) {
            var nuTile;
            opts = OJ.extend(OJ.extend({}, defaults.tileSizes), opts);
            nuTile = OJ.components.tile(opts, nuRow);
            tiles.set(rowNo, colNo, nuTile);
            return nuTile;
          });
        }
        return nuRow;
      });
      ret.add('tile', function(rowNo, colNo, opts) {
        var i, row, tile, tryTile;
        if (!rowNo || rowNo < 1) {
          rowNo = 1;
        }
        if (!colNo || colNo < 1) {
          colNo = 1;
        }
        row = ret.row(rowNo);
        tile = tiles.get(rowNo, colNo);
        if (!tile) {
          i = 0;
          while (i < colNo) {
            i += 1;
            tryTile = tiles.get(rowNo, i);
            if (!tryTile) {
              if (i === colNo) {
                tile = row.tile(colNo, opts);
              } else if (!tile) {
                row.tile(i);
              }
            }
          }
        }
        fillMissing();
        return tile;
      });
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=grid.js.map