﻿// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    'use strict';
    var insert, insertImpl, onError;
    onError = function(eventObj) {
      OJ.debug.error(eventObj.target.error);
      return new Error(eventObj.target.error);
    };
    insertImpl = function(dbManager, tableName, records) {
      var deferred, doInsert;
      deferred = Q.defer();
      doInsert = function() {
        var e, objectStore, transaction;
        try {
          transaction = dbManager.getDb().transaction([tableName], "readwrite");
          objectStore = transaction.objectStore(tableName);
          OJ.each(records, function(rec) {
            objectStore.add(rec);
          });
        } catch (_error) {
          e = _error;
          console.log(e, e.stack);
          deferred.reject(new Error("Could not insert records", e));
        }
        return deferred.resolve(true);
      };
      dbManager.promises.connect.then(doInsert, function() {
        deferred.reject();
      });
      return deferred.promise;
    };
    insert = function(dbWrapper, tableName, records) {
      return insertImpl(dbWrapper, tableName, records);
    };
    OJ.db.register("insert", insert);
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=dbInsert.js.map