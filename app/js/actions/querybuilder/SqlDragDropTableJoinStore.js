/* jshint undef: true, unused: true */
/* global window:true, Ext:true, $: true */

/**
* The Tabble Join Store represents the join data bound between columns across tables
*/
(function _joinsStoreIIFE(n$) {

    /**
     * Instance a collection of fields to describe a JOIN in the SQL output table
    */
    var SqlDragDropTableJoinModel = n$.models.model({
        name: 'Ext.' + n$.name + '.SqlDragDropTableJoinModel',
        dataTypeCollection: [
            ['id'],
            ['leftTableId'],
            ['rightTableId'],
            ['leftTableField'],
            ['rightTableField'],
            ['joinCondition'],
            ['joinType', 'boolean']
        ]
    });

    n$.actions.querybuilder.lift('SqlDragDropTableJoinModel', SqlDragDropTableJoinModel);

    /**
     * Define the store
    */
    var SqlDragDropTableJoinStore = n$.stores.store({ name: 'Ext.' + n$.name + '.SqlDragDropTableJoinStore', model: n$.actions.querybuilder.SqlDragDropTableJoinModel });

    /**
     * Put the class into the namespace
    */
    n$.actions.querybuilder.lift('SqlDragDropTableJoinStore', SqlDragDropTableJoinStore);



}(window.$nameSpace$));