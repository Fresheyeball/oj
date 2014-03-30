// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var initTablePanel;
    initTablePanel = function(tableDef) {
      var initDropTarget, panel;
      panel = OJ.panels.panel({
        id: "qbTablePanel"
      });
      initDropTarget = function(thisPanel) {
        thisPanel.dropTarget = Ext.create("Ext.dd.DropTarget", thisPanel.el, {
          ddGroup: "sqlDDGroup",
          notifyDrop: function(source, event, data) {
            var qbTablePanel;
            qbTablePanel = void 0;
            qbTablePanel = Ext.getCmp("qbTablePanel");
            qbTablePanel.add({
              xtype: "qbSqlWindowTable",
              constrain: true,
              title: data.records[0].get("text")
            }).show();
            return true;
          }
        });
      };
      panel.addProp("items", [
        {
          xtype: "draw",
          listeners: {
            afterrender: function() {
              var thisPanel;
              thisPanel = this;
              initDropTarget(thisPanel);
            }
          }
        }
      ]);
      panel.init();
      return {
        xtype: "qbTablePanel",
        border: false,
        region: "center",
        height: 280,
        split: true,
        layout: "fit"
      };
    };
    OJ.actions.querybuilder.register("qbTablePanel", initTablePanel);
  })((typeof global !== "undefined" && global ? global : (typeof window !== "undefined" ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=qbTablePanel.map