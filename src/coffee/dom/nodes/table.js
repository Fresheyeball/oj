// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    'use strict';
    var nodeName;
    nodeName = 'table';
    OJ.nodes.register(nodeName, function(options, owner, calledFromFactory) {
      var cells, defaults, init, ret, rows, tbody;
      if (owner == null) {
        owner = OJ.body;
      }
      if (calledFromFactory == null) {
        calledFromFactory = false;
      }
      defaults = {
        props: {
          cellpadding: 0,
          cellspacing: 0,
          align: "",
          width: "",
          cellalign: "left",
          cellvalign: "top"
        },
        styles: {},
        events: {
          click: _.noop
        },
        cells: {
          "class": "",
          align: '',
          'vertical-align': '',
          cellpadding: '',
          margin: ''
        },
        firstAlignRight: false,
        oddAlignRight: false
      };
      rows = [];
      cells = {};
      OJ.extend(defaults, options);
      ret = OJ.element(nodeName, defaults.props, defaults.styles, defaults.events, defaults.text);
      tbody = null;
      init = _.once(function() {
        tbody = OJ.nodes.tbody({}, ret, false);
        rows.push(OJ.nodes.tr({}, tbody, false));
      });
      ret.add('cell', function(rowNo, colNo) {
        var cell, idx, row, td;
        init();
        if (rowNo < 1) {
          rowNo = 1;
        }
        if (colNo < 1) {
          colNo = 1;
        }
        row = rows[rowNo - 1];
        if (!row) {
          while (rows.length < rowNo) {
            row = OJ.nodes.tr({}, tbody, false);
            rows.push(row);
          }
        }
        td = row[0].cells[colNo];
        if (td) {
          cell = OJ.restoreElement('td', td);
        }
        if (!td) {
          while (row[0].cells.length < colNo) {
            idx = row[0].cells.length;
            td = row[0].cells[idx - 1];
            if (td && idx === colNo) {
              cell = OJ.restoreElement('td', td);
            } else {
              cell = OJ.nodes.td({
                props: defaults.cells
              }, row, false);
            }
          }
        }
        if (!cell.isValid) {
          OJ.nodes.factory(cell, row, rowNo + colNo);
        }
        return cell;
      });
      if (false === calledFromFactory) {
        OJ.nodes.factory(ret, owner);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=table.map
