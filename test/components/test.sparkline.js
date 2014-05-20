﻿// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    module('x-sparkline', {
      setup: function() {
        OJ['GENERATE_UNIQUE_IDS'] = true;
        return OJ.nodes.div();
      }
    });
    test('Test the sparkline component', function() {
      var dNode, nodeId, sparkline;
      expect(4);
      sparkline = OJ.body.sparkline();
      deepEqual(sparkline.componentName === 'x-sparkline', true, 'Component is an sparkline');
      nodeId = sparkline.getId();
      dNode = document.getElementById(nodeId);
      ok(dNode, 'Node is in the DOM');
      deepEqual(nodeId, dNode.id, 'Element IDs are equal');
      sparkline.remove();
      equal(undefined, document.getElementById(nodeId, 'sparkline has been removed'));
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=test.sparkline.js.map