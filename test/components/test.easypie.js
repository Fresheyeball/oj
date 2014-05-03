// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    module('x-easypie', {
      setup: function() {
        OJ['GENERATE_UNIQUE_IDS'] = true;
        return OJ.nodes.div();
      }
    });
    test('Test the easypie component', function() {
      var dNode, easypie, nodeId;
      expect(4);
      easypie = OJ.body.easypie();
      deepEqual(easypie.componentName === 'x-easypie', true, 'Component is an easypie');
      nodeId = easypie.getId();
      dNode = document.getElementById(nodeId);
      ok(dNode, 'Node is in the DOM');
      deepEqual(nodeId, dNode.id, 'Element IDs are equal');
      easypie.remove();
      equal(undefined, document.getElementById(nodeId, 'easypie has been removed'));
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=test.easypie.map
